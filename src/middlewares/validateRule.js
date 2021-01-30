// function testJSON(text) {
//   if (typeof text !== "string") {
//     return false;
//   }
//   try {
//     JSON.parse(text);
//     return true;
//   } catch (error) {
//     return false;
//   }
// }

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
  if (typeof data !== "object" && typeof data !== "string") {
    return next({
      status: 400,
      err: "data should be one of ['string', 'Array', 'Object'].",
    });
  }
  return next();
};
