import path from "path";
import multer from "multer";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, path.resolve("images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    const uniqueName =
      uniqueSuffix + "_" + file.originalname.replace(/\s+/g, "");
    return cb(null, uniqueName);
  },
});

export function fileFilter(req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only image files are allowed!"), false); // Reject the file
  }
}
