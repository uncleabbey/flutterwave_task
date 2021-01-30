import successResponse from "../utils/successResponse";
import validatorHelper from "../utils/validatorHelper";

const validator = (req, res) => {
  const {
    rule: { field, condition, condition_value: conditionValue },
    data,
  } = req.body;

  const checkValidate = validatorHelper(
    data,
    field,
    condition,
    conditionValue
  );

  const fieldArr = field.split(".");
  const fieldValue =
    data[fieldArr[0]][fieldArr[1]] || data[fieldArr[0]];
  if (!checkValidate) {
    const errData = {
      validation: {
        error: true,
        field,
        field_value: fieldValue,
        condition,
        condition_value: conditionValue,
      },
    };
    const message = `field ${field} failed validation.`;
    return res.status(400).json({
      message,
      status: "error",
      data: errData,
    });
  }
  const message = `field ${field} successfully validated.`;
  const resData = {
    validation: {
      error: false,
      field,
      field_value: fieldValue,
      condition,
      condition_value: conditionValue,
    },
  };
  return successResponse(res, 200, message, resData);
};
export default validator;
