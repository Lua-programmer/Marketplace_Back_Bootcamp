import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Category } from '@prisma/client';
import { PrismaClientKnownRequestError, PrismaClientRustPanicError } from '@prisma/client/runtime';



@Injectable()
export class CategoriesService {
  constructor(private db: PrismaService) {}

  // private readonly _include = {
  //   product: {
  //     select: {
  //       categories: true
  //     }
  //   }
  // }

  async create(data: CreateCategoryDto):Promise<Category> {
    return await this.db.category.create({
      data: data,
    });
  }

  // async create(data: Prisma.CategoryCreateInput) {
  //   const category = await this.db.category.create({
  //     data,
  //     include: this._include
  //   });
    
  //   return category;
  // }

  async findAll(): Promise<Category[]> {
    return this.db.category.findMany();
  }

  // async findAll(): Promise<Category[]>{
  //   const category = await this.db.category.findMany({
  //     include: this._include
  //   });
  //   return category;
  // }

  async findOne(id: number) {
    const category = await this.db.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new NotFoundException;
    }

    return category;
  }

  // async findOne(id: number): Promise<Category> {
  //   const category = await this.db.category.findUnique({
  //     where: { id },
  //     include: this._include 
  //   });

  //   if (!category) {
  //     throw new NotFoundException('ID not found');
  //   }

  //   return category;
  // }

  // async update(id: number, data:UpdateCategoryDto): Promise<Category> {
  //   const categoryUpdated = await this.db.category.update({
  //     data: data,
  //     where: { id },
  //   });
  //   return categoryUpdated;
  // }

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
