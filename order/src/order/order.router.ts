import { Inject, Service } from "typedi";
import { OrderController } from "./order.controller";
import { Router } from "express";
import { validatorMiddleware } from "../middlewares/validation.middleware";
import { SubmitOrderDTO } from "./dtos";

@Service()
export class OrderRouter {
  @Inject()
  public readonly orderController: OrderController;

  private router: Router;

  constructor() {
    this.router = Router();
  }

  config() {
    this.router.post(
      "/",
      validatorMiddleware(SubmitOrderDTO),
      this.orderController.submitOrderAction.bind(this.orderController)
    );

    this.router.get(
      "/",
      this.orderController.findAllOrdersAction.bind(this.orderController)
    );

    return this.router;
  }
}
