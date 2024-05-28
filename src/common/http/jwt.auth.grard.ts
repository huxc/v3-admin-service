import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../decorator/public.decorator';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;
    return super.canActivate(context);

    // const request: Request = context.switchToHttp().getRequest();
    // const token = request.header('authorization') || '';
    // if (!token) {
    //   throw new UnauthorizedException('为读取到token,请先登录后再操作');
    // }
    // try {
    //   const info = this.jwtService.verify(token);
    //   (request as any).user = info.user;
    //   return true;
    // } catch (e) {
    //   throw new UnauthorizedException('登录 token 失效，请重新登录');
    // }
  }
}
