import { Patient } from '../entities/patient-management.entity';
import { CalendarEvent as Appointment } from '../entities/scheduling-calendar.entity';
import { ClinicalNote as Observation } from '../entities/clinical-documentation.entity';
export declare class Hl7FhirService {
    toFhirPatient(patient: Patient): any;
    toFhirAppointment(appointment: Appointment): any;
    toFhirObservation(observation: Observation): any;
    fromFhirPatient(fhirPatient: any): Partial<Patient>;
}
