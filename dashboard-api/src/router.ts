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
router.post("/categories", categoryController.create);
router.patch("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);

// Rotas de Marcas
router.get("/brands", brandController.findAll);
router.get("/brands/:id", brandController.findOne);
router.post("/brands", brandController.create);
router.patch("/brands/:id", brandController.update);
router.delete("/brands/:id", brandController.delete);

// Rotas de Produtos
router.get("/products", productController.findAll);
router.get("/products/:id", productController.findOne);
router.patch("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

// Rotas protegidas pelos Middlewares
router.post("/products", authenticate, productController.create);
router.patch("/users/:id", authenticate, userController.update);
router.delete("/users/:id", authenticate, userController.delete);
