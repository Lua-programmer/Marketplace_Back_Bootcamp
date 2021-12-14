import { IsString, IsEmail, MinLength} from 'class-validator';
export class CreateCompanyDto {
    @IsString()
    @IsEmail({}, { message: 'Please enter a valid email address.' })
    email: string;
  
    @IsString({ message: 'Enter a valid name.' })
    name: string;
  
    @IsString({ message: 'Your password should be at least six characters' })
    @MinLength(6)
    password: string;
  
    @IsString({ message: 'Your password confirmation should be at least six characters' })
    @MinLength(6)
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