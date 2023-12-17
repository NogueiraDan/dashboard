import { Model } from "mongoose";
import { ProductDocument } from "../models/Product";

export default class ProductRepository {
  constructor(private productModel: Model<ProductDocument>) {}

  async findAll(query: any): Promise<ProductDocument[]> {
    return this.productModel.find(query);
  }

  async findById(id: string): Promise<ProductDocument | null> {
    return this.productModel.findById(id);
  }

  async create(data: Partial<ProductDocument>): Promise<ProductDocument> {
    return this.productModel.create(data);
  }

  async update(
    id: string,
    data: Partial<ProductDocument>
  ): Promise<ProductDocument | null> {
    return this.productModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.productModel.findOneAndDelete({ _id: id });
  }
}
