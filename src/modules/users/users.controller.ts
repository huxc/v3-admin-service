import { Controller, Get, Post, Body } from '@nestjs/common';
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

  @Get('authcodes')
  getAuthCodes() {
    return this.usersService.getAuthCodes();
  }
}
