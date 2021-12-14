import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoginDto, AuthResponse } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private db: PrismaService, private jwt: JwtService) {}

    async login(login: LoginDto): Promise<AuthResponse> {
        const { email, password } = login;

        const user = await this.db.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const hashValid = await bcrypt.compare(password, user.password);

        if (!hashValid) {
            throw new UnauthorizedException('Invalid Password');
        }

        delete user.password;
        return {
            token: this.jwt.sign({ email }),
            user,
        };
    }
}
