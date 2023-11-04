import Car from "../models/car.js";
import { validationResult } from "express-validator";
import { errorResponse, successResponse } from "../utils/response.js";

export const createCar = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return errorResponse(res, 422, errors.array()[0]);

  try {
    const { model, price, phone, numberOfPics } = req.body;
    const owner = req.user.userId;
    const files = req.files;
    const images = files.map((image) => "./image/" + image.filename);
    const car = new Car({ model, price, phone, images, owner, numberOfPics });
    await car.save();
    successResponse(res, 201, "Car posting successful", {
      car,
    });
  } catch (error) {
    error.msg = "Car posting failed";
    next(error);
  }
};
