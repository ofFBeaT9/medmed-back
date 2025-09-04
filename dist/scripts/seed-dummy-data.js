"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app/app.module");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../src/shared/entities/user.entity");
const user_role_enum_1 = require("../src/shared/enums/user-role.enum");
const bcrypt = require("bcryptjs");
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const firstNames = ['John', 'Jane', 'Peter', 'Susan', 'Michael', 'Emily', 'David', 'Sarah', 'Chris', 'Laura'];
const lastNames = ['Smith', 'Jones', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson'];
const specializations = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Oncology', 'Radiology', 'General Practice', 'Orthopedics', 'Gastroenterology', 'Endocrinology'];
async function seedDummyData() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    console.log('Starting dummy data seeding...');
    try {
        await seedDummyUsers(dataSource);
        console.log('Dummy data seeding completed successfully!');
    }
    catch (error) {
        console.error('Dummy data seeding failed:', error);
    }
    finally {
        await app.close();
    }
}
async function seedDummyUsers(dataSource) {
    const userRepository = dataSource.getRepository(user_entity_1.User);
    for (let i = 0; i < 10; i++) {
        const firstName = getRandomElement(firstNames);
        const lastName = getRandomElement(lastNames);
        const specialization = getRandomElement(specializations);
        const email = `doctor${i + 1}@medyapp.com`;
        const username = `doctor${i + 1}`;
        const existingUser = await userRepository.findOne({ where: { email } });
        if (!existingUser) {
            const password = await bcrypt.hash('password123', 10);
            const user = userRepository.create({
                email,
                username,
                password,
                firstName: `Dr. ${firstName}`,
                lastName,
                role: user_role_enum_1.UserRole.DOCTOR,
                specialization: specialization,
                licenseNumber: `MD${Math.floor(10000 + Math.random() * 90000)}`,
                isActive: true,
                isVerified: true,
                emailVerified: true,
            });
            await userRepository.save(user);
            console.log(`Created doctor: ${email}`);
        }
    }
    for (let i = 0; i < 20; i++) {
        const firstName = getRandomElement(firstNames);
        const lastName = getRandomElement(lastNames);
        const email = `patient${i + 1}@medyapp.com`;
        const username = `patient${i + 1}`;
        const existingUser = await userRepository.findOne({ where: { email } });
        if (!existingUser) {
            const password = await bcrypt.hash('password123', 10);
            const user = userRepository.create({
                email,
                username,
                password,
                firstName,
                lastName,
                role: user_role_enum_1.UserRole.PATIENT,
                isActive: true,
                isVerified: true,
                emailVerified: true,
            });
            await userRepository.save(user);
            console.log(`Created patient: ${email}`);
        }
    }
}
seedDummyData().catch(console.error);
//# sourceMappingURL=seed-dummy-data.js.map