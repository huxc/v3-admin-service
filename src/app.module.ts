import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './modules/users/users.module';
import { CustomerModule } from './modules/customer/customer.module';
import { jwtConfig } from './config/jwt-config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/http/jwt.auth.grard';
import { UploadController } from './modules/upload/upload.controller';
import JwtAuthStrategy from './common/http/jwt-auth.strategy';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.register(jwtConfig),
    UsersModule,
    CustomerModule,
    MulterModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  // 注册为全局守卫
  providers: [
    JwtAuthStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [UploadController],
})
export class AppModule {}
