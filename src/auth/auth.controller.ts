import { Controller, Body, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './dto/login.dto';
import AuthUser from './auth-user.decorator';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('login')
    login(@Body() data: LoginDto): Promise<AuthResponse> {
        return this.service.login(data);
    }

    @Get('myself')
    myself(@AuthUser() user: User): User {
        return user;
    }
}
