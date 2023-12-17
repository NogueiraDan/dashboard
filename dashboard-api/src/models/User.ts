import mongoose, { Schema, Document } from "mongoose";

export enum UserProfile {
  OWNER = "OWNER",
  EMPLOYEE = "EMPLOYEE",
}

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  profile: UserProfile;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  profile: {
    type: String,
    enum: UserProfile,
    required: true,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema, "users");
