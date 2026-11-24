BEGIN;

-- Fail instead of silently deleting historical duplicates; reconcile any
-- existing duplicates before re-running this migration.
CREATE UNIQUE INDEX IF NOT EXISTS orders_gateway_order_unique ON public.orders (razorpay_order_id) WHERE razorpay_order_id IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS orders_gateway_payment_unique ON public.orders (razorpay_payment_id) WHERE razorpay_payment_id IS NOT NULL;

-- All checkout inserts go through the verified server, including signed-in users.
-- Retain SELECT and admin UPDATE permissions/RLS policies.
REVOKE INSERT ON public.orders, public.order_items FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.record_verified_checkout(p_order jsonb, p_items jsonb)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE saved public.orders%ROWTYPE;
BEGIN
  IF jsonb_typeof(p_items) IS DISTINCT FROM 'array' OR jsonb_array_length(p_items) = 0 THEN
    RAISE EXCEPTION 'Missing order items';
  END IF;
  -- Serialize retries of the same gateway order, then return the existing order.
  PERFORM pg_advisory_xact_lock(hashtextextended(p_order->>'razorpay_order_id', 0));
  SELECT * INTO saved FROM public.orders WHERE razorpay_order_id = p_order->>'razorpay_order_id';
  IF FOUND THEN
    IF saved.razorpay_payment_id IS DISTINCT FROM p_order->>'razorpay_payment_id' THEN
      RAISE EXCEPTION 'Payment conflict';
    END IF;
    RETURN jsonb_build_object('order_number', saved.order_number, 'total', saved.total);
  END IF;
  INSERT INTO public.orders (
    customer_id, shipping_name, shipping_phone, shipping_address, shipping_city, shipping_state, shipping_pincode,
    subtotal, shipping_fee, total, payment_method, payment_status, status, razorpay_order_id, razorpay_payment_id
  ) VALUES (
    (p_order->>'customer_id')::uuid, p_order->>'shipping_name', p_order->>'shipping_phone', p_order->>'shipping_address',
    p_order->>'shipping_city', p_order->>'shipping_state', p_order->>'shipping_pincode',
    (p_order->>'subtotal')::numeric, (p_order->>'shipping_fee')::numeric, (p_order->>'total')::numeric,
    'online', 'paid', 'confirmed', p_order->>'razorpay_order_id', p_order->>'razorpay_payment_id'
  ) RETURNING * INTO saved;
  INSERT INTO public.order_items (order_id, product_id, product_name, product_image, quantity, unit_price, total_price)
  SELECT saved.id, x.product_id, x.product_name, x.product_image, x.quantity, x.unit_price, x.total_price
  FROM jsonb_to_recordset(p_items) AS x(product_id uuid, product_name text, product_image text, quantity integer, unit_price numeric, total_price numeric);
  RETURN jsonb_build_object('order_number', saved.order_number, 'total', saved.total);
END;
$$;
REVOKE ALL ON FUNCTION public.record_verified_checkout(jsonb, jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.record_verified_checkout(jsonb, jsonb) TO service_role;

CREATE OR REPLACE FUNCTION public.checkout_security_ready()
RETURNS boolean LANGUAGE sql SECURITY INVOKER AS $$ SELECT true $$;
REVOKE ALL ON FUNCTION public.checkout_security_ready() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.checkout_security_ready() TO service_role;
COMMIT;
