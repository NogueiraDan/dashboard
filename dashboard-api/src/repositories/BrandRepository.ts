import { Model } from "mongoose";
import { BrandDocument } from "../models/Brand";

export default class BrandRepository {
  constructor(private brandModel: Model<BrandDocument>) {}

  async findAll(query: any): Promise<BrandDocument[]> {
    return this.brandModel.find(query);
  }

  async findById(id: string): Promise<BrandDocument | null> {
    return this.brandModel.findById(id);
  }

  async create(data: Partial<BrandDocument>): Promise<BrandDocument> {
    return this.brandModel.create(data);
  }

  async update(
    id: string,
    data: Partial<BrandDocument>
  ): Promise<BrandDocument | null> {
    return this.brandModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.brandModel.findOneAndDelete({ _id: id });
  }
}
