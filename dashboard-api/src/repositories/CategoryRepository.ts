import { Model } from "mongoose";
import { CategoryDocument } from "../models/Category";

export default class CategoryRepository {
  constructor(private categoryModel: Model<CategoryDocument>) {}

  async findAll(query: any): Promise<CategoryDocument[]> {
    return this.categoryModel.find(query);
  }

  async findById(id: string): Promise<CategoryDocument | null> {
    return this.categoryModel.findById(id);
  }

  async create(data: Partial<CategoryDocument>): Promise<CategoryDocument> {
    return this.categoryModel.create(data);
  }

  async update(
    id: string,
    data: Partial<CategoryDocument>
  ): Promise<CategoryDocument | null> {
    return this.categoryModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.categoryModel.findOneAndDelete({ _id: id });
  }
}
