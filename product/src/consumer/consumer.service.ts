import { Inject, Service } from "typedi";
import { ProductService } from "../product/product.service";
import { BaseEventModel } from "../models/base-event.model";

@Service()
export class ConsumerService {
  @Inject()
  private readonly productService: ProductService;

  handleServerEvent(data: BaseEventModel) {
    if (data.event === "update_quantity") {
      return this.productService.updateQuantity(
        data.payload.productId,
        data.payload.productQuantity
      );
    }
  }
}
