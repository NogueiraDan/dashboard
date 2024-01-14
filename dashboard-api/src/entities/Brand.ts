import mongoose, { Schema, Document } from "mongoose";

export interface BrandDocument extends Document {
  name: string;
}

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model<BrandDocument>("Brand", BrandSchema, "brands");
