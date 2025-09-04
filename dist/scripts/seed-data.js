"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app/app.module");
const user_service_1 = require("../src/app/user/services/user.service");
const auth_service_1 = require("../src/app/auth/services/auth.service");
const appointment_service_1 = require("../src/app/appointment/services/appointment.service");
const user_role_enum_1 = require("../src/shared/enums/user-role.enum");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const userService = app.get(user_service_1.UserService);
    const authService = app.get(auth_service_1.AuthService);
    const appointmentService = app.get(appointment_service_1.AppointmentService);
    try {
        console.log('Creating sample users...');
        const adminData = {
            email: 'admin@medycalc.com',
            password: 'admin123',
            firstName: 'Admin',
            lastName: 'User',
            role: user_role_enum_1.UserRole.ADMIN,
        };
        const doctorData = {
            email: 'doctor@medycalc.com',
            password: 'doctor123',
            firstName: 'Dr. John',
            lastName: 'Smith',
            role: user_role_enum_1.UserRole.DOCTOR,
            specialization: 'Cardiology',
            licenseNumber: 'LIC123456',
        };
        const patientData = {
            email: 'patient@medycalc.com',
            password: 'patient123',
            firstName: 'Jane',
            lastName: 'Doe',
            role: user_role_enum_1.UserRole.PATIENT,
            phoneNumber: '+1234567890',
        };
        let admin, doctor, patient;
        try {
            const adminResult = await authService.register(adminData);
            admin = adminResult.user;
            console.log('Admin user created:', admin.email);
        }
        catch (error) {
            console.log('Admin user might already exist');
            admin = await userService.findByEmail(adminData.email);
        }
        try {
            const doctorResult = await authService.register(doctorData);
            doctor = doctorResult.user;
            console.log('Doctor user created:', doctor.email);
        }
        catch (error) {
            console.log('Doctor user might already exist');
            doctor = await userService.findByEmail(doctorData.email);
        }
        try {
            const patientResult = await authService.register(patientData);
            patient = patientResult.user;
            console.log('Patient user created:', patient.email);
        }
        catch (error) {
            console.log('Patient user might already exist');
            patient = await userService.findByEmail(patientData.email);
        }
        if (doctor && patient) {
            const appointmentDate = new Date();
            appointmentDate.setDate(appointmentDate.getDate() + 1);
            appointmentDate.setHours(10, 0, 0, 0);
            const appointmentData = {
                doctorId: doctor.id,
                appointmentDate: appointmentDate.toISOString(),
                duration: 30,
                reason: 'Regular checkup',
                fee: 150,
                isOnline: false,
            };
            try {
                const appointment = await appointmentService.create(appointmentData, patient.id);
                console.log('Sample appointment created:', appointment.id);
            }
            catch (error) {
                console.log('Could not create sample appointment:', error.message);
            }
        }
        console.log('\nSample data creation completed!');
        console.log('\nLogin credentials:');
        console.log('Admin: admin@medycalc.com / admin123');
        console.log('Doctor: doctor@medycalc.com / doctor123');
        console.log('Patient: patient@medycalc.com / patient123');
    }
    catch (error) {
        console.error('Error creating sample data:', error);
    }
    finally {
        await app.close();
    }
}
bootstrap();
//# sourceMappingURL=seed-data.js.map