import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TransactionDto } from './dto/transaction.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('tHash') tHash: string): string {
    const transaction = new TransactionDto();
    transaction.transactionHash = tHash;
    const ret = this.appService.getTransaction(transaction);
    if (ret) {
      return `${tHash} is valid`;
    }
    return `${tHash} is not valid`;
  }
}
