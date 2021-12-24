import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from '@prisma/client';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  
  @Post('create-company')
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    delete createCompanyDto.passwordConfirmation
    return this.companiesService.create(createCompanyDto);
  }

  @Get('find-all')
  findAll() {
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
