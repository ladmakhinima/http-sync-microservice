import { Schema, model } from "mongoose";
const productSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    quantity: {
      required: true,
      type: Number,
    },
    price: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
    id: false,
    _id: true,
  }
);
export default model("products", productSchema);
