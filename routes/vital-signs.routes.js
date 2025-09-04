"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_source_1 = require("../data-source");
const VitalSigns_1 = require("../entities/VitalSigns");
const router = (0, express_1.Router)();
// Get vital signs for a patient
router.get('/patient/:patientId', async (req, res) => {
    try {
        const vitalSignsRepository = data_source_1.AppDataSource.getRepository(VitalSigns_1.VitalSigns);
        const vitalSigns = await vitalSignsRepository.find({
            where: { patientId: req.params.patientId },
            order: { recordedAt: 'DESC' },
            take: 50
        });
        res.json({
            success: true,
            data: vitalSigns
        });
    }
    catch (error) {
        console.error('Get vital signs error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch vital signs'
        });
    }
});
// Create new vital signs record
router.post('/', async (req, res) => {
    try {
        const vitalSignsRepository = data_source_1.AppDataSource.getRepository(VitalSigns_1.VitalSigns);
        const vitalSigns = vitalSignsRepository.create(req.body);
        await vitalSignsRepository.save(vitalSigns);
        res.status(201).json({
            success: true,
            data: vitalSigns,
            message: 'Vital signs recorded successfully'
        });
    }
    catch (error) {
        console.error('Create vital signs error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to record vital signs'
        });
    }
});
exports.default = router;
