import mongoose, { Document, Schema } from "mongoose";
import { Category } from "../entities/Category";
import { EntityRepository } from "../interfaces/EntityRepository";

interface CategoryMongoDocument extends Document, Category {}

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const categoryModel = mongoose.model<CategoryMongoDocument>(
  "Category",
  CategorySchema,
  "categories"
);

export default class MongoCategoryRepository implements EntityRepository {
  async findAll(query: any): Promise<Document[]> {
    const users = await categoryModel.find(query);
    return users;
  }
  async findById(id: string): Promise<Document | null> {
    const user = await categoryModel.findById(id);
    return user;
  }
  async create(data: Partial<Document>): Promise<Document> {
    const user = await categoryModel.create(data);
    return user;
  }
  async update(id: string, data: Partial<Document>): Promise<Document | null> {
    const userUpdated = await categoryModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return userUpdated;
  }
  async delete(id: string): Promise<void> {
    await categoryModel.findOneAndDelete({ _id: id });
    const json: any = {
      message: "User deleted!",
    };
    return json;
  }
}
