import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';


@Module({
  imports: [CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
