"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables FIRST
dotenv_1.default.config({ path: path_1.default.join(__dirname, '../.env') });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const data_source_1 = require("./data-source");
// Temporarily comment out routes to test basic server
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const patient_routes_1 = __importDefault(require("./routes/patient.routes"));
const vital_signs_routes_1 = __importDefault(require("./routes/vital-signs.routes"));
const medical_records_routes_1 = __importDefault(require("./routes/medical-records.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3002; // Use environment port for Railway
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'medmed-backend',
        database: 'connected'
    });
});
// API Routes - restored for production
app.use('/api/auth', auth_routes_1.default);
app.use('/api/patients', patient_routes_1.default);
app.use('/api/vital-signs', vital_signs_routes_1.default);
app.use('/api/medical-records', medical_records_routes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});
// 404 handler - must be after all routes
app.use((req, res) => {
    res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});
// Initialize database and start server
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('✅ Database connected successfully');
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`📊 Health check: http://localhost:${PORT}/health`);
        console.log(`🔗 API base: http://localhost:${PORT}/api`);
    });
})
    .catch((error) => {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
});
exports.default = app;
