import { UserDocument } from "../models/User";

export default interface IUserRepository {
  findAll(query?: string): Promise<UserDocument[]>;
  findOne(id: string): Promise<UserDocument | null>;
  create(data: Partial<UserDocument>): Promise<UserDocument>;
  update(id: string, data: Partial<UserDocument>): Promise<UserDocument | null>;
  delete(id: string): Promise<void | null>;
  login(email: string, password: string): Promise<any>;
// eslint-disable-next-line semi
}
