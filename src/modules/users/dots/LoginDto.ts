import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
export class LoginDto {
  @IsNotEmpty({
    message: '请输入用户名',
  })
  @IsString()
  username: string;

  @IsNotEmpty({
    message: '请输入密码',
  })
  @IsString()
  password: string;
}
