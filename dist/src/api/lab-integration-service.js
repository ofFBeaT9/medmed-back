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
exports.LabIntegrationService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let LabIntegrationService = class LabIntegrationService {
    constructor(httpService) {
        this.httpService = httpService;
        this.labCorpApiUrl = 'https://api.labcorp.example.com';
        this.labCorpApiKey = process.env.LABCORP_API_KEY;
        this.questApiUrl = 'https://api.quest.example.com';
        this.questApiKey = process.env.QUEST_API_KEY;
    }
    async submitLabCorpOrder(order) {
        const headers = {
            'Authorization': `Bearer ${this.labCorpApiKey}`,
            'Content-Type': 'application/json',
        };
        const url = `${this.labCorpApiUrl}/v1/orders`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, order, { headers }));
            return response.data;
        }
        catch (error) {
            const axiosError = error;
            throw new Error(`Failed to submit LabCorp order: ${axiosError.message}`);
        }
    }
    async getLabCorpResult(orderId) {
        const headers = {
            'Authorization': `Bearer ${this.labCorpApiKey}`,
        };
        const url = `${this.labCorpApiUrl}/v1/results/${orderId}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers }));
            return response.data;
        }
        catch (error) {
            const axiosError = error;
            throw new Error(`Failed to retrieve LabCorp result: ${axiosError.message}`);
        }
    }
    async submitQuestOrder(order) {
        const headers = {
            'X-API-KEY': this.questApiKey,
            'Content-Type': 'application/json',
        };
        const url = `${this.questApiUrl}/orders`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, order, { headers }));
            return response.data;
        }
        catch (error) {
            const axiosError = error;
            throw new Error(`Failed to submit Quest order: ${axiosError.message}`);
        }
    }
    async getQuestResult(orderId) {
        const headers = {
            'X-API-KEY': this.questApiKey,
        };
        const url = `${this.questApiUrl}/results?orderId=${orderId}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers }));
            return response.data;
        }
        catch (error) {
            const axiosError = error;
            throw new Error(`Failed to retrieve Quest result: ${axiosError.message}`);
        }
    }
};
exports.LabIntegrationService = LabIntegrationService;
exports.LabIntegrationService = LabIntegrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], LabIntegrationService);
//# sourceMappingURL=lab-integration-service.js.map