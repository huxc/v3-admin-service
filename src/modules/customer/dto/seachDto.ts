import { Type, Transform } from 'class-transformer';
import { IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class SeachDto {
  @IsNotEmpty({ message: '页码为不能空' })
  @IsInt({ message: '请输入整数页码' })
  pageNum: number;

  @IsNotEmpty({ message: '页数不能为空' })
  @IsInt({ message: '请输入整数页数' })
  pageSize: number;

  @IsOptional()
  @IsInt()
  gender?: number;

  @IsOptional()
  @IsInt()
  age?: number;

  idCard?: string;

  name?: string;

  createdStartAt?: string;

  createdEndAt?: string;
}
