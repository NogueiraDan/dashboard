import { Document } from "mongoose";
import { IUserRepository } from "../interfaces/EntityRepository";
export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async findAll(query: any) {
    const users = await this.userRepository.findAll(query);
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async create(userData: Partial<Document>) {
    const user = await this.userRepository.create(userData);
    return user;
  }

  async update(id: string, userData: Partial<Document>) {
    const user = await this.userRepository.update(id, userData);
    return user;
  }

  async delete(id: string) {
    await this.userRepository.delete(id);
  }

  async login(email: string, password: string) {
    const userData = await this.userRepository.login(email, password);
    return userData;
  }
}
