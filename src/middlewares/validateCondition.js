export default (req, res, next) => {
  const {
    rule: { condition },
  } = req.body;
  const values = ["eq", "neq", "gt", "gte", "contains"];
  if (!condition || condition === null) {
    return next({
      status: 400,
      err: "rule.condition is required.",
    });
  }
  if (!values.includes(condition)) {
    return next({
      status: 400,
      err: `rule.condition can only be one of ["eq", "neq", "gt", "gte", "contains"].`,
    });
  }
  return next();
};
