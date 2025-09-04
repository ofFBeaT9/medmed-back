export declare class DigitalTherapeuticApplications {
    id: string;
    application_id: string;
    application_name: string;
    therapeutic_area: string;
    intervention_type: string;
    clinical_indication: {
        primary_indication: string;
        secondary_indications: any[];
        target_population: any;
        contraindications: any[];
        precautions: any[];
        age_restrictions: any;
    };
    therapeutic_mechanisms: {
        behavioral_change_techniques: any[];
        cognitive_interventions: any;
        learning_algorithms: any;
        personalization_methods: any;
        engagement_strategies: any;
        outcome_measurement: any;
    };
    software_architecture: {
        platform_type: string;
        technology_stack: any;
        user_interface_design: any;
        data_processing: any;
        security_features: any;
        scalability_design: any;
    };
    clinical_workflow_integration: {
        ehr_integration: any;
        provider_dashboard: any;
        prescription_workflow: any;
        monitoring_tools: any;
        reporting_systems: any;
        care_coordination: any;
    };
    evidence_generation: {
        clinical_studies: any[];
        real_world_evidence: any;
        outcome_measures: any;
        biomarkers: any;
        patient_reported_outcomes: any;
        health_economics: any;
    };
    regulatory_framework: {
        fda_classification: any;
        ce_marking: any;
        clinical_trials: any;
        quality_management: any;
        post_market_surveillance: any;
        international_approvals: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SoftwareMedicalDeviceManagement {
    id: string;
    device_id: string;
    device_name: string;
    device_classification: string;
    software_type: string;
    software_lifecycle: {
        development_processes: any;
        risk_management: any;
        verification_validation: any;
        configuration_management: any;
        change_control: any;
        maintenance_procedures: any;
    };
    quality_management_system: {
        iso_13485_compliance: any;
        design_controls: any;
        document_control: any;
        corrective_preventive_actions: any;
        management_review: any;
        audit_procedures: any;
    };
    clinical_evaluation: {
        clinical_evidence: any;
        literature_review: any;
        clinical_investigation: any;
        post_market_studies: any;
        clinical_data_analysis: any;
        benefit_risk_assessment: any;
    };
    cybersecurity_framework: {
        security_architecture: any;
        threat_modeling: any;
        vulnerability_assessment: any;
        penetration_testing: any;
        incident_response: any;
        security_updates: any;
    };
    interoperability_standards: {
        hl7_fhir_compliance: any;
        dicom_integration: any;
        api_specifications: any;
        data_exchange_protocols: any;
        semantic_interoperability: any;
        integration_testing: any;
    };
    performance_monitoring: {
        real_world_performance: any;
        algorithm_performance: any;
        user_experience_metrics: any;
        safety_monitoring: any;
        effectiveness_tracking: any;
        continuous_improvement: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TherapeuticAlgorithmValidation {
    id: string;
    validation_id: string;
    algorithm_name: string;
    algorithm_type: string;
    validation_phase: string;
    algorithm_specification: {
        input_parameters: any[];
        output_parameters: any[];
        decision_logic: any;
        learning_mechanisms: any;
        update_procedures: any;
        version_control: any;
    };
    training_validation: {
        training_datasets: any[];
        validation_datasets: any[];
        test_datasets: any[];
        cross_validation: any;
        performance_metrics: any;
        bias_assessment: any;
    };
    clinical_validation: {
        study_design: any;
        primary_endpoints: any[];
        secondary_endpoints: any[];
        statistical_analysis_plan: any;
        interim_analyses: any;
        safety_monitoring: any;
    };
    performance_assessment: {
        sensitivity_specificity: any;
        positive_negative_predictive_value: any;
        area_under_curve: any;
        calibration_metrics: any;
        clinical_utility: any;
        comparative_effectiveness: any;
    };
    generalizability_testing: {
        external_validation: any;
        population_diversity: any;
        geographic_validation: any;
        temporal_validation: any;
        subgroup_analyses: any;
        robustness_testing: any;
    };
    continuous_monitoring: {
        performance_drift_detection: any;
        outcome_tracking: any;
        feedback_loops: any;
        model_updates: any;
        revalidation_triggers: any;
        version_comparison: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PatientEngagementPlatforms {
    id: string;
    platform_id: string;
    platform_name: string;
    engagement_focus: string;
    delivery_modality: string;
    engagement_features: {
        gamification_elements: any;
        social_features: any;
        personalization_engine: any;
        reminder_systems: any;
        progress_tracking: any;
        reward_mechanisms: any;
    };
    behavioral_interventions: {
        behavior_change_techniques: any[];
        motivational_interviewing: any;
        cognitive_behavioral_therapy: any;
        mindfulness_interventions: any;
        habit_formation: any;
        goal_setting_frameworks: any;
    };
    educational_content: {
        health_literacy_adaptation: any;
        multimedia_resources: any;
        interactive_modules: any;
        assessment_tools: any;
        knowledge_checks: any;
        cultural_adaptation: any;
    };
    data_collection: {
        patient_reported_outcomes: any;
        behavioral_data: any;
        physiological_data: any;
        engagement_metrics: any;
        satisfaction_surveys: any;
        usage_analytics: any;
    };
    clinical_integration: {
        provider_dashboards: any;
        clinical_alerts: any;
        care_plan_integration: any;
        outcome_reporting: any;
        risk_stratification: any;
        intervention_recommendations: any;
    };
    accessibility_features: {
        disability_accommodations: any;
        language_support: any;
        cultural_sensitivity: any;
        age_appropriate_design: any;
        technology_literacy_support: any;
        offline_capabilities: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DigitalBiomarkerSystems {
    id: string;
    biomarker_id: string;
    biomarker_name: string;
    biomarker_category: string;
    measurement_context: string;
    data_sources: {
        sensor_types: any[];
        wearable_devices: any[];
        smartphone_sensors: any[];
        environmental_sensors: any[];
        medical_devices: any[];
        patient_input: any;
    };
    signal_processing: {
        data_preprocessing: any;
        feature_extraction: any;
        noise_reduction: any;
        artifact_removal: any;
        signal_fusion: any;
        quality_assessment: any;
    };
    analytical_validation: {
        analytical_sensitivity: any;
        analytical_specificity: any;
        precision_accuracy: any;
        stability_testing: any;
        reference_standards: any;
        measurement_uncertainty: any;
    };
    clinical_validation: {
        clinical_correlation: any;
        disease_association: any;
        prognostic_value: any;
        therapeutic_monitoring: any;
        longitudinal_validation: any;
        population_studies: any;
    };
    algorithm_development: {
        machine_learning_models: any;
        feature_selection: any;
        model_training: any;
        cross_validation: any;
        performance_optimization: any;
        interpretability: any;
    };
    clinical_utility: {
        diagnostic_applications: any;
        monitoring_applications: any;
        predictive_applications: any;
        therapeutic_applications: any;
        cost_effectiveness: any;
        implementation_barriers: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DigitalTherapeuticsQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    therapeutic_effectiveness: {
        clinical_outcome_improvement: number;
        symptom_reduction_rate: number;
        functional_improvement_score: number;
        quality_of_life_enhancement: number;
        treatment_adherence_rate: number;
        therapeutic_goal_achievement: number;
    };
    patient_engagement: {
        user_retention_rate: number;
        session_completion_rate: number;
        feature_utilization_rate: number;
        patient_satisfaction_score: number;
        user_experience_rating: number;
        recommendation_likelihood: number;
    };
    clinical_integration: {
        provider_adoption_rate: number;
        workflow_integration_success: number;
        clinical_decision_support_utilization: number;
        care_coordination_improvement: number;
        provider_satisfaction_score: number;
        clinical_efficiency_gain: number;
    };
    safety_performance: {
        adverse_event_rate: number;
        safety_signal_detection: number;
        risk_mitigation_effectiveness: number;
        cybersecurity_incident_rate: number;
        data_privacy_compliance: number;
        patient_safety_score: number;
    };
    regulatory_compliance: {
        quality_system_compliance: number;
        clinical_evidence_strength: number;
        regulatory_submission_success: number;
        post_market_surveillance_quality: number;
        international_approval_rate: number;
        compliance_audit_score: number;
    };
    technology_performance: {
        system_reliability: number;
        response_time_performance: number;
        scalability_achievement: number;
        interoperability_success: number;
        data_quality_score: number;
        algorithm_accuracy_rate: number;
    };
    economic_value: {
        cost_effectiveness_ratio: number;
        healthcare_cost_reduction: number;
        productivity_improvement: number;
        resource_utilization_optimization: number;
        return_on_investment: number;
        value_based_care_contribution: number;
    };
    innovation_impact: {
        evidence_generation_rate: number;
        scientific_publication_impact: number;
        technology_advancement_contribution: number;
        market_adoption_rate: number;
        ecosystem_development: number;
        future_capability_enablement: number;
    };
    created_at: Date;
    updated_at: Date;
}
