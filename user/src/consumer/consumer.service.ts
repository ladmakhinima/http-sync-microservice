import { Inject, Service } from "typedi";
import { UserService } from "../user/user.service";
import { BaseEventModel } from "../models/base-event.model";

@Service()
export class ConsumerService {
  @Inject()
  private readonly userService: UserService;

  handleServerEvent(data: BaseEventModel) {
    if (data.event === "update_credit") {
      return this.userService.updateCredit(
        data.payload.userId,
        data.payload.credit
      );
    }
  }
}
