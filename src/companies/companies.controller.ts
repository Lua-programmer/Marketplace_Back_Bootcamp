import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from '@prisma/client';
import CreateCompanyDto from './dto/create-company.dto';


@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  
  @Post('create-company')
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get('find-all')
  findAll(): Promise<Company[]> {
    return newFunction();

    function newFunction(): Promise<Company[]> {
      return this.companiesService.findAll();
    }
  }

  @Get('find/:id')
  findOne(@Param('id') id: number): Promise<Company> {
    return this.companiesService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
  //   return this.companiesService.update(+id, updateCompanyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companiesService.remove(+id);
  // }
}
