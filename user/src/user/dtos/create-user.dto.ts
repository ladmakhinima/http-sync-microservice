import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  credit: number;
}
