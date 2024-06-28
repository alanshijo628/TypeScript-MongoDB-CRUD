import mongoose, { Document, Schema } from "mongoose";

export interface UserSchema extends Document {
  fullName: string;
  email: string;
  position: string;
}

const userSchema = new Schema<UserSchema>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
