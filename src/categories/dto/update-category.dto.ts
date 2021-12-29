import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsString()
    name: string;

    @IsString()
    image: string;

    @IsOptional()
    @IsNumber({}, { each: true })
    product?: number[]
}
