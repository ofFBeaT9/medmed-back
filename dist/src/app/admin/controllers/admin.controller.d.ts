import { AdminService } from '../services/admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getDashboard(): Promise<{
        totalUsers: number;
        totalAppointments: number;
        totalTransactions: number;
    }>;
}
