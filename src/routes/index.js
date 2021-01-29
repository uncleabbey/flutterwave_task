import { Router } from "express";
import { entryUrl } from "../controllers";
import validateRoute from "./validate";

const router = new Router();

router.get("/", entryUrl);

router.use(validateRoute);

export default router;
