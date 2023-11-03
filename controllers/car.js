import Car from "../models/car.js";

export const createCar = async (req, res, error) => {
  try {
    const { model, price, phone } = req.body;
    const owner = req.user.userId;
    const files = req.files;
    const images = files.map((image) => "./image/" + image.filename);
    console.log({ body: req.body });
    const car = new Car({ model, price, phone, images, owner });
    await car.save();
    res.status(201).json({
      status: 201,
      message: "car posting successful",
      result: {
        car,
      },
    });
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};
