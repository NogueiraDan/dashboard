import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export default class ProductController {
  constructor(private productService: ProductService) {}

  findAll = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.findAll(req.query);
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  findOne = async (req: Request, res: Response) => {
    try {
      const product = await this.productService.findOne(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  create = async (req: Request, res: Response) => {
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.price ||
      !req.body.stock ||
      !req.body.category ||
      !req.body.brand
    ) {
      return res
        .status(500)
        .send({ error: "Existem campos obrigatórios vazios!" });
    }

    try {
      const product = await this.productService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const productUptaded = await this.productService.update(
        req.params.id,
        req.body,
      );
      res.status(200).json(productUptaded);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      await this.productService.delete(req.params.id);
      res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };
}
