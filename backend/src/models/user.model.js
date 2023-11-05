import mongoose from "mongoose";
import { isEmail, isStrongPassword } from "validator";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return isEmail(value);
        },
        message: "Please add correct email",
      },
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
      validate: {
        validator: (value) => {
          return isStrongPassword(value);
        },
        message:
          "Password should contain a lowercase, uppercase, and a number!",
      },
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
