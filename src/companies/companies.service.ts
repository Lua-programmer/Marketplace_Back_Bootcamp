import { UpdateCategoryDto } from './../categories/dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';
import { Injectable, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Prisma, Company } from "@prisma/client";
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompaniesService {
  constructor(private db: PrismaService){}

  async create(data: Prisma.CompanyCreateInput ): Promise<Company> {
    const companyExists = await this.db.company.findUnique({
      where: { email: data.email},
    });

    if (companyExists){
      throw new ConflictException('E-mail already registered')
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const company = await this.db.company.create({
      data: {
        ...data,
        password: hashedPassword
      }
    });

    delete company.password;
    return company;
  }

  async findAll(){
    const company = await this.db.company.findMany();
    const newCompany = company.map(({password, ...rest}) => rest);

    return newCompany;
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.db.company.findUnique({
      where: { id },

    });

    if (!company) {
      throw new NotFoundException('ID not found');
    }

    delete company.password;
    return company;
  }

  async update(id: number, data: UpdateCategoryDto):Promise<Company>{
    const companyUpdated = await this.db.company.update({
      data: data,
      where: { id },
    });

    return companyUpdated
  }

  async removeOne(id: number): Promise<{ message: string }> {
    await this.db.company.delete({
      where: { id },
    });

    return {
      message: 'Company deleted successfully'
    }
  }
}
