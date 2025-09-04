export declare class AiImagingDiagnostics {
    id: string;
    imaging_ai_id: string;
    patient_id: string;
    study_id: string;
    imaging_modality: string;
    ai_application: string;
    ai_model_details: {
        model_name: string;
        model_version: string;
        algorithm_type: string;
        training_dataset: any;
        validation_performance: any;
        regulatory_approval: any;
    };
    image_analysis: {
        preprocessing_steps: any;
        feature_extraction: any;
        abnormality_detection: any;
        anatomical_segmentation: any;
        quantitative_measurements: any;
        confidence_scores: any;
    };
    diagnostic_findings: {
        primary_findings: any[];
        secondary_findings: any[];
        incidental_findings: any[];
        normal_variants: any[];
        technical_adequacy: any;
        limitations: any[];
    };
    clinical_integration: {
        worklist_prioritization: any;
        automated_reporting: any;
        radiologist_assistance: any;
        quality_assurance: any;
        workflow_optimization: any;
        decision_support: any;
    };
    performance_metrics: {
        sensitivity: number;
        specificity: number;
        accuracy: number;
        processing_time: number;
        radiologist_agreement: number;
        clinical_impact: any;
    };
    quality_control: {
        image_quality_assessment: any;
        artifact_detection: any;
        protocol_compliance: any;
        comparative_analysis: any;
        peer_review_integration: any;
        continuous_learning: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class RadiomicsAnalyticsPlatform {
    id: string;
    radiomics_id: string;
    patient_id: string;
    study_id: string;
    analysis_type: string;
    clinical_application: string;
    image_preprocessing: {
        normalization_methods: any;
        noise_reduction: any;
        intensity_standardization: any;
        spatial_resampling: any;
        bias_correction: any;
        quality_control: any;
    };
    feature_extraction: {
        first_order_features: any;
        texture_features: any;
        shape_features: any;
        wavelets_features: any;
        laws_features: any;
        gabor_features: any;
    };
    deep_learning_features: {
        convolutional_features: any;
        autoencoder_features: any;
        transfer_learning: any;
        feature_maps: any;
        attention_mechanisms: any;
        interpretability: any;
    };
    predictive_modeling: {
        machine_learning_models: any;
        feature_selection: any;
        cross_validation: any;
        performance_metrics: any;
        model_interpretation: any;
        clinical_validation: any;
    };
    biomarker_discovery: {
        imaging_biomarkers: any;
        predictive_signatures: any;
        prognostic_models: any;
        treatment_response: any;
        survival_analysis: any;
        comparative_studies: any;
    };
    clinical_translation: {
        decision_support_tools: any;
        risk_stratification: any;
        treatment_planning: any;
        monitoring_protocols: any;
        outcome_prediction: any;
        personalized_medicine: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class AdvancedImagingWorkflow {
    id: string;
    workflow_id: string;
    workflow_name: string;
    workflow_type: string;
    optimization_focus: string;
    workflow_steps: {
        patient_scheduling: any;
        preparation_protocols: any;
        image_acquisition: any;
        post_processing: any;
        interpretation: any;
        reporting: any;
    };
    automation_features: {
        protocol_selection: any;
        positioning_assistance: any;
        acquisition_optimization: any;
        reconstruction_algorithms: any;
        quality_assessment: any;
        report_generation: any;
    };
    ai_integration: {
        intelligent_scheduling: any;
        protocol_optimization: any;
        real_time_guidance: any;
        automated_measurements: any;
        quality_control: any;
        predictive_analytics: any;
    };
    quality_management: {
        image_quality_metrics: any;
        dose_optimization: any;
        safety_protocols: any;
        error_prevention: any;
        peer_review: any;
        continuous_improvement: any;
    };
    performance_optimization: {
        throughput_metrics: any;
        turnaround_times: any;
        resource_utilization: any;
        cost_efficiency: any;
        patient_satisfaction: any;
        staff_efficiency: any;
    };
    integration_systems: {
        pacs_integration: any;
        ris_connectivity: any;
        ehr_interoperability: any;
        modality_interfaces: any;
        clinical_systems: any;
        data_analytics: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ThreeDimensionalReconstruction {
    id: string;
    reconstruction_id: string;
    patient_id: string;
    study_id: string;
    reconstruction_type: string;
    clinical_purpose: string;
    reconstruction_parameters: {
        slice_thickness: number;
        reconstruction_algorithm: string;
        filter_settings: any;
        windowing_parameters: any;
        resolution_settings: any;
        processing_time: number;
    };
    advanced_techniques: {
        multi_phase_reconstruction: any;
        perfusion_analysis: any;
        angiography_reconstruction: any;
        cardiac_reconstruction: any;
        functional_imaging: any;
        molecular_imaging: any;
    };
    visualization_tools: {
        interactive_3d_models: any;
        virtual_reality: any;
        augmented_reality: any;
        holographic_display: any;
        mobile_visualization: any;
        web_based_viewers: any;
    };
    measurement_analysis: {
        volumetric_measurements: any;
        anatomical_landmarks: any;
        distance_calculations: any;
        angle_measurements: any;
        surface_area_analysis: any;
        comparative_studies: any;
    };
    surgical_applications: {
        preoperative_planning: any;
        intraoperative_guidance: any;
        postoperative_assessment: any;
        simulation_training: any;
        patient_education: any;
        outcome_prediction: any;
    };
    collaboration_features: {
        multi_user_access: any;
        annotation_tools: any;
        sharing_capabilities: any;
        version_control: any;
        expert_consultation: any;
        educational_content: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class InterventionalImagingGuidance {
    id: string;
    intervention_id: string;
    patient_id: string;
    procedure_name: string;
    imaging_guidance: string;
    intervention_type: string;
    real_time_guidance: {
        live_imaging: any;
        needle_tracking: any;
        target_localization: any;
        path_planning: any;
        collision_avoidance: any;
        dose_monitoring: any;
    };
    navigation_systems: {
        electromagnetic_tracking: any;
        optical_tracking: any;
        ultrasound_fusion: any;
        ct_fluoroscopy: any;
        mri_guidance: any;
        robotic_assistance: any;
    };
    procedure_planning: {
        pre_procedure_imaging: any;
        trajectory_planning: any;
        risk_assessment: any;
        alternative_approaches: any;
        equipment_selection: any;
        patient_positioning: any;
    };
    safety_monitoring: {
        radiation_dose_tracking: any;
        temperature_monitoring: any;
        vital_sign_integration: any;
        complication_detection: any;
        emergency_protocols: any;
        quality_assurance: any;
    };
    outcome_assessment: {
        immediate_results: any;
        technical_success: any;
        complications: any;
        follow_up_imaging: any;
        clinical_outcomes: any;
        long_term_monitoring: any;
    };
    documentation_reporting: {
        procedure_documentation: any;
        image_storage: any;
        measurement_records: any;
        complication_tracking: any;
        outcome_reporting: any;
        quality_metrics: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareImagingAiQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    ai_diagnostic_performance: {
        detection_accuracy: number;
        false_positive_rate: number;
        false_negative_rate: number;
        radiologist_agreement: number;
        diagnostic_confidence: number;
        clinical_impact_score: number;
    };
    workflow_efficiency: {
        interpretation_time_reduction: number;
        report_turnaround_improvement: number;
        workflow_automation_rate: number;
        radiologist_productivity: number;
        study_prioritization_accuracy: number;
        quality_assurance_efficiency: number;
    };
    image_quality_enhancement: {
        image_quality_improvement: number;
        noise_reduction_effectiveness: number;
        dose_optimization_achievement: number;
        reconstruction_quality: number;
        artifact_reduction_rate: number;
        visualization_enhancement: number;
    };
    clinical_decision_support: {
        decision_support_utilization: number;
        clinical_recommendation_accuracy: number;
        treatment_planning_improvement: number;
        outcome_prediction_accuracy: number;
        risk_stratification_effectiveness: number;
        personalized_care_delivery: number;
    };
    patient_outcomes: {
        diagnostic_accuracy_improvement: number;
        early_detection_rate: number;
        treatment_response_monitoring: number;
        patient_safety_enhancement: number;
        care_pathway_optimization: number;
        patient_satisfaction_score: number;
    };
    technology_integration: {
        system_interoperability: number;
        data_integration_success: number;
        ai_model_deployment_rate: number;
        continuous_learning_effectiveness: number;
        scalability_achievement: number;
        innovation_adoption_speed: number;
    };
    cost_effectiveness: {
        operational_cost_reduction: number;
        resource_utilization_optimization: number;
        equipment_efficiency_improvement: number;
        staff_productivity_gain: number;
        error_reduction_savings: number;
        roi_on_ai_investment: number;
    };
    quality_assurance: {
        model_performance_monitoring: number;
        bias_detection_effectiveness: number;
        regulatory_compliance_score: number;
        validation_study_success: number;
        continuous_improvement_rate: number;
        safety_monitoring_effectiveness: number;
    };
    created_at: Date;
    updated_at: Date;
}
