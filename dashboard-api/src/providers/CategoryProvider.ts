import CategoryController from "../controllers/CategoryController";
import { CategoryService } from "../services/CategoryService";
import CategoryRepository from "../repositories/MongoCategoryRepository";

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

export { categoryController };
