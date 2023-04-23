import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";

export class SubmitOrderDTO {
  @IsNotEmpty()
  @IsMongoId()
  userId: number;

  @IsNotEmpty()
  @IsMongoId()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
