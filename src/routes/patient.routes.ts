import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Patient } from '../entities/Patient';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Apply authentication to all patient routes
router.use(authenticateToken);

// Get all patients
router.get('/', async (req: Request, res: Response) => {
  try {
    const patientRepository = AppDataSource.getRepository(Patient);
    const patients = await patientRepository.find({
      order: { createdAt: 'DESC' },
      take: 50 // Limit to 50 patients for performance
    });
    
    res.json({
      success: true,
      data: patients,
      count: patients.length
    });
  } catch (error) {
    console.error('Get patients error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch patients' 
    });
  }
});

// Get single patient
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const patientRepository = AppDataSource.getRepository(Patient);
    const patient = await patientRepository.findOne({
      where: { id: req.params.id },
      relations: ['vitalSigns', 'medicalRecords', 'labResults', 'medications']
    });
    
    if (!patient) {
      return res.status(404).json({ 
        success: false, 
        message: 'Patient not found' 
      });
    }
    
    res.json({
      success: true,
      data: patient
    });
  } catch (error) {
    console.error('Get patient error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch patient' 
    });
  }
});

// Create new patient
router.post('/', async (req: Request, res: Response) => {
  try {
    const patientRepository = AppDataSource.getRepository(Patient);
    const patient = patientRepository.create(req.body);
    
    await patientRepository.save(patient);
    
    res.status(201).json({
      success: true,
      data: patient,
      message: 'Patient created successfully'
    });
  } catch (error) {
    console.error('Create patient error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to create patient' 
    });
  }
});

// Update patient
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const patientRepository = AppDataSource.getRepository(Patient);
    const patient = await patientRepository.findOne({ 
      where: { id: req.params.id } 
    });
    
    if (!patient) {
      return res.status(404).json({ 
        success: false, 
        message: 'Patient not found' 
      });
    }
    
    patientRepository.merge(patient, req.body);
    await patientRepository.save(patient);
    
    res.json({
      success: true,
      data: patient,
      message: 'Patient updated successfully'
    });
  } catch (error) {
    console.error('Update patient error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update patient' 
    });
  }
});

export default router;
