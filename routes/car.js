import { Router } from "express";
import { createCar } from "../controllers/car.js";
import { verifyToken } from "../middlewares/jwt.js";
import { configged_multer } from "../middlewares/multer.js";
import {
  maxNumberOfPicsValidation,
  modelValidation,
  phoneValidation,
} from "../validations/car.js";
import { body } from "express-validator";

const router = Router();
router.post(
  "/",
  verifyToken,
  configged_multer.array("carImages"),
  [maxNumberOfPicsValidation, modelValidation, phoneValidation],
  createCar
);

export default router;
