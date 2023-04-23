import { Schema, model } from "mongoose";

const userOrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    credit: {
      type: Number,
      required: true,
    },
  },
  { id: false, _id: true, timestamps: true }
);

export default model("userOrders", userOrderSchema);
