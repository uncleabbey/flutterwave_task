import isJson from "../utils/isJson";

const isJsonValid = (req, res, next) => {
  const isValid = isJson(req.body);
  if (isValid) {
    return next();
  }
  return next({
    status: 400,
    err: "Invalid JSON payload passed.",
  });
};

export default isJsonValid;
