import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { NodeMailerService } from 'src/node-mailer/node-mailer.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, NodeMailerService],
})
export class CompanyModule {}
