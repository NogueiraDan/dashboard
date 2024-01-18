import mongoose, { Model, Schema, Document } from "mongoose";
import { Brand } from "../entities/Brand";
import { EntityRepository } from "../interfaces/EntityRepository";

interface BrandMongoDocument extends Document, Brand {}

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const brandModel = mongoose.model<BrandMongoDocument>(
  "Brand",
  BrandSchema,
  "brands",
);

export default class MongoBrandRepository implements EntityRepository {
  async findAll(query: any): Promise<Document[]> {
    const users = await brandModel.find(query);
    return users;
  }
  async findById(id: string): Promise<Document | null> {
    const user = await brandModel.findById(id);
    return user;
  }
  async create(data: Partial<Document>): Promise<Document> {
    const user = await brandModel.create(data);
    return user;
  }
  async update(id: string, data: Partial<Document>): Promise<Document | null> {
    const userUpdated = await brandModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return userUpdated;
  }
  async delete(id: string): Promise<void> {
    await brandModel.findOneAndDelete({ _id: id });
    const json: any = {
      message: "User deleted!",
    };
    return json;
  }
}
