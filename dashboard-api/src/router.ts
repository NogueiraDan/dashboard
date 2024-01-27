import { Router } from "express";
import { authorize, authenticate } from "./middlewares/authMiddleware";
// Provedor que faz a Injeção de Depêndencia
import { userController } from "./providers/UserProvider";
import { categoryController } from "./providers/CategoryProvider";
import { brandController } from "./providers/BrandProvider";
import { productController } from "./providers/ProductProvider";

export const router = Router();
router.get("/", (req, res) => {
  res.json({ message: "Initial route from API" });
});

// Rotas de Usuário
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
router.post("/users", userController.create);
router.post("/login", userController.login);

// Rotas de Categorias
router.get("/categories", categoryController.findAll);
router.get("/categories/:id", categoryController.findOne);

// Rotas de Marcas
router.get("/brands", brandController.findAll);
router.get("/brands/:id", brandController.findOne);

// Rotas de Produtos
router.get("/products", productController.findAll);
router.get("/products/:id", productController.findOne);

// Rotas protegidas pelos Middlewares
router.post("/products", authenticate, productController.create);
router.patch("/users/:id", authenticate, authorize, userController.update);
router.delete("/users/:id", authenticate, userController.delete);
router.patch("/products/:id", authenticate, authorize, productController.update);
router.delete("/products/:id", authenticate, productController.delete);
router.post("/brands", authenticate, brandController.create);
router.patch("/brands/:id", authenticate, brandController.update);
router.delete("/brands/:id", authenticate, brandController.delete);
router.post("/categories", authenticate, categoryController.create);
router.patch("/categories/:id", authenticate, categoryController.update);
router.delete("/categories/:id", authenticate, categoryController.delete);

