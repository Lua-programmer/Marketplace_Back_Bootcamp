import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 15)
  password: string;
}
