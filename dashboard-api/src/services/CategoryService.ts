import { Document } from "mongoose";
import { EntityRepository } from "../interfaces/EntityRepository";

export class CategoryService {
  constructor(private categoryRepository: EntityRepository) {}

  async findAll(query: any) {
    const categories = await this.categoryRepository.findAll(query);
    return categories;
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findById(id);
    return category;
  }

  async create(categoryData: Partial<Document>) {
    const category = await this.categoryRepository.create(categoryData);
    return category;
  }

  async update(id: string, categoryData: Partial<Document>) {
    const category = await this.categoryRepository.update(id, categoryData);
    return category;
  }

  async delete(id: string) {
    await this.categoryRepository.delete(id);
  }
}
