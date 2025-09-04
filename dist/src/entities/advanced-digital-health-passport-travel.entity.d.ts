export declare class DigitalHealthPassport {
    id: string;
    passport_id: string;
    patient_id: string;
    passport_type: string;
    issuing_authority: string;
    digital_credentials: {
        credential_format: string;
        cryptographic_signature: any;
        issuer_verification: any;
        validity_period: any;
        revocation_status: any;
        cross_border_recognition: any;
    };
    health_certifications: {
        vaccination_certificates: any[];
        test_results: any[];
        immunity_records: any[];
        medical_clearances: any[];
        health_declarations: any[];
        recovery_certificates: any[];
    };
    biometric_verification: {
        biometric_identifiers: any;
        facial_recognition: any;
        fingerprint_data: any;
        iris_scan: any;
        voice_print: any;
        behavioral_biometrics: any;
    };
    privacy_protection: {
        data_minimization: any;
        selective_disclosure: any;
        zero_knowledge_proofs: any;
        decentralized_storage: any;
        consent_management: any;
        data_sovereignty: any;
    };
    interoperability_standards: {
        international_standards: any;
        bilateral_agreements: any;
        multilateral_recognition: any;
        technical_specifications: any;
        semantic_interoperability: any;
        cross_platform_compatibility: any;
    };
    border_integration: {
        customs_systems: any;
        immigration_databases: any;
        health_screening_protocols: any;
        quarantine_management: any;
        contact_tracing: any;
        epidemiological_surveillance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TravelMedicineServices {
    id: string;
    service_id: string;
    patient_id: string;
    travel_destination: string;
    travel_purpose: string;
    pre_travel_consultation: {
        risk_assessment: any;
        destination_health_information: any;
        vaccination_recommendations: any;
        medication_prophylaxis: any;
        behavioral_recommendations: any;
        emergency_preparedness: any;
    };
    vaccination_management: {
        required_vaccinations: any[];
        recommended_vaccinations: any[];
        vaccination_schedule: any;
        contraindications: any;
        adverse_event_monitoring: any;
        certificate_issuance: any;
    };
    health_risk_assessment: {
        endemic_diseases: any[];
        seasonal_risks: any;
        environmental_hazards: any;
        healthcare_system_quality: any;
        security_considerations: any;
        special_populations: any;
    };
    medication_management: {
        prophylactic_medications: any[];
        prescription_management: any;
        medication_availability: any;
        drug_interactions: any;
        customs_regulations: any;
        emergency_medications: any;
    };
    during_travel_support: {
        telemedicine_access: any;
        emergency_contacts: any;
        local_healthcare_providers: any;
        health_monitoring: any;
        symptom_tracking: any;
        incident_reporting: any;
    };
    post_travel_care: {
        health_screening: any;
        surveillance_protocols: any;
        follow_up_appointments: any;
        contact_tracing: any;
        quarantine_protocols: any;
        health_monitoring: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class BorderHealthScreening {
    id: string;
    screening_id: string;
    traveler_id: string;
    entry_point: string;
    screening_type: string;
    health_declaration: {
        symptom_questionnaire: any;
        exposure_history: any;
        contact_information: any;
        health_status: any;
        vaccination_status: any;
        recent_travel_history: any;
    };
    biometric_screening: {
        temperature_measurement: any;
        thermal_imaging: any;
        health_monitoring_devices: any;
        contactless_screening: any;
        automated_detection: any;
        alert_systems: any;
    };
    laboratory_testing: {
        rapid_diagnostic_tests: any;
        pcr_testing: any;
        antigen_testing: any;
        serology_testing: any;
        point_of_care_testing: any;
        laboratory_networks: any;
    };
    risk_stratification: {
        risk_algorithms: any;
        epidemiological_factors: any;
        traveler_characteristics: any;
        destination_risk_profile: any;
        health_intelligence: any;
        predictive_modeling: any;
    };
    quarantine_management: {
        quarantine_protocols: any;
        facility_management: any;
        health_monitoring: any;
        compliance_tracking: any;
        support_services: any;
        release_protocols: any;
    };
    public_health_response: {
        contact_tracing: any;
        epidemiological_investigation: any;
        outbreak_detection: any;
        surveillance_systems: any;
        reporting_mechanisms: any;
        international_notifications: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class InternationalHealthCompliance {
    id: string;
    compliance_id: string;
    regulation_framework: string;
    compliance_scope: string;
    regulatory_authority: string;
    international_health_regulations: {
        ihr_compliance: any;
        who_requirements: any;
        regional_agreements: any;
        bilateral_treaties: any;
        sector_standards: any;
        emergency_protocols: any;
    };
    certification_standards: {
        certification_bodies: any[];
        accreditation_requirements: any;
        quality_standards: any;
        audit_protocols: any;
        continuous_monitoring: any;
        renewal_procedures: any;
    };
    data_governance: {
        data_protection_regulations: any;
        cross_border_data_transfer: any;
        privacy_frameworks: any;
        consent_mechanisms: any;
        data_sovereignty: any;
        international_cooperation: any;
    };
    mutual_recognition: {
        recognition_agreements: any;
        equivalence_assessments: any;
        technical_cooperation: any;
        harmonization_efforts: any;
        dispute_resolution: any;
        continuous_dialogue: any;
    };
    monitoring_enforcement: {
        compliance_monitoring: any;
        violation_detection: any;
        enforcement_mechanisms: any;
        penalty_frameworks: any;
        corrective_actions: any;
        reporting_obligations: any;
    };
    emergency_preparedness: {
        emergency_protocols: any;
        rapid_response_mechanisms: any;
        international_coordination: any;
        resource_sharing: any;
        communication_channels: any;
        recovery_planning: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class GlobalHealthSurveillance {
    id: string;
    surveillance_id: string;
    surveillance_network: string;
    surveillance_type: string;
    geographic_scope: string;
    disease_surveillance: {
        notifiable_diseases: any[];
        case_definitions: any;
        reporting_protocols: any;
        laboratory_networks: any;
        epidemiological_intelligence: any;
        outbreak_detection: any;
    };
    data_collection: {
        surveillance_systems: any[];
        data_sources: any;
        real_time_reporting: any;
        data_quality_assurance: any;
        standardization: any;
        interoperability: any;
    };
    analytical_capabilities: {
        epidemiological_analysis: any;
        statistical_methods: any;
        predictive_modeling: any;
        risk_assessment: any;
        trend_analysis: any;
        spatial_analysis: any;
    };
    early_warning_systems: {
        alert_algorithms: any;
        threshold_monitoring: any;
        anomaly_detection: any;
        signal_verification: any;
        rapid_response: any;
        communication_protocols: any;
    };
    international_cooperation: {
        data_sharing_agreements: any;
        joint_investigations: any;
        technical_assistance: any;
        capacity_building: any;
        resource_mobilization: any;
        coordination_mechanisms: any;
    };
    public_health_intelligence: {
        intelligence_gathering: any;
        threat_assessment: any;
        situation_awareness: any;
        decision_support: any;
        policy_recommendations: any;
        communication_strategies: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TravelHealthQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    service_effectiveness: {
        consultation_quality_score: number;
        vaccination_completion_rate: number;
        risk_assessment_accuracy: number;
        prevention_effectiveness: number;
        patient_satisfaction_score: number;
        health_outcome_improvement: number;
    };
    digital_passport_performance: {
        verification_success_rate: number;
        border_processing_time: number;
        system_availability: number;
        security_incident_rate: number;
        international_acceptance_rate: number;
        user_experience_score: number;
    };
    border_screening_efficiency: {
        screening_processing_time: number;
        detection_accuracy_rate: number;
        false_positive_rate: number;
        quarantine_compliance_rate: number;
        contact_tracing_effectiveness: number;
        public_health_response_time: number;
    };
    compliance_adherence: {
        regulatory_compliance_score: number;
        international_standard_conformity: number;
        certification_success_rate: number;
        audit_performance_score: number;
        violation_incident_rate: number;
        corrective_action_effectiveness: number;
    };
    surveillance_performance: {
        disease_detection_sensitivity: number;
        reporting_timeliness: number;
        data_quality_score: number;
        early_warning_accuracy: number;
        outbreak_response_time: number;
        international_cooperation_effectiveness: number;
    };
    technology_adoption: {
        digital_solution_utilization: number;
        mobile_app_adoption_rate: number;
        biometric_system_performance: number;
        interoperability_success_rate: number;
        system_integration_quality: number;
        innovation_implementation_rate: number;
    };
    cost_effectiveness: {
        service_delivery_cost_efficiency: number;
        technology_investment_roi: number;
        operational_cost_reduction: number;
        prevention_cost_savings: number;
        resource_utilization_optimization: number;
        scalability_cost_effectiveness: number;
    };
    global_health_impact: {
        disease_prevention_contribution: number;
        health_security_enhancement: number;
        international_cooperation_strengthening: number;
        health_system_resilience: number;
        pandemic_preparedness_improvement: number;
        sustainable_development_contribution: number;
    };
    created_at: Date;
    updated_at: Date;
}
