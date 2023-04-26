import { Inject, Service } from "typedi";
import { BaseEventModel } from "../models/base-event.model";
import { UserService } from "../user/user.service";
import { ProductService } from "../product/product.service";

@Service()
export class ConsumerService {
  @Inject()
  private readonly userService: UserService;

  @Inject()
  private readonly productService: ProductService;

  async handleServeEvent(data: BaseEventModel) {
    if (data.event === "create_user") {
      return this.userService.create(data.payload);
    } else if (data.event === "create_product") {
      return this.productService.create(data.payload);
    }
  }
}
