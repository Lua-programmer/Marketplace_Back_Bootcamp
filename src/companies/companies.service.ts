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

  // update(id: number, updateCompanyDto: UpdateCompanyDto) {
  //   return `This action updates a #${id} company`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} company`;
  // }
}
