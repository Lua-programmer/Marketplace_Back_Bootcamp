import { IsString } from "class-validator";
import { Prisma } from '@prisma/client'
export class CreateCategoryDto {
    @IsString()
    name: string;

    @IsString()
    image: string;

    product: number[];
}
