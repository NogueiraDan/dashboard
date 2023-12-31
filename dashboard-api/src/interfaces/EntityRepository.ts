import { Document } from "mongoose";

export interface EntityRepository {
  findAll(query?: string): Promise<Document[]>;
  findById(id: string): Promise<Document | null>;
  create(data: Partial<Document>): Promise<Document>;
  update(id: string, data: Partial<Document>): Promise<Document | null>;
  delete(id: string): Promise<void | null>;
  // eslint-disable-next-line semi
}

export interface IUserRepository extends EntityRepository {
  login(email: string, password: string): Promise<any>;
}
