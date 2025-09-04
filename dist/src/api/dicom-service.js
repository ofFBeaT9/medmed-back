"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DicomService = void 0;
const common_1 = require("@nestjs/common");
const dcmjs = require("dcmjs");
let DicomService = class DicomService {
    parseDicomFile(dicomFileBuffer) {
        const dicomDict = dcmjs.data.DicomMessage.readFile(dicomFileBuffer.buffer);
        const dataset = dcmjs.data.DicomMetaDictionary.naturalizeDataset(dicomDict.dict);
        return dataset;
    }
    extractDicomTags(dataset) {
        return {
            patientName: dataset.PatientName,
            patientID: dataset.PatientID,
            studyInstanceUID: dataset.StudyInstanceUID,
            studyDate: dataset.StudyDate,
            studyTime: dataset.StudyTime,
            modality: dataset.Modality,
            studyDescription: dataset.StudyDescription,
            seriesInstanceUID: dataset.SeriesInstanceUID,
            seriesNumber: dataset.SeriesNumber,
            seriesDescription: dataset.SeriesDescription,
            sopInstanceUID: dataset.SOPInstanceUID,
            instanceNumber: dataset.InstanceNumber,
        };
    }
    jsonToDicom(jsonData) {
        const dataset = {
            PatientName: jsonData.patientName,
            PatientID: jsonData.patientID,
            StudyInstanceUID: jsonData.studyInstanceUID,
            StudyDate: jsonData.studyDate,
            StudyTime: jsonData.studyTime,
            Modality: jsonData.modality,
            StudyDescription: jsonData.studyDescription,
            SeriesInstanceUID: jsonData.seriesInstanceUID,
            SeriesNumber: jsonData.seriesNumber,
            SeriesDescription: jsonData.seriesDescription,
            SOPInstanceUID: jsonData.sopInstanceUID,
            InstanceNumber: jsonData.instanceNumber,
        };
        return dataset;
    }
};
exports.DicomService = DicomService;
exports.DicomService = DicomService = __decorate([
    (0, common_1.Injectable)()
], DicomService);
//# sourceMappingURL=dicom-service.js.map