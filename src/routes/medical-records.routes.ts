import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { MedicalRecord } from '../entities/MedicalRecord';

const router = Router();

// Get medical records for a patient
router.get('/patient/:patientId', async (req: Request, res: Response) => {
  try {
    const medicalRecordRepository = AppDataSource.getRepository(MedicalRecord);
    const records = await medicalRecordRepository.find({
      where: { patientId: req.params.patientId },
      order: { recordDate: 'DESC' }
    });
    
    res.json({
      success: true,
      data: records
    });
  } catch (error) {
    console.error('Get medical records error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch medical records' 
    });
  }
});

// Create new medical record
router.post('/', async (req: Request, res: Response) => {
  try {
    const medicalRecordRepository = AppDataSource.getRepository(MedicalRecord);
    const record = medicalRecordRepository.create(req.body);
    
    await medicalRecordRepository.save(record);
    
    res.status(201).json({
      success: true,
      data: record,
      message: 'Medical record created successfully'
    });
  } catch (error) {
    console.error('Create medical record error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to create medical record' 
    });
  }
});

export default router;
