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
router.post("/categories", categoryController.create);

// Rotas de Marcas
router.get("/brands", brandController.findAll);
router.post("/brands", brandController.create);
router.patch("/brands/:id", brandController.update);
router.get("/products", productController.findAll);

// Rotas de Produtos
// Rotas protegidas pelos Middlewares
router.post("/products", authenticate, productController.create);
router.patch("/users/:id", authenticate, authorize, userController.update);
router.delete("/users/:id", authorize, userController.delete);
