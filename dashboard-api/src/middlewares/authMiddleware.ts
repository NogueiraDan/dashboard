import { Request, Response, NextFunction } from "express";
import { userModel } from "../repositories/MongoUserRepository";
import jwt from "jsonwebtoken";

export const authenticate = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const token: any = req.headers["x-access-token"];
  const SECRET: any = process.env.JWT_SECRET;
  if (!token) {
    return res
      .status(403)
      .send({ auth: false, message: "Nenhum token foi informado." });
  }
  jwt.verify(token, SECRET, (err: any, decoded: any) => {
    if (err) {
      return res
        .status(500)
        .json({ auth: false, message: "Falha ao autenticar o token" });
    }
    req.userId = decoded.id;
    next();
  });
};

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user: any = await userModel.findById(req.body.ownerId);
  if (user.profile !== "OWNER") {
    return res
      .status(403)
      .json({ message: "Acesso negado! Seu perfil não tem autorização" });
  }
  next();
};
