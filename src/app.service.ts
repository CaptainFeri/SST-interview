import { Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class AppService {
  getTransaction(tHash: TransactionDto): boolean {
    const isValid = new RegExp(`^0x([A-Fa-f0-9]{64})$`).test(
      tHash.transactionHash,
    );
    return isValid;
  }
}
