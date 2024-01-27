import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/EntityRepository";
import mongoose, { Document, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

interface UserMongoDocument extends Document, User {}

const UserMongoSchema = new Schema<UserMongoDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  profile: { type: String },
});

export const userModel = mongoose.model<UserMongoDocument>(
  "User",
  UserMongoSchema,
  "users",
);

export default class MongoUserRepository implements IUserRepository {
  async findAll(query: any): Promise<Document[]> {
    const users = await userModel.find(query);
    return users;
  }
  async findById(id: string): Promise<Document | null> {
    const user = await userModel.findById(id);
    return user;
  }
  async create(data: Partial<Document>): Promise<Document> {
    const user = await userModel.create(data);
    return user;
  }
  async update(id: string, data: Partial<Document>): Promise<Document | null> {
    const userUpdated = await userModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return userUpdated;
  }
  async delete(id: string): Promise<void> {
    await userModel.findOneAndDelete({ _id: id });
    const json: any = {
      message: "User deleted!",
    };
    return json;
  }

  async login(email: string, password: string) {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    const SECRET: any = process.env.JWT_SECRET;
    if (!passwordMatch) {
      throw new Error("Senhas não coincidem");
    }
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 86400,
    });
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      profile: user.profile,
      phone: user.phone,
      userToken: token,
    };
    return userData;
  }
}
