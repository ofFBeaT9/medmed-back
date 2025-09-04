import { Repository } from 'typeorm';
import { Transaction } from '../../shared/entities/transaction.entity';
import { StripeService } from '../../shared/modules/stripe/stripe.service';
export declare class TransactionService {
    private readonly transactionRepository;
    private readonly stripeService;
    constructor(transactionRepository: Repository<Transaction>, stripeService: StripeService);
    findAll(): Promise<Transaction[]>;
}
