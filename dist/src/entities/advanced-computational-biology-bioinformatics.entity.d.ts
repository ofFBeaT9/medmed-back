export declare class SequenceAnalysisPipelines {
    id: string;
    pipeline_id: string;
    pipeline_name: string;
    sequence_type: string;
    analysis_category: string;
    input_specifications: {
        data_formats: any[];
        quality_requirements: any;
        preprocessing_steps: any;
        validation_criteria: any;
        metadata_requirements: any;
        computational_resources: any;
    };
    processing_workflow: {
        workflow_steps: any[];
        tool_dependencies: any;
        parameter_settings: any;
        quality_control_checkpoints: any;
        error_handling: any;
        parallel_processing: any;
    };
    alignment_analysis: {
        reference_genomes: any[];
        alignment_algorithms: any;
        mapping_parameters: any;
        post_alignment_processing: any;
        coverage_analysis: any;
        variant_detection: any;
    };
    variant_calling: {
        variant_callers: any[];
        filtering_criteria: any;
        annotation_databases: any;
        functional_prediction: any;
        population_frequency: any;
        clinical_significance: any;
    };
    functional_annotation: {
        gene_prediction: any;
        functional_domains: any;
        pathway_mapping: any;
        ontology_annotation: any;
        comparative_analysis: any;
        literature_mining: any;
    };
    output_generation: {
        result_formats: any[];
        visualization_tools: any;
        summary_statistics: any;
        quality_reports: any;
        data_integration: any;
        downstream_analysis: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class StructuralBiologyModeling {
    id: string;
    modeling_id: string;
    protein_name: string;
    modeling_approach: string;
    structure_type: string;
    sequence_analysis: {
        primary_sequence: string;
        sequence_features: any;
        domain_architecture: any;
        secondary_structure_prediction: any;
        disorder_prediction: any;
        signal_peptides: any;
    };
    template_identification: {
        template_search: any;
        sequence_alignment: any;
        structure_alignment: any;
        template_selection: any;
        coverage_analysis: any;
        confidence_assessment: any;
    };
    model_building: {
        modeling_software: any;
        loop_modeling: any;
        side_chain_modeling: any;
        refinement_protocols: any;
        energy_minimization: any;
        validation_metrics: any;
    };
    molecular_dynamics: {
        simulation_parameters: any;
        force_field_selection: any;
        solvent_models: any;
        trajectory_analysis: any;
        conformational_sampling: any;
        free_energy_calculations: any;
    };
    structure_validation: {
        stereochemical_quality: any;
        ramachandran_analysis: any;
        clash_detection: any;
        energy_evaluation: any;
        experimental_validation: any;
        comparative_assessment: any;
    };
    functional_analysis: {
        binding_site_prediction: any;
        drug_target_analysis: any;
        protein_interactions: any;
        allosteric_analysis: any;
        mutation_effects: any;
        evolutionary_conservation: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PhylogeneticAnalysis {
    id: string;
    analysis_id: string;
    study_name: string;
    analysis_type: string;
    data_type: string;
    sequence_dataset: {
        sequence_collection: any[];
        taxonomy_information: any;
        outgroup_selection: any;
        data_quality_assessment: any;
        alignment_method: any;
        alignment_quality: any;
    };
    evolutionary_models: {
        substitution_models: any;
        model_selection: any;
        rate_heterogeneity: any;
        partition_schemes: any;
        molecular_clock: any;
        calibration_points: any;
    };
    tree_reconstruction: {
        reconstruction_methods: any[];
        search_strategies: any;
        bootstrap_analysis: any;
        consensus_methods: any;
        tree_comparison: any;
        uncertainty_assessment: any;
    };
    divergence_dating: {
        dating_methods: any;
        fossil_calibrations: any;
        rate_calibrations: any;
        prior_distributions: any;
        mcmc_analysis: any;
        credibility_intervals: any;
    };
    ancestral_reconstruction: {
        character_reconstruction: any;
        sequence_reconstruction: any;
        biogeographic_analysis: any;
        trait_evolution: any;
        ecological_analysis: any;
        functional_evolution: any;
    };
    comparative_analysis: {
        gene_tree_species_tree: any;
        horizontal_gene_transfer: any;
        gene_duplication_loss: any;
        recombination_detection: any;
        selection_analysis: any;
        coevolution_analysis: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ComparativeGenomicsPlatforms {
    id: string;
    platform_id: string;
    comparison_study: string;
    comparison_scope: string;
    taxonomic_range: string;
    genome_datasets: {
        reference_genomes: any[];
        assembly_quality: any;
        annotation_completeness: any;
        gene_predictions: any;
        functional_annotations: any;
        comparative_metrics: any;
    };
    synteny_analysis: {
        synteny_detection: any;
        collinearity_assessment: any;
        rearrangement_analysis: any;
        breakpoint_identification: any;
        evolutionary_scenarios: any;
        visualization_tools: any;
    };
    orthology_analysis: {
        ortholog_identification: any;
        paralog_analysis: any;
        gene_family_evolution: any;
        functional_conservation: any;
        gene_loss_gain: any;
        orthology_databases: any;
    };
    regulatory_comparison: {
        promoter_analysis: any;
        enhancer_identification: any;
        transcription_factor_binding: any;
        regulatory_networks: any;
        expression_conservation: any;
        regulatory_evolution: any;
    };
    structural_variation: {
        cnv_analysis: any;
        inversion_detection: any;
        translocation_analysis: any;
        repeat_element_analysis: any;
        mobile_element_evolution: any;
        genome_plasticity: any;
    };
    functional_analysis: {
        pathway_conservation: any;
        metabolic_network_comparison: any;
        phenotype_associations: any;
        adaptive_evolution: any;
        positive_selection: any;
        functional_divergence: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class AlgorithmDevelopmentFrameworks {
    id: string;
    framework_id: string;
    algorithm_name: string;
    algorithm_category: string;
    biological_application: string;
    algorithm_specification: {
        problem_definition: any;
        input_requirements: any;
        output_specifications: any;
        computational_complexity: any;
        scalability_requirements: any;
        accuracy_requirements: any;
    };
    implementation_details: {
        programming_languages: any[];
        software_dependencies: any;
        data_structures: any;
        optimization_techniques: any;
        parallel_processing: any;
        memory_management: any;
    };
    validation_framework: {
        test_datasets: any[];
        benchmark_comparisons: any;
        performance_metrics: any;
        cross_validation: any;
        robustness_testing: any;
        edge_case_handling: any;
    };
    optimization_strategies: {
        parameter_tuning: any;
        algorithmic_improvements: any;
        computational_optimization: any;
        approximation_algorithms: any;
        heuristic_methods: any;
        hybrid_approaches: any;
    };
    integration_capabilities: {
        api_development: any;
        workflow_integration: any;
        database_connectivity: any;
        visualization_interfaces: any;
        cloud_deployment: any;
        containerization: any;
    };
    documentation_resources: {
        algorithm_documentation: any;
        user_manuals: any;
        tutorial_materials: any;
        code_examples: any;
        troubleshooting_guides: any;
        community_support: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ComputationalBiologyBioinformaticsQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    sequence_analysis_performance: {
        pipeline_success_rate: number;
        analysis_accuracy: number;
        computational_efficiency: number;
        data_quality_score: number;
        annotation_completeness: number;
        variant_calling_precision: number;
    };
    structural_modeling_quality: {
        model_accuracy: number;
        validation_score: number;
        functional_relevance: number;
        computational_efficiency: number;
        experimental_validation_rate: number;
        drug_discovery_applicability: number;
    };
    phylogenetic_analysis_reliability: {
        tree_reconstruction_accuracy: number;
        bootstrap_support: number;
        model_appropriateness: number;
        dating_precision: number;
        comparative_consistency: number;
        biological_interpretability: number;
    };
    comparative_genomics_effectiveness: {
        synteny_detection_accuracy: number;
        orthology_assignment_quality: number;
        functional_conservation_assessment: number;
        evolutionary_insight_generation: number;
        cross_species_validation: number;
        annotation_transfer_success: number;
    };
    algorithm_development_innovation: {
        algorithm_novelty: number;
        performance_improvement: number;
        computational_efficiency_gain: number;
        biological_relevance: number;
        adoption_rate: number;
        community_impact: number;
    };
    computational_infrastructure: {
        system_uptime: number;
        computational_resource_utilization: number;
        data_storage_efficiency: number;
        workflow_automation_level: number;
        scalability_achievement: number;
        cost_effectiveness: number;
    };
    research_productivity: {
        publication_impact: number;
        tool_development_rate: number;
        collaboration_network_growth: number;
        data_sharing_contribution: number;
        open_source_development: number;
        training_program_effectiveness: number;
    };
    clinical_translation: {
        clinical_application_rate: number;
        diagnostic_tool_development: number;
        therapeutic_target_identification: number;
        personalized_medicine_contribution: number;
        biomarker_discovery_success: number;
        regulatory_approval_support: number;
    };
    created_at: Date;
    updated_at: Date;
}
