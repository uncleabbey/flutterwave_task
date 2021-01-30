export default (req, res, next) => {
  const {
    rule: { condition_value: conditionValue },
  } = req.body;
  if (!conditionValue) {
    return next({
      status: 400,
      err: "rule.condition_value is required.",
    });
  }
  return next();
};
