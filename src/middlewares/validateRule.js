export default (req, res, next) => {
  const { rule, data } = req.body;
  if (!rule) {
    return next({ status: 400, err: "rule is required." });
  }
  if (!data) {
    return next({ status: 400, err: "data is required." });
  }
  if (typeof rule !== "object") {
    return next({ status: 400, err: "rule should be an object." });
  }
  if (
    typeof data === "object" ||
    typeof data === "string" ||
    Array.isArray(data)
  ) {
    return next();
  }
  return next({
    status: 400,
    err: "data should be one of ['string', 'Array', 'Object'].",
  });
};
