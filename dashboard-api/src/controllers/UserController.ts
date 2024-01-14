import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import bcrypt from "bcryptjs";

export default class UserController {
  constructor(private userService: UserService) {}

  findAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.findAll(req.query);
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  findOne = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.findOne(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  create = async (req: Request, res: Response) => {
    const { name, email, password, phone, profile } = req.body;

    if (!name || !email || !password || !phone || !profile) {
      return res
        .status(500)
        .send({ error: "Existem campos obrigatórios vazios!" });
    }
    const hashedPassword = bcrypt.hashSync(password, 8);
    const userToSave: any = {
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      profile: profile.toUpperCase(),
    };
    try {
      const user = await this.userService.create(userToSave);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  update = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      const userUptaded = await this.userService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(userUptaded);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      await this.userService.delete(req.params.id);
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  login = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }
    try {
      const userData = await this.userService.login(
        req.body.email,
        req.body.password
      );
      res.status(200).json({ auth: true, data: userData });
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json({ error: "Erro ao fazer o login. Verifique suas credenciais" });
    }
  };
}
