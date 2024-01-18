import mongoose, { Document, Schema } from "mongoose";
import { Product } from "../entities/Product";
import { EntityRepository } from "../interfaces/EntityRepository";

interface ProductMongoDocument extends Document, Product {}

const ProductMongoSchema = new Schema<ProductMongoDocument>({
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
    type: String,
    ref: "Category",
    required: true,
  },
  brand: {
    type: String,
    ref: "Brand",
    required: true,
  },
});

export const productModel = mongoose.model<ProductMongoDocument>(
  "Product",
  ProductMongoSchema,
  "products",
);

export default class MongoProductRepository implements EntityRepository {
  async findAll(query: any): Promise<Document[]> {
    const users = await productModel.find(query);
    return users;
  }
  async findById(id: string): Promise<Document | null> {
    const user = await productModel.findById(id);
    return user;
  }
  async create(data: Partial<Document>): Promise<Document> {
    const user = await productModel.create(data);
    return user;
  }
  async update(id: string, data: Partial<Document>): Promise<Document | null> {
    const userUpdated = await productModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return userUpdated;
  }
  async delete(id: string): Promise<void> {
    await productModel.findOneAndDelete({ _id: id });
    const json: any = {
      message: "User deleted!",
    };
    return json;
  }
}
