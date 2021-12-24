import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    name: string;

    @IsString()
    price: string;

    @IsString()
    description: string;

    @IsString()
    image: string;

    @IsOptional()
    @IsNumber({}, { each: true })
    category: number[];
}
