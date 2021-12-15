import { PrismaService } from 'src/prisma.service';
import { Company} from '@prisma/client'
import { Injectable, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import *  as bcrypt from 'bcrypt';

@Injectable()
export class CompaniesService {
  constructor(private db: PrismaService) {}

  async create(data: CreateCompanyDto): Promise<Company> {
    if (data.password !== data.passwordConfirmation) {
      throw new UnauthorizedException(
        'Password and password confirmation are not compatible'
      );
    }
    
    const companyExists = await this.db.company.findUnique({
      where: { email: data.email },
    });

    if (companyExists) {
      throw new ConflictException ('This email is already being used');
    }
    
    const salt = 10;
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

  async update(id: number, data: UpdateCompanyDto): Promise<Company>{
    const company = await this.db.company.update({
      data: data,
      where: {id: id},
    });

    delete company.password;
    return company;

  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
