import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import AuthCompany from './auth-company.decorator';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dados: LoginDto) {
    return this.authService.login(dados);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  profile(@AuthCompany() user: User): User {
    return user;
  }
}