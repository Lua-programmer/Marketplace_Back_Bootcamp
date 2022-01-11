import { Company } from './../companies/entities/company.entity';
import { Category } from './../categories/entities/category.entity';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateProductDto } from './dto/create-product.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Product } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(private db: PrismaService) {}

    async create(data: CreateProductDto): Promise<Product> {
        // const newCategories = data.category.map(category => ({
        //     id: category,
        // }));

        
        const product = await this.db.product.create({
            data: {
                ...data,
            },
            
        });

        return product;
    }

    async findAll(): Promise<Product[]> {
        
        const product = await this.db.product.findMany();

        return product;
        
    }

    async findOne(id: number): Promise<Product> {
        const product = await this.db.product.findUnique({
            where: { 
                id 
            },
            include: {
                categories:true,
            },
        });

        if (!product) {
            throw new NotFoundException('ID not found');
        }

        return product;
    }

    async update(id: number, data:Prisma.ProductUpdateInput):Promise<Product>{
      const productUpdated = await this.db.product.update({
          data: data,
          where: { id : id },
      });

      return productUpdated;
    }

    async delete(id: number): Promise<{ message: string }> {
        const productExists = await this.db.product.findUnique({
            where: { id },
        });

        if (!productExists) {
            throw new NotFoundException('Product with entered ID not found!');
        } else {
            await this.db.product.delete({
                where: { id },
            });
        }

        return { message: 'ID was found and deleted' };
    }
}
