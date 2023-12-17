import { BrandDocument } from "../models/Brand";

export default interface IBrandRepository {
  findAll(query?: any): Promise<BrandDocument[]>;
  findById(id: string): Promise<BrandDocument | null>;
  create(data: Partial<BrandDocument>): Promise<BrandDocument>;
  update(
    id: string,
    data: Partial<BrandDocument>
  ): Promise<BrandDocument | null>;
  delete(id: string): Promise<void | null>;
}
