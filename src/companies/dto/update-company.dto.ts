import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsNumberString, IsString, IsUrl, MinLength } from 'class-validator';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
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

    @IsNumberString(14)
    cnpj: string;

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
}
