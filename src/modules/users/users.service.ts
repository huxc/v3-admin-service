import { Injectable, UnauthorizedException } from '@nestjs/common';
import { users as UsersDto } from '../../dtos/users';
import { LoginDto } from './dots/LoginDto';
import { PrismaClient } from '@prisma/client';
import { pagination } from 'prisma-extension-pagination';
import { JwtService } from '@nestjs/jwt';

const prisma = new PrismaClient().$extends(pagination());

@Injectable()
export class UsersService {
  constructor(private readonly jwtService: JwtService) {}
  // 登录
  async login(loginUser: LoginDto) {
    const user = await prisma.users.findFirst({
      where: { ...loginUser },
      select: {
        user_id: true,
        username: true,
        email: true,
        nickname: true,
        created_at: true,
      },
    });
    if (user) {
      const token = this.jwtService.sign(user);
      return {
        ...user,
        access_token: `Bearer ${token}`,
      };
    } else {
      throw new UnauthorizedException('用户不存在');
    }
  }

  // 获取权限码
  getAuthCodes(user: UsersDto) {
    console.log('🚀 ~ UsersService ~ getAuthCodes ~ user:', user.user_id);
    return 'codes';
  }
}
