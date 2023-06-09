import { Service } from "typedi";
import ProductModel from "./product.model";
import { CreateProductDTO } from "./dtos";
import { error } from "../helper/error-creator.helper";
import { createProductOrder } from "../decorators/create-product-order.decorator";

@Service()
export class ProductService {
  @createProductOrder
  async create(data: CreateProductDTO) {
    const product = await this.checkExistByTitle(data.title);
    if (product) {
      throw new Error(error("product already exist with title", 409));
    }
    return new ProductModel({
      title: data.title,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
    }).save();
  }

  async checkExistByTitle(title: string) {
    const product = await ProductModel.exists({ title }).lean();
    return !!product;
  }

  findAll() {
    return ProductModel.find().lean();
  }

  updateQuantity(_id: string, quantity: number) {
    return ProductModel.updateOne({ _id }, { $set: { quantity } });
  }
}
