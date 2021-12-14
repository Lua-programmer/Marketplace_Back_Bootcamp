import { PrismaService } from 'src/prisma.service';
import { Prisma, Company} from '@prisma/client'
import { Injectable, ConflictException } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import *  as bcrypt from 'bcrypt';

@Injectable()
export class CompaniesService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.CompanyCreateInput): Promise<Company> {
    const companyExists = await this.db.company.findUnique({
      where: { email: data.email },
    });

    if (companyExists) {
      throw new ConflictException ('This email is already being used');
    }
    
    const salt = 15;
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const company = await this.db.company.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    delete company.password;
    return company
  }

  findAll() {
    return `This action returns all companies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
