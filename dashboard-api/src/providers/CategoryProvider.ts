import CategoryController from "../controllers/CategoryController";
import { CategoryService } from "../services/CategoryService";
import CategoryRepository from "../repositories/CategoryRepository";
import Category from "../models/Category";

const category = Category;

const categoryRepository = new CategoryRepository(category);
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

export { categoryController };
