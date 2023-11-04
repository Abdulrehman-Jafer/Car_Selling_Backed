import multer from "multer";
import { storage, fileFilter } from "../configs/multer.js";
export const configged_multer = multer({ storage, fileFilter });
