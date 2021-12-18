import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Category } from '@prisma/client';



@Injectable()
export class CategoriesService {
  constructor(private db: PrismaService) {}

  private readonly _include = {
    Product: {
      select: {
        categoryId: true
      }
    }
  }

  async create(data: Prisma.CategoryCreateInput) {
    const category = await this.db.category.create({
      data,
      include: this._include
    });
    
    return category;
  }

  async findAll(): Promise<Category[]>{
    const category = await this.db.category.findMany({
      include: this._include
    });
    return category;
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.db.category.findUnique({
      where: { id },
      include: this._include 
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
