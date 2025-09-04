import { Repository } from 'typeorm';
import { User } from '../../../shared/entities/user.entity';
import { Appointment } from '../../../shared/entities/appointment.entity';
import { Transaction } from '../../../shared/entities/transaction.entity';
export declare class AdminService {
    private readonly userRepository;
    private readonly appointmentRepository;
    private readonly transactionRepository;
    constructor(userRepository: Repository<User>, appointmentRepository: Repository<Appointment>, transactionRepository: Repository<Transaction>);
    getDashboardStats(): Promise<{
        totalUsers: number;
        totalAppointments: number;
        totalTransactions: number;
    }>;
}
