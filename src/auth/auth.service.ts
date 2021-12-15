import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { PrismaService } from 'src/prisma.service';
  import { LoginDto } from './dto/login.dto';
  import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class AuthService {
    constructor(private db: PrismaService, private jwt: JwtService) {}
  
    async login(dadosDoLogin: LoginDto) {
      const companyExists = await this.db.company.findUnique({
        where: { email: dadosDoLogin.email },
      });
  
      if (!companyExists) {
        throw new NotFoundException('Company Not Found');
      }
  
      const passwordValid = await bcrypt.compare(
        dadosDoLogin.password,
        companyExists.password,
      );
  
      if (passwordValid) {
        const email = {
          email: companyExists.email,
        };
  
        const token = await this.jwt.sign(email);
  
        return { token };
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    }
  }