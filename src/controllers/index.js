import successResponse from "../utils/successResponse";
import validator from "./validate";

const entryUrl = (req, res) => {
  const msg = "My Rule-Validation API";
  const data = {
    name: "Kayode Gabriel Abiodun",
    github: "@uncleabbey",
    email: "kayodegabriela@gmail.com",
    mobile: "07069388069",
  };

  return successResponse(res, 200, msg, data);
};

export { entryUrl, validator };
