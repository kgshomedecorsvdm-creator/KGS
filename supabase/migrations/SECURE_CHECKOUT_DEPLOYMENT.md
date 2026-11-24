# Secure guest checkout rollout

Changes are prepared locally; this file does not mean the live database or site has been updated.

1. Back up the live database and inspect its `orders` and `order_items` schema. The migration targets the shipping-name/shipping-phone schema used by the existing payment API and `supabase_schema.sql`. Other legacy setup scripts in this repository define different schemas; do not run them over production.
2. Check for repeated non-null `razorpay_order_id` and `razorpay_payment_id` values in existing orders. Reconcile any duplicates manually. The migration deliberately fails rather than deleting historical records.
3. Apply `202611240001_secure_guest_checkout.sql` through the project's normal migration process. It adds unique gateway identifiers, a service-role-only atomic recording function, and revokes direct browser inserts to orders/items. Existing account reads and admin update policies remain in place. Apply the migration and API/frontend release during a coordinated maintenance window: the old verification API does not use the atomic function.
4. Deploy frontend and API changes together. Keep `SUPABASE_SERVICE_ROLE_KEY` and Razorpay secret only in server environment variables. The new create-order endpoint checks migration readiness before opening a payment.
5. Confirm Razorpay auto-capture is enabled. Only a captured, unrefunded INR payment matching the signed checkout amount and gateway order is accepted. Authorized-but-not-captured payments require reconciliation; never mark these orders paid manually without checking the gateway.
6. Run a Razorpay test-mode purchase for both a guest and a signed-in customer against staging, then verify one order and the correct items in the admin view. Exercise cancellation and a repeated verification request. No real payments were made by the local tests.

## Controls and limits

- Server prices, quantities, shipping, account identity, currency, and gateway order are bound in an HMAC-signed checkout snapshot valid for 24 hours. Browser-supplied account IDs and verification-time cart/address changes are ignored. The snapshot contains personal data: keep it out of logs and URLs.
- Optional account association is resolved through Supabase's authenticated user endpoint. Guests use a null customer ID and are not granted access to other customers' orders.
- Order header and items are written in one transaction. A unique gateway order/payment plus transaction lock prevents duplicate purchases on retries. Direct browser insertion is denied even to signed-in users.
- Local tests use mocked Razorpay/Supabase HTTP responses and an in-memory PostgreSQL database. They do not verify live credentials, gateway capture settings, production RLS, or real concurrent serverless instances. The database uniqueness constraints enforce duplication protection independently of a single process.
- The existing IP limiter is per process, not a distributed abuse-control system. Configure platform/WAF rate limits for `/api/create-order` and `/api/verify-payment` before handling substantial public traffic.
- There is no automatic webhook reconciliation in this change. If a customer closes the browser after paying, payment capture is delayed, or verification fails, reconcile using Razorpay payment/order IDs before fulfillment. Add a verified webhook and durable pending-checkout storage for automatic recovery.
- This is targeted checkout hardening, not a full penetration test or a guarantee against every attack.

Gateway field reference: [Razorpay payment API documentation](https://github.com/razorpay/razorpay-node/blob/master/documents/payment.md).
