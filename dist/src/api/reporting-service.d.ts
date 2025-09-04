import { Repository } from 'typeorm';
import { Patient } from '../entities/patient-management.entity';
import { CalendarEvent } from '../entities/scheduling-calendar.entity';
import { ClinicalNote } from '../entities/clinical-documentation.entity';
export declare class ReportingService {
    private readonly patientRepository;
    private readonly appointmentRepository;
    private readonly clinicalNoteRepository;
    constructor(patientRepository: Repository<Patient>, appointmentRepository: Repository<CalendarEvent>, clinicalNoteRepository: Repository<ClinicalNote>);
    getPatientDemographicsReport(startDate: Date, endDate: Date): Promise<Patient[]>;
    getAppointmentReport(startDate: Date, endDate: Date): Promise<CalendarEvent[]>;
    getClinicalDocumentationReport(startDate: Date, endDate: Date): Promise<{
        count: number;
    }>;
    getPatientSummary(patientId: number): Promise<any>;
}
