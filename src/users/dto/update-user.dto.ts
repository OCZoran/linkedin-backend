import { IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { Gender } from 'src/users/enum/gender.enum';
import { Place } from 'src/users/enum/place.enum';
import { Region } from 'src/users/enum/region.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsEnum(Region)
  region?: string;

  @IsOptional()
  @IsEnum(Place)
  place?: number;

  @IsDate()
  @IsOptional()
  createdAt?: Date;
}
