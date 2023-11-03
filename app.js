import express from "express";
import { config } from "dotenv";
import userRoute from "./routes/user.js";
import carRoute from "./routes/car.js";
import { handle404 } from "./utils/404.js";
import { handleError } from "./utils/handleError.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
config();
app.use(cors("*"));
app.use(express.json());
app.use("/images", express.static("./images"));

//Entry route
app.use("/", (req, res, next) => res.json(Date.now()));

app.use("/user", userRoute);

app.use("/car", carRoute);

app.use("*", handle404);

app.use(handleError);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.log("ERROR WHILE CONNECTING DB", err);
  });
