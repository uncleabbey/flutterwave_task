const validatorHelper = (
  data,
  field,
  ruleCondition,
  conditionValue
) => {
  switch (ruleCondition) {
    case "eq": {
      if (typeof data === "object" && !Array.isArray(data)) {
        const fieldArr = field.split(".");
        const fieldValue =
          data[fieldArr[0]][fieldArr[1]] || data[fieldArr[0]];
        return fieldValue === conditionValue;
      }
      return false;
    }
    case "neq": {
      if (typeof data === "object" && !Array.isArray(data)) {
        const fieldArr = field.split(".");
        const fieldValue =
          data[fieldArr[0]][fieldArr[1]] || data[fieldArr[0]];
        return fieldValue !== conditionValue;
      }
      return false;
    }
    case "gt": {
      if (typeof data === "object" && !Array.isArray(data)) {
        const fieldArr = field.split(".");
        const fieldValue =
          data[fieldArr[0]][fieldArr[1]] || data[fieldArr[0]];
        return fieldValue > conditionValue;
      }
      return false;
    }
    case "gte": {
      if (typeof data === "object" && !Array.isArray(data)) {
        const fieldArr = field.split(".");
        const fieldValue =
          data[fieldArr[0]][fieldArr[1]] || data[fieldArr[0]];
        return fieldValue >= conditionValue;
      }
      return false;
    }
    case "contains": {
      if (typeof data === "object" && !Array.isArray(data)) {
        const fieldArr = field.split(".");
        const fieldValue =
          data[fieldArr[0]][fieldArr[1]] || data[fieldArr[0]];
        if (
          typeof fieldValue === "object" &&
          Array.isArray(fieldValue)
        ) {
          return fieldValue.includes(conditionValue);
        }
      }
      return false;
    }
    default:
      return false;
  }
};

export default validatorHelper;
