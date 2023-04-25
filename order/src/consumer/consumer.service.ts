import { Inject, Service } from "typedi";
import { BaseEventModel } from "../models/base-event.model";
import { UserService } from "../user/user.service";

@Service()
export class ConsumerService {
  @Inject()
  private readonly userService: UserService;

  async handleServeEvent(data: BaseEventModel) {
    if (data.event === "create_user") {
      return this.userService.create(data.payload);
    }
  }
}
