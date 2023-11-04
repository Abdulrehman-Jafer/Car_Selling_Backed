import { Router } from "express";
import { signIn } from "../controllers/user.js";
import { emailValidation, passwordValidation } from "../validations/user.js";

const router = Router();
router.post("/signIn", [emailValidation, passwordValidation], signIn);

export default router;
