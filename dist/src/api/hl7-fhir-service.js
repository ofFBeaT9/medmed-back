"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hl7FhirService = void 0;
const common_1 = require("@nestjs/common");
let Hl7FhirService = class Hl7FhirService {
    toFhirPatient(patient) {
        return {
            resourceType: 'Patient',
            id: patient.id.toString(),
            name: [{
                    family: patient.last_name,
                    given: [patient.first_name],
                }],
            gender: patient.sex.toLowerCase(),
            birthDate: patient.date_of_birth,
        };
    }
    toFhirAppointment(appointment) {
        return {
            resourceType: 'Appointment',
            id: appointment.pc_eid.toString(),
            status: 'booked',
            start: appointment.pc_startTime.toISOString(),
            end: appointment.pc_endTime.toISOString(),
            participant: [
                {
                    actor: { reference: `Patient/${appointment.pc_pid}` },
                    status: 'accepted',
                },
                {
                    actor: { reference: `Practitioner/${appointment.pc_aid}` },
                    status: 'accepted',
                },
            ],
        };
    }
    toFhirObservation(observation) {
        return {
            resourceType: 'Observation',
            id: observation.id.toString(),
            status: 'final',
            code: {
                coding: [{
                        system: 'http://example.org/codes',
                        code: 'CLINICAL-NOTE',
                        display: 'Clinical Note',
                    }],
            },
            subject: { reference: `Patient/${observation.patient_id}` },
            effectiveDateTime: observation.date.toISOString(),
            valueString: observation.assessment,
        };
    }
    fromFhirPatient(fhirPatient) {
        const name = fhirPatient.name?.[0];
        return {
            id: fhirPatient.id,
            first_name: name?.given?.[0] || '',
            last_name: name?.family || '',
            date_of_birth: fhirPatient.birthDate,
            sex: fhirPatient.gender,
        };
    }
};
exports.Hl7FhirService = Hl7FhirService;
exports.Hl7FhirService = Hl7FhirService = __decorate([
    (0, common_1.Injectable)()
], Hl7FhirService);
//# sourceMappingURL=hl7-fhir-service.js.map