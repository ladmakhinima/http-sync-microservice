import { Inject, Service } from "typedi";
import { OrderService } from "./order.service";
import { tryCatch } from "../decorators/try-catch.decorator";
import { Request, Response } from "express";
import { SubmitOrderDTO } from "./dtos";

@Service()
export class OrderController {
  @Inject()
  public readonly orderService: OrderService;

  @tryCatch
  async submitOrderAction(request: Request, response: Response) {
    const order = await this.orderService.submitOrder(
      request.body as SubmitOrderDTO
    );
    return response.status(201).json({ order });
  }

  @tryCatch
  async findAllOrdersAction(request: Request, response: Response) {
    const orders = await this.orderService.findAllOrders();
    return response.status(200).json({ orders });
  }
}
