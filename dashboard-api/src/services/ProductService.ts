import { EntityRepository } from "../interfaces/EntityRepository";
import { ProductDocument } from "../models/Product";

export class ProductService {
  constructor(private productRepository: EntityRepository) {}

  async findAll(query: any) {
    const products = await this.productRepository.findAll(query);
    return products;
  }

  async findOne(id: string) {
    const product = await this.productRepository.findById(id);
    return product;
  }

  async create(productData: Partial<ProductDocument>) {
    const product = await this.productRepository.create(productData);
    return product;
  }

  async update(id: string, productData: Partial<ProductDocument>) {
    const product = await this.productRepository.update(id, productData);
    return product;
  }

  async delete(id: string) {
    await this.productRepository.delete(id);
  }
}
