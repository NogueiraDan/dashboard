import { env } from "node:process";
import { Model } from "mongoose";
import { UserDocument } from "../models/User";
import IUserRepository from "../interfaces/IUserRepository";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export default class UserRepository implements IUserRepository {
  constructor(private userModel: Model<UserDocument>) {}

  async findAll(query: any): Promise<UserDocument[]> {
    return this.userModel.find(query);
  }

  async findOne(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id);
  }

  async create(data: Partial<UserDocument>): Promise<UserDocument> {
    return this.userModel.create(data);
  }

  async update(
    id: string,
    data: Partial<UserDocument>
  ): Promise<UserDocument | null> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findOneAndDelete({ _id: id });
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email: email });
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
      name: user.name,
      email: user.email,
      profile: user.profile,
      phone: user.phone,
      userToken: token,
    };
    
    return userData;
  }
}
