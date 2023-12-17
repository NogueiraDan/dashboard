import IUserRepository from "../interfaces/IUserRepository";
import { UserDocument } from "../models/User";

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async create(userData: Partial<UserDocument>) {
    const user = await this.userRepository.create(userData);
    return user;
  }

  async update(id: string, userData: Partial<UserDocument>) {
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
