import { Document } from "mongoose";
import { EntityRepository } from "../interfaces/EntityRepository";

export class BrandService {
  constructor(private brandRepository: EntityRepository) {}

  async findAll(query: any) {
    const users = await this.brandRepository.findAll(query);
    return users;
  }

  async findOne(id: string) {
    const user = await this.brandRepository.findById(id);
    return user;
  }

  async create(userData: Partial<Document>) {
    const user = await this.brandRepository.create(userData);
    return user;
  }

  async update(id: string, userData: Partial<Document>) {
    const user = await this.brandRepository.update(id, userData);
    return user;
  }

  async delete(id: string) {
    await this.brandRepository.delete(id);
  }
}
