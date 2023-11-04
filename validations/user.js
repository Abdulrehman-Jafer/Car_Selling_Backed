import { body } from "express-validator";

export const emailValidation = body("email")
  .isEmail()
  .withMessage("Please enter a valid email address");

export const passwordValidation = body("password")
  .isLength({ min: 6 })
  .withMessage("Password must be at least 6 characters long");
//   .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
//   .withMessage(
//     "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
//   );
