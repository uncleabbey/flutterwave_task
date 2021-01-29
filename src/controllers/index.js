import successResponse from "../utils/successResponse";
import validateRule from "./validate";

const entryUrl = (req, res) => {
  const msg = "UncleAbbey Simple Rule-Validation API";
  const data = {
    name: "Kayode Gabriel Abiodun",
    github: "@uncleabbey",
    email: "kayodegabriela@gmail.com",
    mobile: "07069388069",
    twitter: "@uncleabbey_",
  };
  // return res.status(200).json({
  //   status: "success",
  //   message: msg,
  //   data
  // })
  return successResponse(res, 200, msg, data);
};

export { entryUrl, validateRule };
