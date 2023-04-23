import { Service } from "typedi";
import { CreateUserDTO } from "./dtos";
import UserModel from "./user.model";

@Service()
export class UserService {
  create(data: CreateUserDTO) {
    return new UserModel({ credit: data.credit, userId: data.userId }).save();
  }

  findById(id: string) {
    return UserModel.findById(id);
  }
}
