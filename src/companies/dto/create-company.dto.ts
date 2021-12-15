import { IsString, IsEmail, MinLength, IsNotEmpty, Length} from 'class-validator';
export class CreateCompanyDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @Length(6,150)
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @Length(6,15)
    password: string;
  
    @IsString()
    @Length(6, 15)
    passwordConfirmation: string;
    cnpj: string;
  
    @IsString()
    address: string;
  
    @IsString()
    city: string;
    cep: string;
  
    @IsString()
    country: string;
  
    @IsString()
    uf: string;
    
    telephone: string;
    image: string;
}