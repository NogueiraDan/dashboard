import BrandController from "../controllers/BrandController";
import { BrandService } from "../services/BrandService";
import BrandRepository from "../repositories/MongoBrandRepository";

const brandRepository = new BrandRepository();
const brandService = new BrandService(brandRepository);
const brandController = new BrandController(brandService);

export { brandController };
