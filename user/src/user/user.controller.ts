import { Inject, Service } from "typedi";
import { UserService } from "./user.service";
import { Request, Response } from "express";
import { CreateUserDTO } from "./dtos";
import { tryCatch } from "../decorators/try-catch.decorator";

@Service()
export class UserController {
  @Inject()
  public readonly userService: UserService;

  @tryCatch
  async createUserAction(request: Request, response: Response) {
    const user = await this.userService.create(request.body as CreateUserDTO);
    return response.status(201).json({ user });
  }

  @tryCatch
  async findAllUsersAction(request: Request, response: Response) {
    const users = await this.userService.findAll();
    return response.status(200).json({ users });
  }
}
