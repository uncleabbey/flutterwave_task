import successResponse from "../utils/successResponse";

function testJSON(text) {
  if (typeof text !== "string") {
    return false;
  }
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
}

export const validateRule = (req, res, next) => {
  const { rule, data } = req.body;
  if (!rule) {
    return next({ status: 400, err: "rule is required." });
  }
  if (!data) {
    return next({ status: 400, err: "data is required." });
  }
  if (!testJSON(rule)) {
    return next({ status: 400, err: "Invalid JSON payload passed." });
  }
  if (typeof rule !== "object") {
    return next({ status: 400, err: "rule should be an object." });
  }
  return next();
};

export const validateField = (req, res, next) => {
  const {
    rule: { field },
  } = req.body;

  if (!field) {
    return next({ status: 400, err: "field is required." });
  }

  if (typeof field !== "object" || typeof field !== "string") {
    return next({
      status: 400,
      err: "field should an object or string.",
    });
  }

  if (typeof field === "string") {
    return next();
  }

  const child = Object.keys(field)[0];
  if (!field[`${child}`]) {
    return next({
      status: 400,
      err: `field.${child} is required.`,
    });
  }
  const gChild = Object.keys(field[`${child}`])[0];
  if (!field[`${child}`][gChild]) {
    return next({
      status: 400,
      err: `field.${child}.${gChild} is required.`,
    });
  }

  return next();
};
export const validateCondition = (req, res, next) => {
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

export const validateConditionValue = (req, res, next) => {
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

export const validate = (d, f, rc, rv) => {
  switch (rc) {
    case "eq": {
      if (typeof d === "string") {
        return d === rv;
      }
      if (typeof d === "object" && !Array.isArray(d)) {
        return d[`${f}`] === rv;
      }
      return false;
    }
    case "neq": {
      if (typeof d === "string") {
        return d !== rv;
      }
      if (typeof d === "object" && !Array.isArray(d)) {
        return d[`${f}`] !== rv;
      }
      return false;
    }
    case "gt": {
      if (typeof d === "string") {
        return d > rv;
      }
      if (typeof d === "object" && !Array.isArray(d)) {
        return d[`${f}`] > rv;
      }
      return false;
    }
    case "gte": {
      if (typeof d === "string") {
        return d >= rv;
      }
      if (typeof d === "object" && !Array.isArray(d)) {
        return d[`${f}`] >= rv;
      }
      return false;
    }
    case "contains": {
      if (typeof d === "object" && Array.isArray(d)) {
        return d.includes(rv);
      }
      return false;
    }
    default:
      return false;
  }
};
const validator = (req, res) => {
  const {
    rule: { field, condition, condition_value: conditionValue },
    data,
  } = req.body;

  const checkValidate = validate(
    data,
    field,
    condition,
    conditionValue
  );
  if (!checkValidate) {
    return successResponse();
  }
};
export default validator;
