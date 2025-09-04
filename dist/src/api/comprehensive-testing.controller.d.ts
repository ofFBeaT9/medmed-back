import { ComprehensiveTestingService } from './comprehensive-testing.service';
export declare class ComprehensiveTestingController {
    private readonly testingService;
    constructor(testingService: ComprehensiveTestingService);
    runAllTests(): Promise<any>;
}
