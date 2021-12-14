import { Category } from '../entities/category.entity';
import {IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateCategoryDto extends Category{
    @IsString()
    name:string;
    image: string;
    product: Prisma.ProductUncheckedCreateNestedManyWithoutCategoryInput

}
