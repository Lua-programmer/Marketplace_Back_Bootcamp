import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [CompaniesController],
  providers: [CompaniesService, PrismaService]
})
export class CompaniesModule {}
