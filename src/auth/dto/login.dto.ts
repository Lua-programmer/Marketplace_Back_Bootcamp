import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { User } from '@prisma/client';

export class LoginDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
}