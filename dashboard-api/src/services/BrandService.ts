import { BrandDocument } from "../models/Brand";
import IBrandRepository from "../interfaces/IBrandRepository";

export class BrandService {
  constructor(private brandRepository: IBrandRepository) {}

  async findAll(query:any) {
    const users = await this.brandRepository.findAll(query);
    return users;
  }

  async findOne(id: string) {
    const user = await this.brandRepository.findById(id);
    return user;
  }

  async create(userData: Partial<BrandDocument>) {
    const user = await this.brandRepository.create(userData);
    return user;
  }

  async update(id: string, userData: Partial<BrandDocument>) {
    const user = await this.brandRepository.update(id, userData);
    return user;
  }

  async delete(id: string) {
    await this.brandRepository.delete(id);
  }
}
