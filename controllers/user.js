import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { errorResponse, successResponse } from "../utils/response.js";
import { validationResult } from "express-validator";

export const signIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return errorResponse(res, 422, errors.array()[0]);

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return errorResponse(res, 401, { msg: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    successResponse(res, 200, "Signed in successfully", { token });
  } catch (error) {
    error.msg = "Sign in failed";
    next(error);
  }
};
