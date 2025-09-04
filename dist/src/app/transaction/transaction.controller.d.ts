import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    findAll(): Promise<import("../../shared/entities/transaction.entity").Transaction[]>;
}
