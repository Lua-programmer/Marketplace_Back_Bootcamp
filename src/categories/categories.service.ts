import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Category } from '@prisma/client';
import { PrismaClientKnownRequestError} from '@prisma/client/runtime';



@Injectable()
export class CategoriesService {
  constructor(private db: PrismaService) {}

  async create(data: CreateCategoryDto):Promise<Category> {
    return await this.db.category.create({
      data: data,
    });
  }

  async findAll(): Promise<Category[]> {
    return this.db.category.findMany();
  }

  async findOne(id: number) {
    const category = await this.db.category.findUnique({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });

    if (!category) {
      throw new NotFoundException;
    }

    return category;
  }

  async update(id:number, data:Prisma.CategoryUpdateInput): Promise<Category> {
    const categoryUpdated = await this.db.category.update({
        data: data,
        where: { id },
    });
    
    return categoryUpdated;
  }

  async remove(id: number) {
    try {
      return await this.db.category.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError
      ) {
        throw new NotFoundException(id);
      }

      throw error;
    }
  }
}
