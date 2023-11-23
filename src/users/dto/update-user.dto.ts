import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  email?: string;

  @IsNotEmpty()
  password?: string;

  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  gender?: string;

  @IsNotEmpty()
  region?: string;

  @IsNotEmpty()
  phoneNumber?: number;

  @IsNotEmpty()
  createdAt?: Date;
}
