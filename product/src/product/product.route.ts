import { Inject, Service } from "typedi";
import { ProductController } from "./product.controller";
import { Router } from "express";
import { validatorMiddleware } from "../middlewares/validation.middleware";
import { CreateProductDTO } from "./dtos";

@Service()
export class ProductRouter {
  @Inject()
  public readonly productController: ProductController;

  private router: Router;

  constructor() {
    this.router = Router();
  }

  config() {
    this.router.post(
      "/",
      validatorMiddleware(CreateProductDTO),
      this.productController.createProductAction.bind(this.productController)
    );

    this.router.get(
      "/",
      this.productController.findAllProductAction.bind(this.productController)
    );

    return this.router;
  }
}
