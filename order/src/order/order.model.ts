import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    productId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    finalAmount: {
      type: Number,
      required: true,
    },
  },
  { id: false, _id: true, timestamps: true }
);

export default model("orders", orderSchema);
