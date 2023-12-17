import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

export default class CategoryController {
  constructor(private categoryService: CategoryService) {}

  findAll = async (req: Request, res: Response) => {
    try {
      const categories = await this.categoryService.findAll(req.query);
      res.json(categories);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  findOne = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.findOne(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  create = async (req: Request, res: Response) => {
    if (!req.body.name || !req.body.description) {
      return res
        .status(500)
        .send({ error: "Existem campos obrigatórios vazios!" });
    }

    try {
      const category = await this.categoryService.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const categoryUptaded = await this.categoryService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(categoryUptaded);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      await this.categoryService.delete(req.params.id);
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };
}
