import { Injectable, UnauthorizedException } from '@nestjs/common';
import { users as UsersDto } from '../../dtos/users';
import { LoginDto } from './dots/LoginDto';
import { PrismaClient } from '@prisma/client';
import { pagination } from 'prisma-extension-pagination';
import { JwtService } from '@nestjs/jwt';
import { refExpiresIn } from '../../config/jwt-config';

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

      const refresh_token = this.jwtService.sign(user, {
        expiresIn: refExpiresIn,
      });

      return {
        ...user,
        refresh_token,
        access_token: `Bearer ${token}`,
      };
    } else {
      throw new UnauthorizedException('用户不存在');
    }
  }

  async refresh(refresh_token: string) {
    const verified = this.jwtService.verify(refresh_token);
    if (!verified) {
      throw new UnauthorizedException('token 已失效');
    }
    const { exp, iat, ...cleanPayload } = verified;
    const token = this.jwtService.sign(cleanPayload);
    return {
      ...cleanPayload,
      refresh_token,
      access_token: `Bearer ${token}`,
    };
  }

  // 获取权限码
  getAuthCodes(user: UsersDto) {
    return '尚未完善';
  }
}
