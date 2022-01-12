import { UpdateProductDto } from './dto/update-product.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma, Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create-product')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get('find-all')
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.ProductCreateInput) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: number) {
    return this.productsService.delete(+id);
  }
}
