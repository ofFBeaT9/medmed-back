"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app/app.module");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../src/shared/entities/user.entity");
const security_access_entity_1 = require("../src/shared/entities/security-access.entity");
const organization_setup_entity_1 = require("../src/shared/entities/organization-setup.entity");
const organization_setup_entity_2 = require("../src/shared/entities/organization-setup.entity");
const organization_setup_entity_3 = require("../src/shared/entities/organization-setup.entity");
const bcrypt = require("bcryptjs");
async function seedDatabase() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    console.log('Starting database seeding...');
    try {
        await seedRoles(dataSource);
        await seedUsers(dataSource);
        await seedFacilities(dataSource);
        await seedGlobalSettings(dataSource);
        await seedCodes(dataSource);
        console.log('Database seeding completed successfully!');
    }
    catch (error) {
        console.error('Database seeding failed:', error);
    }
    finally {
        await app.close();
    }
}
async function seedRoles(dataSource) {
    const roleRepository = dataSource.getRepository(security_access_entity_1.Role);
    const defaultRoles = [
        {
            name: 'super_admin',
            description: 'Super Administrator with full system access',
            isSystemRole: true,
            permissions: JSON.stringify({
                all: true,
                users: { create: true, read: true, update: true, delete: true },
                patients: { create: true, read: true, update: true, delete: true },
                appointments: { create: true, read: true, update: true, delete: true },
                medical_records: { create: true, read: true, update: true, delete: true },
                billing: { create: true, read: true, update: true, delete: true },
                reports: { create: true, read: true, update: true, delete: true },
                admin: { create: true, read: true, update: true, delete: true },
            }),
        },
        {
            name: 'admin',
            description: 'Administrator with most system access',
            isSystemRole: true,
            permissions: JSON.stringify({
                users: { create: true, read: true, update: true, delete: false },
                patients: { create: true, read: true, update: true, delete: false },
                appointments: { create: true, read: true, update: true, delete: true },
                medical_records: { create: true, read: true, update: true, delete: false },
                billing: { create: true, read: true, update: true, delete: false },
                reports: { create: true, read: true, update: false, delete: false },
            }),
        },
        {
            name: 'doctor',
            description: 'Doctor/Physician with clinical access',
            isSystemRole: true,
            permissions: JSON.stringify({
                patients: { create: true, read: true, update: true, delete: false },
                appointments: { create: true, read: true, update: true, delete: false },
                medical_records: { create: true, read: true, update: true, delete: false },
                prescriptions: { create: true, read: true, update: true, delete: false },
                lab_orders: { create: true, read: true, update: false, delete: false },
            }),
        },
        {
            name: 'nurse',
            description: 'Nurse with limited clinical access',
            isSystemRole: true,
            permissions: JSON.stringify({
                patients: { create: false, read: true, update: true, delete: false },
                appointments: { create: true, read: true, update: true, delete: false },
                medical_records: { create: false, read: true, update: true, delete: false },
                vital_signs: { create: true, read: true, update: true, delete: false },
            }),
        },
        {
            name: 'receptionist',
            description: 'Receptionist with scheduling access',
            isSystemRole: true,
            permissions: JSON.stringify({
                patients: { create: true, read: true, update: true, delete: false },
                appointments: { create: true, read: true, update: true, delete: false },
                billing: { create: false, read: true, update: false, delete: false },
            }),
        },
        {
            name: 'patient',
            description: 'Patient with portal access',
            isSystemRole: true,
            permissions: JSON.stringify({
                own_data: { create: false, read: true, update: true, delete: false },
                appointments: { create: true, read: true, update: false, delete: false },
                medical_records: { create: false, read: true, update: false, delete: false },
                messages: { create: true, read: true, update: false, delete: false },
            }),
        },
    ];
    for (const roleData of defaultRoles) {
        const existingRole = await roleRepository.findOne({ where: { name: roleData.name } });
        if (!existingRole) {
            const role = roleRepository.create(roleData);
            await roleRepository.save(role);
            console.log(`Created role: ${roleData.name}`);
        }
    }
}
async function seedUsers(dataSource) {
    const userRepository = dataSource.getRepository(user_entity_1.User);
    const defaultUsers = [
        {
            email: 'admin@medyapp.com',
            username: 'admin',
            password: await bcrypt.hash('admin123', 10),
            firstName: 'System',
            lastName: 'Administrator',
            role: 'super_admin',
            isActive: true,
            isEmailVerified: true,
            emailVerifiedAt: new Date(),
        },
        {
            email: 'doctor@medyapp.com',
            username: 'doctor1',
            password: await bcrypt.hash('doctor123', 10),
            firstName: 'Dr. John',
            lastName: 'Smith',
            role: 'doctor',
            specialization: 'Internal Medicine',
            licenseNumber: 'MD12345',
            npi: '1234567890',
            isActive: true,
            isEmailVerified: true,
            emailVerifiedAt: new Date(),
        },
        {
            email: 'nurse@medyapp.com',
            username: 'nurse1',
            password: await bcrypt.hash('nurse123', 10),
            firstName: 'Mary',
            lastName: 'Johnson',
            role: 'nurse',
            licenseNumber: 'RN54321',
            isActive: true,
            isEmailVerified: true,
            emailVerifiedAt: new Date(),
        },
    ];
    for (const userData of defaultUsers) {
        const existingUser = await userRepository.findOne({ where: { email: userData.email } });
        if (!existingUser) {
            const user = userRepository.create(userData);
            await userRepository.save(user);
            console.log(`Created user: ${userData.email}`);
        }
    }
}
async function seedFacilities(dataSource) {
    const facilityRepository = dataSource.getRepository(organization_setup_entity_1.Facility);
    const defaultFacilities = [
        {
            name: 'MedyApp Primary Care Center',
            description: 'Main healthcare facility',
            facilityType: 'clinic',
            npi: '1234567890',
            taxId: '12-3456789',
            address: '123 Healthcare Ave',
            city: 'Medical City',
            state: 'CA',
            zipCode: '90210',
            country: 'USA',
            phone: '(555) 123-4567',
            email: 'info@medyapp.com',
            website: 'https://medyapp.com',
            isActive: true,
        },
    ];
    for (const facilityData of defaultFacilities) {
        const existingFacility = await facilityRepository.findOne({ where: { name: facilityData.name } });
        if (!existingFacility) {
            const facility = facilityRepository.create(facilityData);
            await facilityRepository.save(facility);
            console.log(`Created facility: ${facilityData.name}`);
        }
    }
}
async function seedGlobalSettings(dataSource) {
    const settingsRepository = dataSource.getRepository(organization_setup_entity_2.GlobalSetting);
    const defaultSettings = [
        {
            settingKey: 'app_name',
            settingValue: 'MedyApp EHR',
            description: 'Application name',
            category: 'general',
        },
        {
            settingKey: 'app_version',
            settingValue: '1.0.0',
            description: 'Application version',
            category: 'general',
        },
        {
            settingKey: 'timezone',
            settingValue: 'America/Los_Angeles',
            description: 'Default timezone',
            category: 'general',
        },
        {
            settingKey: 'date_format',
            settingValue: 'MM/DD/YYYY',
            description: 'Default date format',
            category: 'general',
        },
        {
            settingKey: 'appointment_duration',
            settingValue: '30',
            description: 'Default appointment duration in minutes',
            category: 'appointments',
        },
        {
            settingKey: 'enable_patient_portal',
            settingValue: 'true',
            description: 'Enable patient portal',
            category: 'features',
            dataType: 'boolean',
        },
        {
            settingKey: 'max_file_upload_size',
            settingValue: '10485760',
            description: 'Maximum file upload size in bytes (10MB)',
            category: 'documents',
            dataType: 'number',
        },
    ];
    for (const settingData of defaultSettings) {
        const existingSetting = await settingsRepository.findOne({ where: { settingKey: settingData.settingKey } });
        if (!existingSetting) {
            const setting = settingsRepository.create(settingData);
            await settingsRepository.save(setting);
            console.log(`Created setting: ${settingData.settingKey}`);
        }
    }
}
async function seedCodes(dataSource) {
    const codeTypeRepository = dataSource.getRepository(organization_setup_entity_3.CodeType);
    const codeRepository = dataSource.getRepository(organization_setup_entity_3.Code);
    let icdCodeType = await codeTypeRepository.findOne({ where: { codeType: 'ICD10' } });
    if (!icdCodeType) {
        icdCodeType = codeTypeRepository.create({
            codeType: 'ICD10',
            codeTypeName: 'ICD-10-CM',
            description: 'International Classification of Diseases, 10th Revision, Clinical Modification',
            isActive: true,
        });
        await codeTypeRepository.save(icdCodeType);
        console.log('Created ICD-10 code type');
    }
    let cptCodeType = await codeTypeRepository.findOne({ where: { codeType: 'CPT4' } });
    if (!cptCodeType) {
        cptCodeType = codeTypeRepository.create({
            codeType: 'CPT4',
            codeTypeName: 'CPT-4',
            description: 'Current Procedural Terminology, 4th Edition',
            isActive: true,
        });
        await codeTypeRepository.save(cptCodeType);
        console.log('Created CPT-4 code type');
    }
    const sampleIcdCodes = [
        { code: 'Z00.00', description: 'Encounter for general adult medical examination without abnormal findings' },
        { code: 'I10', description: 'Essential (primary) hypertension' },
        { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications' },
        { code: 'M79.3', description: 'Panniculitis, unspecified' },
        { code: 'R50.9', description: 'Fever, unspecified' },
    ];
    for (const codeData of sampleIcdCodes) {
        const existingCode = await codeRepository.findOne({
            where: { codeTypeId: icdCodeType.id, code: codeData.code }
        });
        if (!existingCode) {
            const code = codeRepository.create({
                codeTypeId: icdCodeType.id,
                ...codeData,
                isActive: true,
                isSelectable: true,
            });
            await codeRepository.save(code);
        }
    }
    const sampleCptCodes = [
        { code: '99213', description: 'Office visit, established patient, level 3' },
        { code: '99214', description: 'Office visit, established patient, level 4' },
        { code: '99202', description: 'Office visit, new patient, level 2' },
        { code: '99203', description: 'Office visit, new patient, level 3' },
        { code: '85025', description: 'Complete blood count (CBC) with differential' },
    ];
    for (const codeData of sampleCptCodes) {
        const existingCode = await codeRepository.findOne({
            where: { codeTypeId: cptCodeType.id, code: codeData.code }
        });
        if (!existingCode) {
            const code = codeRepository.create({
                codeTypeId: cptCodeType.id,
                ...codeData,
                isActive: true,
                isSelectable: true,
            });
            await codeRepository.save(code);
        }
    }
    console.log('Created sample medical codes');
}
seedDatabase().catch(console.error);
//# sourceMappingURL=seed-comprehensive-data.js.map