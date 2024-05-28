import { IsNotEmpty, IsString, Length, IsInt } from 'class-validator';

export class SeachDto {
  @IsNotEmpty({ message: '页码为不能空' })
  @IsInt({ message: '请输入整数页码' })
  pageNum: number;

  @IsNotEmpty({ message: '页数不能为空' })
  @IsInt({ message: '请输入整数页数' })
  pageSize: number;

  idCard: string;

  nickname: string;

  createdStartAt: string;

  createdEndAt: string;
}
