export default (req, res, next) => {
  // get field from rule inside the req.body
  const {
    rule: { field },
    data,
  } = req.body;

  // check if field is not undefined or null
  if (!field) {
    return next({ status: 400, err: "field is required." });
  }

  // check if field is undefined or null
  if (typeof field !== "string") {
    return next({ status: 400, err: "field can only be a string." });
  }

  // check if data is an array and field is in the array
  if (typeof data === "object" && Array.isArray(data)) {
    const check = data.includes(field);
    if (!check) {
      return next({
        status: 400,
        err: `field ${field} is missing from data.`,
      });
    }
    return next();
  }

  if (typeof data === "object" && !Array.isArray(data)) {
    // check if field exist inside data
    const fieldArr = field.split(".");
    const fieldValue =
      fieldArr[0] in data || fieldArr[1] in data[fieldArr[0]];
    if (!fieldValue) {
      return next({
        status: 400,
        err: `field ${field} is missing from data.`,
      });
    }
  }

  return next();
};
