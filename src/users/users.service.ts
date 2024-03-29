import { CreateUserDto } from './dto/create-user.dto';
import {
    Injectable,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private db: PrismaService) {}

    async create({ data, role }: { data: CreateUserDto; role: UserRole; }): Promise<User> {
        const userExists = await this.db.user.findUnique({
            where: { email: data.email },
        });

        if (userExists) {
            throw new ConflictException('This email already in use.');
        }

        const salt = 10;
        const hashedPassword = await bcrypt.hash(data.password, salt);

        const user = await this.db.user.create({
            data: {
                ...data,
                role: role,
                password: hashedPassword,
            },
        });

        delete user.password;
        return user;
    }

    async findMany() {
        const user = await this.db.user.findMany();
        const newUser = user.map(({ password, ...remaining }) => remaining);
        return newUser;
    }

    async findOne(id: number): Promise<User> {
        const user = await this.db.user.findUnique({
            where: { id },
        });

        if (!user) {
            throw new NotFoundException('Id not found.');
        }

        delete user.password;
        return user;
    }

    async update({ id, updateUserDto }: { id: number; updateUserDto: UpdateUserDto; }): Promise<User> {
        const userUpdated = await this.db.user.update({
            data: updateUserDto,
            where: { id: id },
        });
        return userUpdated;
    }

    async deleteOne(id: number): Promise<{ message: string }> {
        await this.db.user.delete({
            where: { id: id },
        });

        return {
            message: 'User deleted successfully',
        };
    }
}
