export declare class NanoparticleDrugDelivery {
    id: string;
    nanoparticle_id: string;
    formulation_name: string;
    nanoparticle_type: string;
    therapeutic_application: string;
    physicochemical_properties: {
        particle_size: any;
        size_distribution: any;
        surface_charge: any;
        surface_area: any;
        morphology: any;
        crystallinity: any;
    };
    drug_loading: {
        active_pharmaceutical_ingredient: any;
        loading_mechanism: string;
        drug_loading_efficiency: number;
        drug_release_profile: any;
        stability_assessment: any;
        compatibility_studies: any;
    };
    targeting_strategies: {
        passive_targeting: any;
        active_targeting: any;
        targeting_ligands: any[];
        receptor_binding: any;
        tissue_specificity: any;
        cellular_uptake: any;
    };
    pharmacokinetics: {
        absorption_distribution: any;
        metabolism_clearance: any;
        bioavailability: any;
        biodistribution: any;
        elimination_pathways: any;
        pharmacokinetic_modeling: any;
    };
    manufacturing_process: {
        synthesis_methods: any;
        scale_up_strategies: any;
        quality_control: any;
        batch_consistency: any;
        purification_methods: any;
        sterilization_procedures: any;
    };
    safety_evaluation: {
        cytotoxicity_studies: any;
        genotoxicity_assessment: any;
        immunotoxicity_evaluation: any;
        biodegradation_studies: any;
        long_term_safety: any;
        environmental_impact: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DiagnosticNanosystems {
    id: string;
    nanosystem_id: string;
    diagnostic_name: string;
    detection_method: string;
    diagnostic_application: string;
    nanosensor_design: {
        sensing_element: any;
        recognition_molecules: any[];
        signal_transduction: any;
        amplification_mechanisms: any;
        multiplexing_capability: any;
        miniaturization_features: any;
    };
    detection_performance: {
        sensitivity: number;
        specificity: number;
        limit_of_detection: number;
        dynamic_range: any;
        response_time: any;
        stability: any;
    };
    imaging_applications: {
        contrast_agents: any[];
        imaging_modalities: any;
        biodistribution_imaging: any;
        molecular_imaging: any;
        theranostic_applications: any;
        image_enhancement: any;
    };
    point_of_care_features: {
        portable_design: any;
        rapid_testing: any;
        sample_preparation: any;
        user_interface: any;
        connectivity_features: any;
        cost_effectiveness: any;
    };
    biocompatibility: {
        cellular_compatibility: any;
        tissue_compatibility: any;
        blood_compatibility: any;
        immune_response: any;
        biodegradation: any;
        clearance_mechanisms: any;
    };
    clinical_validation: {
        analytical_validation: any;
        clinical_studies: any;
        comparative_studies: any;
        real_world_performance: any;
        regulatory_approval: any;
        clinical_utility: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TherapeuticNanodevices {
    id: string;
    nanodevice_id: string;
    device_name: string;
    therapeutic_mechanism: string;
    activation_trigger: string;
    nanodevice_architecture: {
        core_structure: any;
        surface_modifications: any;
        functional_components: any[];
        responsive_elements: any;
        protection_mechanisms: any;
        release_mechanisms: any;
    };
    therapeutic_payload: {
        therapeutic_agents: any[];
        loading_strategies: any;
        release_kinetics: any;
        dose_control: any;
        combination_therapy: any;
        payload_protection: any;
    };
    smart_functionality: {
        stimuli_responsiveness: any;
        programmable_release: any;
        feedback_mechanisms: any;
        adaptive_behavior: any;
        multi_stage_operation: any;
        self_regulation: any;
    };
    targeting_precision: {
        spatial_targeting: any;
        temporal_targeting: any;
        molecular_targeting: any;
        cellular_targeting: any;
        tissue_penetration: any;
        barrier_crossing: any;
    };
    therapeutic_efficacy: {
        in_vitro_studies: any;
        in_vivo_studies: any;
        dose_response: any;
        therapeutic_window: any;
        combination_effects: any;
        resistance_mechanisms: any;
    };
    manufacturing_scalability: {
        synthesis_reproducibility: any;
        quality_assurance: any;
        cost_considerations: any;
        regulatory_pathway: any;
        commercial_viability: any;
        intellectual_property: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class NanobiosensorPlatforms {
    id: string;
    biosensor_id: string;
    platform_name: string;
    sensing_principle: string;
    target_analyte: string;
    nanomaterial_components: {
        nanomaterials: any[];
        surface_functionalization: any;
        biorecognition_elements: any[];
        signal_amplification: any;
        stability_enhancement: any;
        biocompatibility_features: any;
    };
    sensing_performance: {
        detection_limit: number;
        selectivity: number;
        response_time: number;
        linear_range: any;
        reproducibility: any;
        long_term_stability: any;
    };
    miniaturization_features: {
        chip_integration: any;
        microfluidics_integration: any;
        portable_design: any;
        wireless_connectivity: any;
        power_management: any;
        data_processing: any;
    };
    multiplexing_capabilities: {
        multi_analyte_detection: any;
        array_configurations: any;
        parallel_processing: any;
        data_correlation: any;
        pattern_recognition: any;
        machine_learning_integration: any;
    };
    clinical_applications: {
        point_of_care_testing: any;
        continuous_monitoring: any;
        early_diagnosis: any;
        therapeutic_monitoring: any;
        personalized_medicine: any;
        epidemic_surveillance: any;
    };
    validation_studies: {
        analytical_validation: any;
        clinical_validation: any;
        field_testing: any;
        comparative_analysis: any;
        regulatory_compliance: any;
        commercialization_pathway: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class NanotoxicologyAssessment {
    id: string;
    assessment_id: string;
    nanomaterial_name: string;
    nanomaterial_type: string;
    exposure_route: string;
    physicochemical_characterization: {
        particle_size_distribution: any;
        surface_area: any;
        surface_chemistry: any;
        crystalline_structure: any;
        aggregation_state: any;
        dissolution_rate: any;
    };
    in_vitro_toxicology: {
        cytotoxicity_assays: any[];
        genotoxicity_tests: any[];
        oxidative_stress: any;
        inflammatory_response: any;
        barrier_function: any;
        mechanistic_studies: any;
    };
    in_vivo_toxicology: {
        acute_toxicity: any;
        subchronic_toxicity: any;
        chronic_toxicity: any;
        reproductive_toxicity: any;
        developmental_toxicity: any;
        carcinogenicity: any;
    };
    biodistribution_kinetics: {
        absorption_patterns: any;
        distribution_profiles: any;
        metabolism_pathways: any;
        elimination_routes: any;
        bioaccumulation: any;
        tissue_persistence: any;
    };
    environmental_impact: {
        environmental_fate: any;
        ecotoxicology: any;
        bioaccumulation_potential: any;
        persistence_assessment: any;
        risk_characterization: any;
        life_cycle_assessment: any;
    };
    risk_assessment: {
        hazard_identification: any;
        dose_response_assessment: any;
        exposure_assessment: any;
        risk_characterization: any;
        uncertainty_analysis: any;
        risk_management: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class NanotechnologyQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    therapeutic_performance: {
        drug_delivery_efficiency: number;
        therapeutic_efficacy: number;
        targeted_delivery_success: number;
        bioavailability_improvement: number;
        side_effect_reduction: number;
        patient_outcome_enhancement: number;
    };
    diagnostic_accuracy: {
        sensitivity_achievement: number;
        specificity_performance: number;
        detection_limit_improvement: number;
        response_time_optimization: number;
        point_of_care_utility: number;
        clinical_decision_impact: number;
    };
    manufacturing_quality: {
        synthesis_reproducibility: number;
        batch_consistency: number;
        quality_control_pass_rate: number;
        scalability_success: number;
        cost_effectiveness: number;
        yield_optimization: number;
    };
    safety_profile: {
        biocompatibility_score: number;
        toxicity_assessment_completeness: number;
        safety_margin_adequacy: number;
        adverse_event_rate: number;
        long_term_safety_confirmation: number;
        environmental_safety_score: number;
    };
    regulatory_compliance: {
        regulatory_approval_rate: number;
        compliance_documentation_quality: number;
        clinical_trial_success_rate: number;
        post_market_surveillance_quality: number;
        international_harmonization: number;
        regulatory_pathway_efficiency: number;
    };
    innovation_advancement: {
        research_breakthrough_rate: number;
        patent_generation: number;
        technology_transfer_success: number;
        commercial_development: number;
        scientific_publication_impact: number;
        collaboration_network_growth: number;
    };
    clinical_translation: {
        bench_to_bedside_success: number;
        clinical_application_rate: number;
        healthcare_integration: number;
        physician_adoption: number;
        patient_accessibility: number;
        health_system_impact: number;
    };
    economic_impact: {
        development_cost_efficiency: number;
        market_value_creation: number;
        healthcare_cost_reduction: number;
        return_on_investment: number;
        job_creation_impact: number;
        economic_competitiveness: number;
    };
    created_at: Date;
    updated_at: Date;
}
