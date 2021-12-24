import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@prisma/client';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create-category')
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get('find-all')
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  // @Get('find/:id')
  // findOne(@Param('id') id: number): Promise<Category> {
  //   return this.categoriesService.findOne(+id);
  // }

  @Get('find/:id')
  findOne(@Param() { id }): Promise<Category> {
    return this.categoriesService.findOne(+id)
  }

  // @Patch('update/:id')
  // update(@Param('id') { id }, @Body() data: UpdateCategoryDto):Promise<Category> {
  //   return this.categoriesService.update(+id, data);
  // }

  @Delete('remove/:id')
  remove(@Param('id') id:number ): Promise<Category> {
    return this.categoriesService.remove(+id);
  }
}
