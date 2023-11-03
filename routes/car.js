import { Router } from "express";
import { createCar } from "../controllers/car.js";
import { verifyToken } from "../middlewares/jwt.js";
import { configged_multer } from "../middlewares/multer.js";

const router = Router();
router.post("/", verifyToken, configged_multer.array("carImages"), createCar);

export default router;
