import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './modules/users/users.module';
import { CustomerModule } from './modules/customer/customer.module';
import { jwtConfig } from './config/jwt-config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/http/jwt.auth.grard';
import JwtAuthStrategy from './common/http/jwt-auth.strategy';

@Module({
  imports: [JwtModule.register(jwtConfig), UsersModule, CustomerModule],
  // 注册为全局守卫
  providers: [
    JwtAuthStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
