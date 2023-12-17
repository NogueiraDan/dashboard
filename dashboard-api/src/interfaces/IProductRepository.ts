import { ProductDocument } from "../models/Product";

export default interface IProductRepository {
  findAll(query?: string): Promise<ProductDocument[]>;
  findById(id: string): Promise<ProductDocument | null>;
  create(data: Partial<ProductDocument>): Promise<ProductDocument>;
  update(
    id: string,
    data: Partial<ProductDocument>
  ): Promise<ProductDocument | null>;
  delete(id: string): Promise<void | null>;
}
