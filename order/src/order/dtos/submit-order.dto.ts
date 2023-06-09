import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";

export class SubmitOrderDTO {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsNotEmpty()
  @IsMongoId()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
