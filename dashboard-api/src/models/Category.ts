import mongoose, { Schema, Document } from "mongoose";

export interface CategoryDocument extends Document {
  name: string;
  description: string;
}

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.model<CategoryDocument>(
  "Category",
  CategorySchema,
  "categories"
);
