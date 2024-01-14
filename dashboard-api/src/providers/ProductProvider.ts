import ProductController from "../controllers/ProductController";
import { ProductService } from "../services/ProductService";
import MongoProductRepository from "../repositories/MongoProductRepository";

const productRepository = new MongoProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

export { productController };
