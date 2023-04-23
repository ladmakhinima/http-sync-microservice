import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    credit: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    _id: true,
    id: false,
  }
);

export default model("users", userSchema);
