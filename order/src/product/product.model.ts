import { Schema, model } from "mongoose";

const productOrderSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
  },
  { id: false, _id: true, timestamps: true }
);

export default model("productOrders", productOrderSchema);
