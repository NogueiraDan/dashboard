import mongoose, { Schema, Document, Types } from "mongoose";

export interface ProductDocument extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: Schema.Types.ObjectId;
  brand: Schema.Types.ObjectId;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
});

export default mongoose.model<ProductDocument>(
  "Product",
  ProductSchema,
  "products"
);
