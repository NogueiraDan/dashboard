import { Document } from "mongoose";

interface EntityRepository {
  findAll(query?: string): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: T): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<void | null>;
}

// Caso uma Entidade User precisasse de um metodo de login
interface IUserRepository extends EntityRepository {
  login(email: string, password: string): Promise<any>;
}
