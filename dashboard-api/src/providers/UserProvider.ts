import UserController from "../controllers/UserController";
import { UserService } from "../services/UserService";
import MongoUserRepository from "../repositories/MongoUserRepository";

// Utilizando o Repository do MongoDB como a persistência atual
const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };
