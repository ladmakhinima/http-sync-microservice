import { Service } from "typedi";
import { SubmitOrderDTO } from "./dtos";
import OrderModel from "./order.model";

@Service()
export class OrderService {
  submitOrder(data: SubmitOrderDTO) {
    return new OrderModel({
      userId: data.userId,
      productId: data.productId,
      quantity: data.quantity,
      finalAmount: 0,
    }).save();
  }

  findAllOrders() {
    return OrderModel.find();
  }
}
