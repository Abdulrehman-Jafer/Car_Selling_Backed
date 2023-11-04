import { Schema, Types, model } from "mongoose";

const schema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    numberOfPics: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    owner: {
      type: Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Car = new model("Car", schema);
export default Car;
