import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
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

    company: number[];
}
