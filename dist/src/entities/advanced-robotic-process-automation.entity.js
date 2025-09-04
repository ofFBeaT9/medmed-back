"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcareRpaQualityMetrics = exports.CognitiveAutomationEngine = exports.BotOrchestrationPlatform = exports.ProcessMiningAnalytics = exports.IntelligentDocumentProcessing = exports.RoboticProcessAutomation = void 0;
const typeorm_1 = require("typeorm");
let RoboticProcessAutomation = class RoboticProcessAutomation {
};
exports.RoboticProcessAutomation = RoboticProcessAutomation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RoboticProcessAutomation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RoboticProcessAutomation.prototype, "rpa_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RoboticProcessAutomation.prototype, "process_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RoboticProcessAutomation.prototype, "automation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RoboticProcessAutomation.prototype, "process_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RoboticProcessAutomation.prototype, "process_definition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RoboticProcessAutomation.prototype, "automation_workflow", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RoboticProcessAutomation.prototype, "bot_configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RoboticProcessAutomation.prototype, "cognitive_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RoboticProcessAutomation.prototype, "integration_points", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RoboticProcessAutomation.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RoboticProcessAutomation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RoboticProcessAutomation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RoboticProcessAutomation.prototype, "updated_at", void 0);
exports.RoboticProcessAutomation = RoboticProcessAutomation = __decorate([
    (0, typeorm_1.Entity)('robotic_process_automation')
], RoboticProcessAutomation);
let IntelligentDocumentProcessing = class IntelligentDocumentProcessing {
};
exports.IntelligentDocumentProcessing = IntelligentDocumentProcessing;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IntelligentDocumentProcessing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IntelligentDocumentProcessing.prototype, "idp_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], IntelligentDocumentProcessing.prototype, "document_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentDocumentProcessing.prototype, "processing_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentDocumentProcessing.prototype, "document_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentDocumentProcessing.prototype, "document_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentDocumentProcessing.prototype, "data_extraction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentDocumentProcessing.prototype, "processing_pipeline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentDocumentProcessing.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentDocumentProcessing.prototype, "output_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentDocumentProcessing.prototype, "compliance_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentDocumentProcessing.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IntelligentDocumentProcessing.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IntelligentDocumentProcessing.prototype, "updated_at", void 0);
exports.IntelligentDocumentProcessing = IntelligentDocumentProcessing = __decorate([
    (0, typeorm_1.Entity)('intelligent_document_processing')
], IntelligentDocumentProcessing);
let ProcessMiningAnalytics = class ProcessMiningAnalytics {
};
exports.ProcessMiningAnalytics = ProcessMiningAnalytics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProcessMiningAnalytics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ProcessMiningAnalytics.prototype, "mining_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ProcessMiningAnalytics.prototype, "process_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ProcessMiningAnalytics.prototype, "analysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ProcessMiningAnalytics.prototype, "data_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProcessMiningAnalytics.prototype, "process_discovery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProcessMiningAnalytics.prototype, "conformance_checking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProcessMiningAnalytics.prototype, "performance_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProcessMiningAnalytics.prototype, "predictive_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProcessMiningAnalytics.prototype, "root_cause_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProcessMiningAnalytics.prototype, "continuous_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ProcessMiningAnalytics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcessMiningAnalytics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcessMiningAnalytics.prototype, "updated_at", void 0);
exports.ProcessMiningAnalytics = ProcessMiningAnalytics = __decorate([
    (0, typeorm_1.Entity)('process_mining_analytics')
], ProcessMiningAnalytics);
let BotOrchestrationPlatform = class BotOrchestrationPlatform {
};
exports.BotOrchestrationPlatform = BotOrchestrationPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BotOrchestrationPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BotOrchestrationPlatform.prototype, "orchestration_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BotOrchestrationPlatform.prototype, "orchestration_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BotOrchestrationPlatform.prototype, "orchestration_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BotOrchestrationPlatform.prototype, "complexity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BotOrchestrationPlatform.prototype, "bot_inventory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BotOrchestrationPlatform.prototype, "workflow_orchestration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BotOrchestrationPlatform.prototype, "resource_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BotOrchestrationPlatform.prototype, "monitoring_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BotOrchestrationPlatform.prototype, "governance_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BotOrchestrationPlatform.prototype, "integration_ecosystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BotOrchestrationPlatform.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BotOrchestrationPlatform.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BotOrchestrationPlatform.prototype, "updated_at", void 0);
exports.BotOrchestrationPlatform = BotOrchestrationPlatform = __decorate([
    (0, typeorm_1.Entity)('bot_orchestration_platform')
], BotOrchestrationPlatform);
let CognitiveAutomationEngine = class CognitiveAutomationEngine {
};
exports.CognitiveAutomationEngine = CognitiveAutomationEngine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CognitiveAutomationEngine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CognitiveAutomationEngine.prototype, "cognitive_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CognitiveAutomationEngine.prototype, "automation_scenario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CognitiveAutomationEngine.prototype, "cognitive_capability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CognitiveAutomationEngine.prototype, "ai_technology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CognitiveAutomationEngine.prototype, "learning_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CognitiveAutomationEngine.prototype, "reasoning_engine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CognitiveAutomationEngine.prototype, "perception_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CognitiveAutomationEngine.prototype, "language_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CognitiveAutomationEngine.prototype, "decision_making", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CognitiveAutomationEngine.prototype, "human_ai_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CognitiveAutomationEngine.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CognitiveAutomationEngine.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CognitiveAutomationEngine.prototype, "updated_at", void 0);
exports.CognitiveAutomationEngine = CognitiveAutomationEngine = __decorate([
    (0, typeorm_1.Entity)('cognitive_automation_engine')
], CognitiveAutomationEngine);
let HealthcareRpaQualityMetrics = class HealthcareRpaQualityMetrics {
};
exports.HealthcareRpaQualityMetrics = HealthcareRpaQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareRpaQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareRpaQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareRpaQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "automation_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "operational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "quality_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "cognitive_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "user_satisfaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "technology_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "business_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareRpaQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareRpaQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareRpaQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareRpaQualityMetrics = HealthcareRpaQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_rpa_quality_metrics')
], HealthcareRpaQualityMetrics);
//# sourceMappingURL=advanced-robotic-process-automation.entity.js.map