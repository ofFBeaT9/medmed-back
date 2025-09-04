"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_source_1 = require("../data-source");
const MedicalRecord_1 = require("../entities/MedicalRecord");
const router = (0, express_1.Router)();
// Get medical records for a patient
router.get('/patient/:patientId', async (req, res) => {
    try {
        const medicalRecordRepository = data_source_1.AppDataSource.getRepository(MedicalRecord_1.MedicalRecord);
        const records = await medicalRecordRepository.find({
            where: { patientId: req.params.patientId },
            order: { recordDate: 'DESC' }
        });
        res.json({
            success: true,
            data: records
        });
    }
    catch (error) {
        console.error('Get medical records error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch medical records'
        });
    }
});
// Create new medical record
router.post('/', async (req, res) => {
    try {
        const medicalRecordRepository = data_source_1.AppDataSource.getRepository(MedicalRecord_1.MedicalRecord);
        const record = medicalRecordRepository.create(req.body);
        await medicalRecordRepository.save(record);
        res.status(201).json({
            success: true,
            data: record,
            message: 'Medical record created successfully'
        });
    }
    catch (error) {
        console.error('Create medical record error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create medical record'
        });
    }
});
exports.default = router;
