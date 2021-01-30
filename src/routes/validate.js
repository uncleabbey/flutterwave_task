import { Router } from "express";
import { validator } from "../controllers";
import validateFieldAgainstData from "../middlewares/validateFieldAgainstData";
import validateRule from "../middlewares/validateRule";
import validateCondition from "../middlewares/validateCondition";
import validateConditionValue from "../middlewares/validateConditionValue";

const router = new Router();

router.post(
  "/validate-rule",
  validateRule,
  validateCondition,
  validateConditionValue,
  validateFieldAgainstData,
  validator
);

export default router;
