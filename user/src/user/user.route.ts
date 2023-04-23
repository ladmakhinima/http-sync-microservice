import { Router } from "express";
import { Inject, Service } from "typedi";
import { UserController } from "./user.controller";
import { validatorMiddleware } from "../middlewares/validation.middleware";
import { CreateUserDTO } from "./dtos";

@Service()
export class UserRouter {
  private router: Router;

  @Inject()
  private readonly userController: UserController;

  constructor() {
    this.router = Router();
  }

  config() {
    this.router.post(
      "/",
      validatorMiddleware(CreateUserDTO),
      this.userController.createUserAction.bind(this.userController)
    );

    this.router.get(
      "/",
      this.userController.findAllUsersAction.bind(this.userController)
    );

    return this.router;
  }
}
