import BrandController from "../controllers/BrandController";
import { BrandService } from "../services/BrandService";
import BrandRepository from "../repositories/BrandRepository";
import Brand from "../models/Brand";

const brand = Brand;
const brandRepository = new BrandRepository(brand);
const brandService = new BrandService(brandRepository);
const brandController = new BrandController(brandService);

export { brandController };
