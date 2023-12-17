import { CategoryDocument } from "../models/Category";

export default interface ICategoryRepository {
  findAll(query?: string): Promise<CategoryDocument[]>;
  findById(id: string): Promise<CategoryDocument | null>;
  create(data: Partial<CategoryDocument>): Promise<CategoryDocument>;
  update(
    id: string,
    data: Partial<CategoryDocument>
  ): Promise<CategoryDocument | null>;
  delete(id: string): Promise<void | null>;
}
