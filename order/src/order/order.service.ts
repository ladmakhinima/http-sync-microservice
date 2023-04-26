import { Inject, Service } from "typedi";
import { SubmitOrderDTO } from "./dtos";
import OrderModel from "./order.model";
import { ProductService } from "../product/product.service";
import { UserService } from "../user/user.service";
import { error } from "../helper/error-creator.helper";

@Service()
export class OrderService {
  @Inject()
  private readonly productService: ProductService;

  @Inject()
  private readonly userService: UserService;

  async submitOrder(data: SubmitOrderDTO) {
    const user = await this.userService.findById(data.userId);
    console.log(user);
    if (!user) {
      throw new Error(error("user not found", 404));
    }
    const product = await this.productService.findById(data.productId);
    if (!product) {
      throw new Error(error("product not found", 404));
    }
    if (product.productQuantity - data.quantity < 0) {
      throw new Error(error("product is unavailable", 400));
    }
    const finalAmount = product.productPrice * data.quantity;
    if (user.credit < finalAmount) {
      throw new Error(error("not enough credit", 400));
    }
    const newOrder = await new OrderModel({
      userId: data.userId,
      productId: data.productId,
      quantity: data.quantity,
      finalAmount,
    }).save();

    await this.userService.updateCredit(data.userId, user.credit - finalAmount);

    await this.productService.updateQuantity(
      data.productId,
      product.productQuantity - data.quantity
    );

    return newOrder;
  }

  findAllOrders() {
    return OrderModel.find();
  }
}
