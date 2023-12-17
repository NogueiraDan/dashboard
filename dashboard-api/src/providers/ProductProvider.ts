import ProductController from "../controllers/ProductController";
import {ProductService} from "../services/ProductService";
import ProductRepository from "../repositories/ProductRepository";
import Product from "../models/Product";

const product = Product;
const productRepository = new ProductRepository(product);
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

export { productController };
