import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [UsersModule, AuthModule, ProductsModule, CompaniesModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
