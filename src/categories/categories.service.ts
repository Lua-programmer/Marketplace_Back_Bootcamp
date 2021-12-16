import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Category } from '@prisma/client';



@Injectable()
export class CategoriesService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.CategoryCreateInput) {
    const category = await this.db.category.create({
      data,
    });
    
    return category;
  }

  async findAll(): Promise<Category[]>{
    const category = await this.db.category.findMany();
    return category;
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.db.category.findUnique({
      where: { id },

    });

    if (!category) {
      throw new NotFoundException('ID not found');
    }

    return category;
  }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
