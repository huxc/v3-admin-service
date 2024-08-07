import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto } from './dots/LoginDto';
import { Public } from '../../common/decorator/public.decorator';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('login')
  login(@Body(ValidationPipe) loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }

  @Public()
  @Post('refresh')
  async refresh(@Body('refreshToken') refreshToken: string) {
    console.log('🚀 ~ UsersController ~ refresh ~ refreshToken:', refreshToken);
    return this.usersService.refresh(refreshToken);
  }

  @Get('authcodes')
  getAuthCodes(@Request() req) {
    return this.usersService.getAuthCodes(req.user);
  }
}
