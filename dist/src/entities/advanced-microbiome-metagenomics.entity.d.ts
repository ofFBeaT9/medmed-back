export declare class MicrobiomeProfilingAnalysis {
    id: string;
    profiling_id: string;
    sample_id: string;
    sample_type: string;
    analysis_approach: string;
    sample_collection: {
        collection_protocol: any;
        preservation_method: any;
        storage_conditions: any;
        transport_conditions: any;
        quality_control: any;
        metadata_collection: any;
    };
    sequencing_parameters: {
        sequencing_platform: string;
        library_preparation: any;
        sequencing_depth: any;
        quality_metrics: any;
        contamination_assessment: any;
        technical_replicates: any;
    };
    taxonomic_profiling: {
        taxonomic_classification: any;
        abundance_estimation: any;
        diversity_metrics: any;
        community_structure: any;
        rare_taxa_detection: any;
        phylogenetic_analysis: any;
    };
    functional_profiling: {
        gene_catalog: any;
        pathway_reconstruction: any;
        enzyme_annotation: any;
        metabolic_potential: any;
        antibiotic_resistance: any;
        virulence_factors: any;
    };
    comparative_analysis: {
        beta_diversity: any;
        alpha_diversity: any;
        differential_abundance: any;
        biomarker_identification: any;
        enterotype_classification: any;
        temporal_dynamics: any;
    };
    quality_assessment: {
        contamination_screening: any;
        batch_effect_detection: any;
        library_complexity: any;
        coverage_uniformity: any;
        technical_variation: any;
        biological_validation: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MetagenomicsAssemblyAnnotation {
    id: string;
    assembly_id: string;
    project_name: string;
    assembly_strategy: string;
    ecosystem_type: string;
    preprocessing_steps: {
        quality_filtering: any;
        adapter_removal: any;
        host_removal: any;
        error_correction: any;
        normalization: any;
        deduplication: any;
    };
    assembly_process: {
        assembler_software: any;
        assembly_parameters: any;
        scaffold_generation: any;
        gap_filling: any;
        assembly_metrics: any;
        contamination_removal: any;
    };
    metagenome_binning: {
        binning_algorithms: any[];
        bin_refinement: any;
        bin_quality_assessment: any;
        taxonomic_assignment: any;
        contamination_detection: any;
        bin_completeness: any;
    };
    gene_prediction: {
        gene_calling_tools: any[];
        coding_sequence_prediction: any;
        non_coding_rna_prediction: any;
        gene_clustering: any;
        gene_catalog_construction: any;
        redundancy_removal: any;
    };
    functional_annotation: {
        protein_domain_analysis: any;
        pathway_mapping: any;
        enzyme_classification: any;
        cog_annotation: any;
        kegg_annotation: any;
        custom_databases: any;
    };
    comparative_genomics: {
        pan_genome_analysis: any;
        core_genome_identification: any;
        accessory_genome_analysis: any;
        horizontal_gene_transfer: any;
        mobile_genetic_elements: any;
        phage_detection: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HostMicrobeInteractions {
    id: string;
    interaction_id: string;
    study_name: string;
    interaction_type: string;
    host_system: string;
    microbial_components: {
        key_taxa: any[];
        functional_genes: any;
        metabolic_pathways: any;
        secreted_factors: any;
        surface_molecules: any;
        quorum_sensing: any;
    };
    host_responses: {
        immune_responses: any;
        metabolic_changes: any;
        gene_expression: any;
        epigenetic_modifications: any;
        physiological_effects: any;
        behavioral_changes: any;
    };
    molecular_mechanisms: {
        signaling_pathways: any;
        metabolite_interactions: any;
        protein_interactions: any;
        regulatory_networks: any;
        crosstalk_mechanisms: any;
        feedback_loops: any;
    };
    disease_associations: {
        disease_conditions: any[];
        dysbiosis_patterns: any;
        causal_relationships: any;
        biomarker_potential: any;
        therapeutic_targets: any;
        prevention_strategies: any;
    };
    experimental_validation: {
        in_vitro_models: any;
        animal_models: any;
        human_studies: any;
        mechanistic_studies: any;
        intervention_studies: any;
        multi_omics_validation: any;
    };
    therapeutic_implications: {
        probiotic_development: any;
        prebiotic_strategies: any;
        microbiome_modulation: any;
        precision_medicine: any;
        drug_metabolism: any;
        treatment_response: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TherapeuticMicrobiomics {
    id: string;
    therapy_id: string;
    therapy_name: string;
    therapy_type: string;
    target_condition: string;
    therapeutic_agents: {
        microbial_strains: any[];
        strain_characterization: any;
        safety_profile: any;
        stability_testing: any;
        dosage_formulation: any;
        delivery_methods: any;
    };
    mechanism_of_action: {
        target_pathways: any;
        microbiome_modulation: any;
        host_interactions: any;
        metabolite_production: any;
        immune_modulation: any;
        barrier_function: any;
    };
    clinical_development: {
        preclinical_studies: any;
        phase_i_trials: any;
        phase_ii_trials: any;
        phase_iii_trials: any;
        regulatory_pathway: any;
        market_authorization: any;
    };
    efficacy_assessment: {
        primary_endpoints: any;
        secondary_endpoints: any;
        biomarker_analysis: any;
        microbiome_endpoints: any;
        safety_monitoring: any;
        long_term_follow_up: any;
    };
    personalization_strategies: {
        microbiome_profiling: any;
        patient_stratification: any;
        precision_dosing: any;
        treatment_optimization: any;
        response_prediction: any;
        combination_therapies: any;
    };
    manufacturing_quality: {
        production_protocols: any;
        quality_control: any;
        standardization: any;
        shelf_life_testing: any;
        regulatory_compliance: any;
        supply_chain_management: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MicrobiomeDiagnostics {
    id: string;
    diagnostic_id: string;
    test_name: string;
    diagnostic_category: string;
    clinical_application: string;
    biomarker_panel: {
        microbial_markers: any[];
        functional_markers: any;
        metabolic_markers: any;
        diversity_indices: any;
        ratio_biomarkers: any;
        composite_scores: any;
    };
    analytical_methods: {
        sequencing_approaches: any;
        targeted_analysis: any;
        quantitative_methods: any;
        rapid_testing: any;
        point_of_care_options: any;
        automation_level: any;
    };
    clinical_validation: {
        sensitivity_specificity: any;
        predictive_values: any;
        diagnostic_accuracy: any;
        clinical_utility: any;
        population_validation: any;
        longitudinal_validation: any;
    };
    reference_databases: {
        healthy_references: any;
        disease_references: any;
        population_specific: any;
        age_specific: any;
        lifestyle_factors: any;
        geographic_variations: any;
    };
    interpretation_algorithms: {
        machine_learning_models: any;
        statistical_frameworks: any;
        decision_trees: any;
        risk_scoring: any;
        treatment_recommendations: any;
        confidence_intervals: any;
    };
    regulatory_compliance: {
        regulatory_pathway: any;
        clinical_trials: any;
        quality_management: any;
        laboratory_certification: any;
        international_standards: any;
        post_market_surveillance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MicrobiomeMetagenomicsQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    profiling_accuracy: {
        taxonomic_classification_accuracy: number;
        abundance_estimation_precision: number;
        diversity_measurement_reliability: number;
        functional_annotation_completeness: number;
        contamination_detection_rate: number;
        quality_control_pass_rate: number;
    };
    metagenomics_assembly_quality: {
        assembly_completeness: number;
        assembly_contiguity: number;
        bin_quality_score: number;
        gene_prediction_accuracy: number;
        functional_annotation_coverage: number;
        comparative_analysis_consistency: number;
    };
    host_microbe_understanding: {
        interaction_characterization_depth: number;
        mechanism_elucidation_success: number;
        experimental_validation_rate: number;
        clinical_translation_potential: number;
        biomarker_discovery_efficiency: number;
        therapeutic_target_identification: number;
    };
    therapeutic_development_success: {
        therapy_efficacy_rate: number;
        safety_profile_acceptability: number;
        clinical_trial_success_rate: number;
        regulatory_approval_rate: number;
        personalization_implementation: number;
        market_adoption_rate: number;
    };
    diagnostic_performance: {
        diagnostic_accuracy: number;
        clinical_sensitivity: number;
        clinical_specificity: number;
        positive_predictive_value: number;
        negative_predictive_value: number;
        clinical_utility_demonstration: number;
    };
    technological_advancement: {
        analytical_method_innovation: number;
        automation_implementation: number;
        standardization_progress: number;
        cost_reduction_achievement: number;
        turnaround_time_improvement: number;
        accessibility_enhancement: number;
    };
    research_impact: {
        scientific_publication_impact: number;
        knowledge_generation_rate: number;
        collaboration_network_expansion: number;
        technology_transfer_success: number;
        clinical_application_rate: number;
        field_advancement_contribution: number;
    };
    clinical_integration: {
        clinical_adoption_rate: number;
        physician_acceptance: number;
        patient_compliance: number;
        healthcare_system_integration: number;
        cost_effectiveness_demonstration: number;
        outcome_improvement_evidence: number;
    };
    created_at: Date;
    updated_at: Date;
}
