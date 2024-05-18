import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import {
  EApplicationClassify,
  EApplicationStatus,
} from 'src/_core/constant/enum.constant';

export class ApplicationUpdateDto {
  @IsOptional()
  @IsEnum(EApplicationStatus)
  status: EApplicationStatus;

  @IsOptional()
  @IsDateString()
  interviewSchedule: Date;

  @IsOptional()
  @IsString()
  companyRemark: string;

  @IsOptional()
  @IsEnum(EApplicationClassify)
  classify: EApplicationClassify;
}
