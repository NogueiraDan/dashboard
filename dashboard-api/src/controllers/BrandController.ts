import { Request, Response } from "express";

import { BrandService } from "../services/BrandService";

export default class BrandController {
  constructor(private brandService: BrandService) {}

  findAll = async (req: Request, res: Response) => {
    try {
      const brands = await this.brandService.findAll(req.query);
      res.json(brands);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  findOne = async (req: Request, res: Response) => {
    try {
      const brand = await this.brandService.findOne(req.params.id);
      res.status(200).json(brand);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  create = async (req: Request, res: Response) => {
    if (!req.body.name) {
      return res
        .status(500)
        .send({ error: "Existem campos obrigatórios vazios!" });
    }

    try {
      const brand = await this.brandService.create(req.body);
      res.status(201).json(brand);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const brandUptaded = await this.brandService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(brandUptaded);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      await this.brandService.delete(req.params.id);
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };
}
