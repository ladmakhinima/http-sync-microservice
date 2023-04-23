import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  credit: number;
}
