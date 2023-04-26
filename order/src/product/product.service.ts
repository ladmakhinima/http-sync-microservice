import { Service } from "typedi";
import { CreateOrderProductDTO } from "./dtos";
import ProductModel from "./product.model";

@Service()
export class ProductService {
  create(data: CreateOrderProductDTO) {
    return new ProductModel({
      productId: data.productId,
      productPrice: data.productPrice,
      productQuantity: data.productQuantity,
    }).save();
  }

  findById(productId: string) {
    return ProductModel.findOne({ productId });
  }

  updateQuantity(productId: string, productQuantity: number) {
    return ProductModel.updateOne({ productId }, { $set: { productQuantity } });
  }
}
