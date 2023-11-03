import path from "path";
import multer from "multer";
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, path.resolve("images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    console.log({ body: req.body });
    const uniqueName =
      uniqueSuffix + "_" + file.originalname.replace(/\s+/g, "");
    return cb(null, uniqueName);
  },
});

export function fileFilter(req, file, cb) {
  cb(null, true); // Accept the file
}

export const configged_multer = multer({ storage, fileFilter });
