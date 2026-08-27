var rateLimitStore = {};

function rateLimit(ip, limit, windowMs) {
  var now = Date.now();
  var key = ip || 'unknown';
  if (!rateLimitStore[key] || rateLimitStore[key].reset < now) {
    rateLimitStore[key] = { count: 1, reset: now + windowMs };
    return false;
  }
  rateLimitStore[key].count++;
  if (rateLimitStore[key].count > limit) return true;
  return false;
}

// Clean up stale entries every 5 minutes
setInterval(function () {
  var now = Date.now();
  for (var key in rateLimitStore) {
    if (rateLimitStore[key].reset < now) delete rateLimitStore[key];
  }
}, 300000);

module.exports = { rateLimit: rateLimit };
