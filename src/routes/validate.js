import { Router } from "express";
import { validator } from "../controllers";
import {
  validateCondition,
  validateConditionValue,
  validateField,
  validateRule,
} from "../controllers/validate";

const router = new Router();

router.post(
  "/validate-rule",
  validateRule,
  validateField,
  validateConditionValue,
  validateCondition,
  validator
);

export default router;
