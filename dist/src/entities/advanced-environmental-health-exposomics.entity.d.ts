export declare class EnvironmentalExposureAssessment {
    id: string;
    assessment_id: string;
    subject_id: string;
    exposure_category: string;
    assessment_type: string;
    exposure_sources: {
        air_pollution: any;
        water_contamination: any;
        soil_contamination: any;
        food_contaminants: any;
        occupational_exposures: any;
        consumer_products: any;
    };
    chemical_exposures: {
        persistent_organic_pollutants: any;
        heavy_metals: any;
        pesticides: any;
        industrial_chemicals: any;
        endocrine_disruptors: any;
        volatile_organic_compounds: any;
    };
    physical_exposures: {
        radiation: any;
        noise: any;
        temperature_extremes: any;
        electromagnetic_fields: any;
        vibration: any;
        atmospheric_pressure: any;
    };
    biological_exposures: {
        pathogens: any;
        allergens: any;
        toxins: any;
        microorganisms: any;
        vectors: any;
        zoonotic_diseases: any;
    };
    exposure_measurement: {
        sampling_methods: any;
        analytical_techniques: any;
        detection_limits: any;
        quality_control: any;
        temporal_patterns: any;
        spatial_distribution: any;
    };
    biomarker_analysis: {
        exposure_biomarkers: any;
        effect_biomarkers: any;
        susceptibility_biomarkers: any;
        metabolites: any;
        adducts: any;
        epigenetic_markers: any;
    };
    health_outcomes: {
        acute_effects: any;
        chronic_effects: any;
        developmental_effects: any;
        reproductive_effects: any;
        carcinogenic_effects: any;
        neurological_effects: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ExposomeProfilingPlatforms {
    id: string;
    platform_id: string;
    study_name: string;
    exposome_domain: string;
    analytical_approach: string;
    sample_collection: {
        biological_samples: any[];
        environmental_samples: any[];
        personal_monitoring: any;
        questionnaire_data: any;
        sensor_data: any;
        geospatial_data: any;
    };
    analytical_methods: {
        high_resolution_mass_spectrometry: any;
        targeted_methods: any;
        suspect_screening: any;
        non_target_analysis: any;
        multi_platform_analysis: any;
        quality_assurance: any;
    };
    data_processing: {
        peak_detection: any;
        feature_alignment: any;
        annotation_strategies: any;
        database_matching: any;
        statistical_analysis: any;
        machine_learning: any;
    };
    exposure_reconstruction: {
        source_apportionment: any;
        pathway_analysis: any;
        temporal_reconstruction: any;
        spatial_modeling: any;
        cumulative_assessment: any;
        mixture_analysis: any;
    };
    health_integration: {
        phenotype_association: any;
        biomarker_correlation: any;
        disease_risk_assessment: any;
        susceptibility_factors: any;
        gene_environment_interactions: any;
        epigenome_associations: any;
    };
    precision_medicine: {
        individual_exposure_profiles: any;
        personalized_risk_assessment: any;
        targeted_interventions: any;
        exposure_reduction_strategies: any;
        precision_prevention: any;
        therapeutic_optimization: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class EnvironmentalMonitoringNetworks {
    id: string;
    network_id: string;
    network_name: string;
    monitoring_scope: string;
    environmental_media: string;
    monitoring_infrastructure: {
        monitoring_stations: any[];
        sensor_networks: any;
        mobile_monitoring: any;
        satellite_monitoring: any;
        citizen_science: any;
        laboratory_networks: any;
    };
    measured_parameters: {
        chemical_contaminants: any[];
        physical_parameters: any;
        biological_indicators: any;
        meteorological_data: any;
        ecosystem_health: any;
        human_health_indicators: any;
    };
    data_management: {
        data_collection: any;
        quality_control: any;
        data_validation: any;
        data_integration: any;
        real_time_processing: any;
        data_sharing: any;
    };
    early_warning_systems: {
        alert_thresholds: any;
        risk_assessment: any;
        notification_systems: any;
        emergency_response: any;
        public_communication: any;
        stakeholder_engagement: any;
    };
    health_surveillance: {
        exposure_surveillance: any;
        health_outcome_monitoring: any;
        vulnerable_populations: any;
        spatial_analysis: any;
        temporal_trends: any;
        causal_attribution: any;
    };
    policy_support: {
        regulatory_compliance: any;
        standard_setting: any;
        policy_evaluation: any;
        intervention_assessment: any;
        cost_benefit_analysis: any;
        decision_support: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class EnvironmentalEpidemiologyStudies {
    id: string;
    study_id: string;
    study_title: string;
    study_design: string;
    health_outcome: string;
    study_population: {
        target_population: any;
        inclusion_criteria: any;
        exclusion_criteria: any;
        sample_size: any;
        recruitment_strategy: any;
        follow_up_duration: any;
    };
    exposure_assessment: {
        exposure_definition: any;
        measurement_methods: any;
        temporal_windows: any;
        spatial_resolution: any;
        exposure_modeling: any;
        validation_studies: any;
    };
    outcome_assessment: {
        case_definition: any;
        diagnostic_criteria: any;
        ascertainment_methods: any;
        validation_procedures: any;
        subclinical_endpoints: any;
        biomarker_endpoints: any;
    };
    confounding_control: {
        potential_confounders: any[];
        adjustment_strategies: any;
        propensity_scores: any;
        instrumental_variables: any;
        sensitivity_analysis: any;
        bias_assessment: any;
    };
    statistical_analysis: {
        analytical_methods: any;
        dose_response_modeling: any;
        time_series_analysis: any;
        spatial_analysis: any;
        causal_inference: any;
        meta_analysis: any;
    };
    special_populations: {
        vulnerable_groups: any[];
        susceptibility_factors: any;
        life_stage_considerations: any;
        genetic_susceptibility: any;
        social_determinants: any;
        environmental_justice: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ClimateHealthAssessment {
    id: string;
    assessment_id: string;
    assessment_name: string;
    climate_hazard: string;
    assessment_scale: string;
    climate_projections: {
        climate_models: any[];
        emission_scenarios: any;
        temporal_projections: any;
        spatial_resolution: any;
        uncertainty_analysis: any;
        downscaling_methods: any;
    };
    health_impact_pathways: {
        direct_effects: any;
        indirect_effects: any;
        ecosystem_mediated: any;
        social_mediated: any;
        infrastructure_mediated: any;
        displacement_effects: any;
    };
    vulnerability_assessment: {
        population_vulnerability: any;
        geographic_vulnerability: any;
        social_vulnerability: any;
        health_system_capacity: any;
        adaptive_capacity: any;
        resilience_factors: any;
    };
    health_impact_quantification: {
        burden_of_disease: any;
        mortality_estimates: any;
        morbidity_estimates: any;
        healthcare_utilization: any;
        economic_impacts: any;
        uncertainty_bounds: any;
    };
    adaptation_strategies: {
        health_system_adaptation: any;
        infrastructure_adaptation: any;
        behavioral_adaptations: any;
        ecosystem_based_adaptation: any;
        policy_adaptations: any;
        community_resilience: any;
    };
    monitoring_evaluation: {
        surveillance_systems: any;
        early_warning_systems: any;
        adaptation_monitoring: any;
        effectiveness_evaluation: any;
        continuous_improvement: any;
        lessons_learned: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class EnvironmentalHealthExposomicsQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    exposure_assessment_quality: {
        measurement_accuracy: number;
        analytical_precision: number;
        detection_capability: number;
        temporal_resolution: number;
        spatial_coverage: number;
        population_representativeness: number;
    };
    exposome_profiling_performance: {
        feature_detection_rate: number;
        annotation_success_rate: number;
        data_quality_score: number;
        method_reproducibility: number;
        cross_platform_consistency: number;
        biological_relevance: number;
    };
    monitoring_network_effectiveness: {
        spatial_coverage_adequacy: number;
        temporal_continuity: number;
        data_quality_assurance: number;
        early_warning_performance: number;
        stakeholder_engagement: number;
        policy_impact: number;
    };
    epidemiological_study_quality: {
        study_design_appropriateness: number;
        exposure_assessment_validity: number;
        outcome_ascertainment_quality: number;
        confounding_control: number;
        statistical_analysis_rigor: number;
        causal_inference_strength: number;
    };
    climate_health_assessment_accuracy: {
        projection_reliability: number;
        impact_quantification_precision: number;
        vulnerability_assessment_completeness: number;
        adaptation_strategy_effectiveness: number;
        uncertainty_characterization: number;
        decision_support_utility: number;
    };
    health_protection_outcomes: {
        disease_prevention_effectiveness: number;
        exposure_reduction_achievement: number;
        public_health_intervention_success: number;
        vulnerable_population_protection: number;
        health_equity_improvement: number;
        population_health_outcomes: number;
    };
    technological_innovation: {
        analytical_method_advancement: number;
        monitoring_technology_development: number;
        data_integration_capabilities: number;
        prediction_model_accuracy: number;
        automation_implementation: number;
        cost_effectiveness_improvement: number;
    };
    policy_translation: {
        regulatory_standard_development: number;
        policy_recommendation_adoption: number;
        intervention_implementation_rate: number;
        stakeholder_engagement_success: number;
        international_collaboration: number;
        sustainable_development_contribution: number;
    };
    created_at: Date;
    updated_at: Date;
}
