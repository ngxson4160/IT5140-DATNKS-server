import {
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsString,
  MinLength,
} from 'class-validator';
import { EGender } from 'src/_core/constant/enum.constant';
import { MessageResponse } from 'src/_core/constant/message-response.constant';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @MinLength(8, MessageResponse.COMMON.MIN_LENGTH_8)
  password: string;

  @IsDateString()
  dob: Date;

  @IsEnum(EGender)
  gender: EGender;
}
