import { Injectable, NotFoundException  } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.ProductCreateInput) {
    const product = await this.db.product.create({
      data,
    });
    
    return product;
  }

  async findAll(): Promise<Product[]>{
    const product = await this.db.product.findMany();
    return product;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.db.product.findUnique({
      where: { id },

    });

    if (!product) {
      throw new NotFoundException('ID not found');
    }

    return product;
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
