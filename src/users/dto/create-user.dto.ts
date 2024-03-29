import { Product } from './../../products/entities/product.entity';
import {
    IsString,
    MinLength,
    IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsUrl,
} from 'class-validator';
import { Cart, WishList } from '@prisma/client';

export class CreateUserDto {
    @IsString()
    @IsEmail({}, { message: 'Please enter a valid email address.' })
    email: string;

    @IsString({ message: 'Enter a valid name.' })
    name: string;

    @IsString({ message: 'Your password should be at least six characters' })
    @MinLength(6)
    password: string;

    @IsString({
        message: 'Your password confirmation should be at least six characters',
    })
    @MinLength(6)
    passwordConfirmation: string;

    @IsNumberString(11)
    cpf: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @MinLength(8)
    @IsNumberString()
    cep: string;

    @IsString()
    country: string;

    @IsString()
    uf: string;

    @IsNumberString()
    @IsNotEmpty()
    tel: string;

    @IsUrl()
    @IsNotEmpty()
    image: string;

    products: Product[];
    wishlist: WishList;
    cart: Cart;
}
