export declare class MetabolomicsProfiling {
    id: string;
    profiling_id: string;
    sample_id: string;
    profiling_approach: string;
    analytical_platform: string;
    sample_information: {
        sample_type: string;
        collection_protocol: any;
        storage_conditions: any;
        processing_method: any;
        quality_metrics: any;
        batch_information: any;
    };
    analytical_methods: {
        extraction_protocol: any;
        chromatographic_conditions: any;
        mass_spectrometry_parameters: any;
        quality_control_samples: any;
        instrument_calibration: any;
        method_validation: any;
    };
    metabolite_identification: {
        compound_libraries: any[];
        identification_confidence: any;
        structural_annotation: any;
        retention_time_matching: any;
        ms2_fragmentation: any;
        chemical_standards: any;
    };
    data_processing: {
        peak_detection: any;
        alignment_normalization: any;
        missing_value_imputation: any;
        quality_filtering: any;
        batch_correction: any;
        statistical_transformation: any;
    };
    quantitative_analysis: {
        concentration_measurements: any;
        internal_standards: any;
        calibration_curves: any;
        precision_accuracy: any;
        limit_of_detection: any;
        dynamic_range: any;
    };
    clinical_correlation: {
        phenotype_associations: any;
        disease_biomarkers: any;
        treatment_response: any;
        prognostic_indicators: any;
        metabolic_signatures: any;
        clinical_validation: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MetabolicPathwayAnalysis {
    id: string;
    analysis_id: string;
    pathway_name: string;
    pathway_category: string;
    analysis_type: string;
    pathway_components: {
        metabolites: any[];
        enzymes: any[];
        reactions: any[];
        regulatory_elements: any[];
        cofactors: any[];
        pathway_interactions: any;
    };
    enrichment_analysis: {
        statistical_methods: any;
        pathway_databases: any[];
        significance_thresholds: any;
        multiple_testing_correction: any;
        enrichment_scores: any;
        pathway_ranking: any;
    };
    network_analysis: {
        metabolic_networks: any;
        network_topology: any;
        centrality_measures: any;
        module_detection: any;
        pathway_crosstalk: any;
        network_perturbation: any;
    };
    flux_analysis: {
        metabolic_flux_modeling: any;
        constraint_based_modeling: any;
        flux_balance_analysis: any;
        dynamic_flux_analysis: any;
        isotope_labeling: any;
        flux_variability: any;
    };
    regulatory_analysis: {
        transcriptional_regulation: any;
        post_translational_modifications: any;
        allosteric_regulation: any;
        feedback_inhibition: any;
        metabolite_regulation: any;
        systems_level_control: any;
    };
    disease_associations: {
        pathway_dysregulation: any;
        disease_mechanisms: any;
        therapeutic_targets: any;
        biomarker_pathways: any;
        drug_metabolism: any;
        personalized_medicine: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SystemsBiologyModeling {
    id: string;
    model_id: string;
    model_name: string;
    modeling_approach: string;
    biological_system: string;
    model_components: {
        biological_entities: any[];
        interactions: any[];
        parameters: any[];
        variables: any[];
        constraints: any[];
        boundary_conditions: any;
    };
    mathematical_framework: {
        differential_equations: any;
        stochastic_models: any;
        boolean_networks: any;
        graph_theory: any;
        machine_learning: any;
        hybrid_models: any;
    };
    multi_omics_integration: {
        genomics_data: any;
        transcriptomics_data: any;
        proteomics_data: any;
        metabolomics_data: any;
        epigenomics_data: any;
        integration_methods: any;
    };
    model_validation: {
        experimental_validation: any;
        cross_validation: any;
        sensitivity_analysis: any;
        robustness_testing: any;
        predictive_accuracy: any;
        independent_datasets: any;
    };
    simulation_analysis: {
        parameter_scanning: any;
        perturbation_analysis: any;
        optimization_studies: any;
        scenario_modeling: any;
        virtual_experiments: any;
        hypothesis_generation: any;
    };
    clinical_applications: {
        disease_modeling: any;
        drug_target_identification: any;
        treatment_optimization: any;
        biomarker_discovery: any;
        precision_medicine: any;
        clinical_decision_support: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MultiOmicsIntegration {
    id: string;
    integration_id: string;
    study_name: string;
    integration_strategy: string;
    study_objective: string;
    omics_datasets: {
        genomics: any;
        transcriptomics: any;
        proteomics: any;
        metabolomics: any;
        epigenomics: any;
        microbiomics: any;
    };
    data_preprocessing: {
        normalization_methods: any;
        batch_effect_correction: any;
        missing_value_handling: any;
        outlier_detection: any;
        data_transformation: any;
        quality_control: any;
    };
    integration_methods: {
        concatenation_approaches: any;
        transformation_methods: any;
        model_based_integration: any;
        network_integration: any;
        bayesian_methods: any;
        deep_learning: any;
    };
    analytical_approaches: {
        dimension_reduction: any;
        clustering_analysis: any;
        classification_methods: any;
        regression_modeling: any;
        pathway_analysis: any;
        network_analysis: any;
    };
    biological_interpretation: {
        functional_annotation: any;
        pathway_enrichment: any;
        gene_ontology: any;
        disease_associations: any;
        drug_targets: any;
        mechanistic_insights: any;
    };
    validation_strategies: {
        cross_validation: any;
        independent_validation: any;
        experimental_validation: any;
        clinical_validation: any;
        reproducibility_assessment: any;
        generalizability_testing: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MetabolicBiomarkerDiscovery {
    id: string;
    discovery_id: string;
    biomarker_panel: string;
    biomarker_type: string;
    discovery_phase: string;
    study_design: {
        study_population: any;
        sample_size: any;
        inclusion_exclusion_criteria: any;
        control_groups: any;
        longitudinal_design: any;
        statistical_power: any;
    };
    biomarker_candidates: {
        metabolite_signatures: any[];
        pathway_scores: any;
        metabolite_ratios: any;
        composite_biomarkers: any;
        novel_metabolites: any;
        known_biomarkers: any;
    };
    analytical_validation: {
        analytical_sensitivity: any;
        analytical_specificity: any;
        precision_accuracy: any;
        linearity_range: any;
        stability_testing: any;
        inter_laboratory_validation: any;
    };
    clinical_validation: {
        clinical_sensitivity: any;
        clinical_specificity: any;
        positive_predictive_value: any;
        negative_predictive_value: any;
        area_under_curve: any;
        clinical_utility: any;
    };
    statistical_analysis: {
        univariate_analysis: any;
        multivariate_analysis: any;
        machine_learning: any;
        feature_selection: any;
        model_development: any;
        performance_metrics: any;
    };
    regulatory_pathway: {
        biomarker_qualification: any;
        regulatory_guidance: any;
        clinical_trial_design: any;
        companion_diagnostics: any;
        post_market_surveillance: any;
        international_harmonization: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MetabolomicsSystemsBiologyQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    analytical_quality: {
        data_quality_score: number;
        metabolite_identification_rate: number;
        quantification_accuracy: number;
        reproducibility_coefficient: number;
        method_validation_completeness: number;
        inter_laboratory_consistency: number;
    };
    pathway_analysis_performance: {
        pathway_coverage: number;
        enrichment_significance: number;
        biological_relevance_score: number;
        network_connectivity: number;
        functional_annotation_quality: number;
        pathway_database_completeness: number;
    };
    systems_modeling_accuracy: {
        model_predictive_power: number;
        validation_success_rate: number;
        parameter_estimation_accuracy: number;
        model_robustness: number;
        biological_plausibility: number;
        experimental_validation_rate: number;
    };
    multi_omics_integration_success: {
        data_integration_completeness: number;
        cross_omics_correlation: number;
        biological_coherence: number;
        technical_reproducibility: number;
        biological_interpretation_quality: number;
        clinical_relevance_score: number;
    };
    biomarker_discovery_efficiency: {
        biomarker_identification_rate: number;
        validation_success_rate: number;
        clinical_utility_demonstration: number;
        regulatory_approval_rate: number;
        translation_to_clinic: number;
        commercial_development_success: number;
    };
    clinical_translation: {
        clinical_application_rate: number;
        diagnostic_accuracy_improvement: number;
        treatment_guidance_effectiveness: number;
        patient_stratification_success: number;
        personalized_medicine_advancement: number;
        healthcare_decision_impact: number;
    };
    technological_advancement: {
        analytical_method_innovation: number;
        computational_tool_development: number;
        database_resource_enhancement: number;
        automation_implementation: number;
        standardization_progress: number;
        platform_integration_success: number;
    };
    research_impact: {
        scientific_publication_quality: number;
        knowledge_generation_rate: number;
        collaboration_network_growth: number;
        technology_transfer_success: number;
        patent_development: number;
        field_advancement_contribution: number;
    };
    created_at: Date;
    updated_at: Date;
}
