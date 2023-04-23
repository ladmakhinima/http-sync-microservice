import { Inject, Service } from "typedi";
import { ProductService } from "./product.service";
import { tryCatch } from "../decorators/try-catch.decorator";
import { Request, Response } from "express";
import { CreateProductDTO } from "./dtos";

@Service()
export class ProductController {
  @Inject()
  public readonly productService: ProductService;

  @tryCatch
  async createProductAction(request: Request, response: Response) {
    const product = await this.productService.create(
      request.body as CreateProductDTO
    );
    return response.status(201).json({ product });
  }

  @tryCatch
  async findAllProductAction(request: Request, response: Response) {
    const products = await this.productService.findAll();
    return response.status(200).json({ products });
  }
}
