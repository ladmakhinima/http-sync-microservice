import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderProductDTO {
  @IsNotEmpty()
  @IsMongoId()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  productQuantity: number;

  @IsNotEmpty()
  @IsNumber()
  productPrice: number;
}
