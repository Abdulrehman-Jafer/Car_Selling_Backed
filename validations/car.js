import { body } from "express-validator";

export const phoneValidation = body("phone")
  .isLength({ min: 11, max: 11 })
  .withMessage("Phone number must be exactly 11 characters long long");

export const modelValidation = body("model")
  .isLength({ min: 3 })
  .withMessage("Model must be at least 3 characters long");

export const maxNumberOfPicsValidation = body("numberOfPics")
  .isInt({ min: 1, max: 10 })
  .withMessage("Number of pics must be less than or equal 10");
