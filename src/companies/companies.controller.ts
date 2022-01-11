import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from '@prisma/client';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  
  @Post('create-company')
  create(@Body() data: CreateCompanyDto): Promise<Company> {
    delete data.passwordConfirmation
    return this.companiesService.create(data);
  }

  @Get('find-all')
  findAll(): Promise<{ id: number; name: string; email: string; cnpj: string; image: string; createdAt: Date; updatedAt: Date; address: string; city: string; cep: string; country: string; uf: string; tel: string; }[]> {
    return this.companiesService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: number): Promise<Company> {
    return this.companiesService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    delete updateCompanyDto.passwordConfirmation
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete('delete/:id')
  removeOne(@Param('id') id:number):Promise<{ message: string }> {
    return this.companiesService.removeOne(+id)
  }
}
