import UserController from "../controllers/UserController";
import { UserService } from "../services/UserService";
import UserRepository from "../repositories/UserRepository";
import User from "../models/User";

const user = User;
const userRepository = new UserRepository(user);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };
