import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    UnprocessableEntityException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { UserRole } from './enum/role.enum';
import { SimpleGuard } from 'src/auth/simple.guard';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller()
export class UsersController {
    constructor(private service: UsersService) {}

    @Post('create-user')
    createUser(@Body() data: CreateUserDto): Promise<User> {
        delete data.passwordConfirmation;
        return this.service.create(data, UserRole.USER);
    }

    @Role(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    @Post('create-admin')
    createAdmin(@Body() data: CreateUserDto): Promise<User> {
        delete data.passwordConfirmation;
        return this.service.create(data, UserRole.ADMIN);
    }

    @UseGuards(AuthGuard())
    @Get('find-all')
    findMany() {
        return this.service.findMany();
    }

    @UseGuards(AuthGuard())
    @Get('find/:id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.service.findOne(id);
    }

    @UseGuards(AuthGuard())
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return;
    }

    @UseGuards(AuthGuard())
    @Delete('delete/:id')
    deleteOne(@Param('id') id: string): Promise<{ message: string }> {
        return this.service.deleteOne(id);
    }
}
