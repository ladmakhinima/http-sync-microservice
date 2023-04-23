import { Router } from "express";
import { Inject, Service } from "typedi";
import { ConsumerController } from "./consumer.controller";

@Service()
export class ConsumerRouter {
  @Inject()
  private readonly consumerController: ConsumerController;

  private router: Router;

  constructor() {
    this.router = Router();
  }

  config() {
    this.router.post(
      "/",
      this.consumerController.serveEvent.bind(this.consumerController)
    );

    return this.router;
  }
}
