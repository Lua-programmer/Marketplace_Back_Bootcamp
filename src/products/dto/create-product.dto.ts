import { IsString } from "class-validator";
import { Prisma } from "@prisma/client"
export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    price: string;

    @IsString()
    description: string;

    @IsString()
    image: string;

    category: Prisma.CategoryCreateNestedOneWithoutProductInput
}
