import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Company } from '@prisma/client';

const AuthCompany = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const company = request.user as Company;
  delete company.password;
  return company;
});

export default AuthCompany;