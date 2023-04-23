import { error } from "../helper/error-creator.helper";
import { CreateUserDTO } from "./dtos";
import UserModel from "./user.model";
import { Service } from "typedi";

@Service()
export class UserService {
  async create(data: CreateUserDTO) {
    const user = await this.checkEmailExist(data.email);

    if (user) {
      throw new Error(error("email already taken", 400));
    }
    const newUserPayload = {
      credit: data.credit,
      username: data.username,
      email: data.email,
    };

    return new UserModel(newUserPayload).save();
  }

  async checkEmailExist(email: string): Promise<boolean> {
    const user = await UserModel.exists({
      email,
    }).lean();

    return !!user;
  }

  findAll() {
    return UserModel.find();
  }
}
