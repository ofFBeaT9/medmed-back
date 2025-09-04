export declare class CarTCellTherapy {
    id: string;
    therapy_id: string;
    patient_id: string;
    car_t_product: string;
    target_antigen: string;
    car_design: {
        antigen_binding_domain: any;
        hinge_region: any;
        transmembrane_domain: any;
        costimulatory_domains: any[];
        signaling_domain: any;
        safety_switches: any;
    };
    manufacturing_process: {
        t_cell_collection: any;
        activation_protocol: any;
        transduction_method: any;
        expansion_culture: any;
        harvest_formulation: any;
        quality_control: any;
    };
    preconditioning_regimen: {
        lymphodepletion_protocol: any;
        chemotherapy_agents: any[];
        dosing_schedule: any;
        timing_optimization: any;
        supportive_care: any;
        monitoring_parameters: any;
    };
    infusion_protocol: {
        cell_dose: any;
        infusion_schedule: any;
        premedication: any;
        monitoring_requirements: any;
        emergency_procedures: any;
        post_infusion_care: any;
    };
    safety_monitoring: {
        cytokine_release_syndrome: any;
        immune_effector_cell_neurotoxicity: any;
        tumor_lysis_syndrome: any;
        cytopenias: any;
        infections: any;
        long_term_effects: any;
    };
    efficacy_assessment: {
        response_criteria: any;
        biomarker_monitoring: any;
        car_t_persistence: any;
        tumor_burden_assessment: any;
        minimal_residual_disease: any;
        survival_endpoints: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class CheckpointInhibitorTherapy {
    id: string;
    therapy_id: string;
    patient_id: string;
    inhibitor_name: string;
    target_checkpoint: string;
    patient_selection: {
        biomarker_testing: any;
        pd_l1_expression: any;
        microsatellite_instability: any;
        tumor_mutational_burden: any;
        immune_infiltration: any;
        prior_treatments: any;
    };
    treatment_protocol: {
        dosing_regimen: any;
        administration_schedule: any;
        combination_therapy: any;
        treatment_duration: any;
        dose_modifications: any;
        cycle_management: any;
    };
    immune_monitoring: {
        peripheral_immune_cells: any;
        cytokine_profiles: any;
        antibody_responses: any;
        t_cell_receptor_diversity: any;
        immune_gene_signatures: any;
        tumor_microenvironment: any;
    };
    adverse_event_management: {
        immune_related_aes: any;
        endocrine_toxicities: any;
        gastrointestinal_toxicities: any;
        hepatic_toxicities: any;
        pulmonary_toxicities: any;
        dermatologic_toxicities: any;
    };
    response_assessment: {
        immune_response_criteria: any;
        pseudoprogression: any;
        delayed_responses: any;
        biomarker_correlations: any;
        resistance_mechanisms: any;
        combination_strategies: any;
    };
    resistance_monitoring: {
        adaptive_resistance: any;
        immune_exhaustion: any;
        tumor_evolution: any;
        microenvironment_changes: any;
        combination_resistance: any;
        salvage_strategies: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class CancerVaccineDevelopment {
    id: string;
    vaccine_id: string;
    vaccine_name: string;
    vaccine_type: string;
    cancer_indication: string;
    antigen_selection: {
        tumor_associated_antigens: any[];
        neoantigens: any[];
        antigen_processing: any;
        hla_binding_prediction: any;
        immunogenicity_assessment: any;
        cross_reactivity_evaluation: any;
    };
    vaccine_formulation: {
        antigen_preparation: any;
        adjuvant_selection: any;
        delivery_system: any;
        stability_optimization: any;
        manufacturing_process: any;
        quality_control: any;
    };
    immunization_protocol: {
        prime_boost_strategy: any;
        dosing_schedule: any;
        administration_route: any;
        combination_therapy: any;
        booster_schedules: any;
        personalization_strategies: any;
    };
    immune_response_monitoring: {
        antibody_responses: any;
        t_cell_responses: any;
        cytokine_production: any;
        immune_memory: any;
        cross_reactive_immunity: any;
        immunological_correlates: any;
    };
    clinical_development: {
        preclinical_studies: any;
        phase_1_studies: any;
        phase_2_studies: any;
        phase_3_studies: any;
        regulatory_pathway: any;
        commercialization: any;
    };
    personalization_approaches: {
        patient_specific_antigens: any;
        hla_typing: any;
        tumor_sequencing: any;
        immune_profiling: any;
        biomarker_guided: any;
        adaptive_design: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class AdoptiveCellTransfer {
    id: string;
    transfer_id: string;
    patient_id: string;
    cell_type: string;
    treatment_indication: string;
    cell_isolation: {
        source_tissue: any;
        isolation_method: any;
        cell_sorting: any;
        purity_assessment: any;
        viability_testing: any;
        functional_validation: any;
    };
    ex_vivo_expansion: {
        culture_conditions: any;
        growth_factors: any;
        stimulation_protocols: any;
        expansion_kinetics: any;
        phenotype_monitoring: any;
        quality_control: any;
    };
    genetic_modification: {
        modification_strategy: any;
        vector_systems: any;
        transgene_expression: any;
        safety_features: any;
        functional_enhancement: any;
        stability_assessment: any;
    };
    conditioning_regimen: {
        lymphodepletion: any;
        immunosuppression: any;
        cytokine_modulation: any;
        microenvironment_modification: any;
        timing_optimization: any;
        supportive_care: any;
    };
    cell_infusion: {
        cell_dose_calculation: any;
        infusion_protocol: any;
        monitoring_parameters: any;
        safety_measures: any;
        supportive_medications: any;
        post_infusion_care: any;
    };
    outcome_assessment: {
        engraftment_monitoring: any;
        persistence_evaluation: any;
        functional_assessment: any;
        tumor_response: any;
        survival_analysis: any;
        quality_of_life: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ImmuneMonitoringSystems {
    id: string;
    monitoring_id: string;
    patient_id: string;
    monitoring_type: string;
    treatment_context: string;
    cellular_immune_monitoring: {
        flow_cytometry_panels: any[];
        t_cell_subsets: any;
        b_cell_populations: any;
        nk_cell_analysis: any;
        dendritic_cells: any;
        myeloid_populations: any;
    };
    functional_assays: {
        cytokine_production: any;
        proliferation_assays: any;
        cytotoxicity_testing: any;
        antigen_specific_responses: any;
        immune_memory: any;
        exhaustion_markers: any;
    };
    molecular_profiling: {
        gene_expression: any;
        immune_signatures: any;
        tcr_sequencing: any;
        bcr_repertoire: any;
        epigenetic_analysis: any;
        proteomics: any;
    };
    biomarker_analysis: {
        soluble_factors: any;
        circulating_tumor_cells: any;
        ctdna_analysis: any;
        exosome_profiling: any;
        metabolomics: any;
        microbiome_analysis: any;
    };
    tissue_analysis: {
        tumor_infiltrating_lymphocytes: any;
        immune_architecture: any;
        checkpoint_expression: any;
        antigen_presentation: any;
        immunosuppressive_factors: any;
        spatial_analysis: any;
    };
    data_integration: {
        multi_omics_integration: any;
        machine_learning_analysis: any;
        predictive_modeling: any;
        biomarker_discovery: any;
        response_prediction: any;
        resistance_mechanisms: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ImmunotherapyQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    treatment_efficacy: {
        overall_response_rate: number;
        complete_response_rate: number;
        progression_free_survival: number;
        overall_survival: number;
        durable_response_rate: number;
        quality_of_life_improvement: number;
    };
    car_t_therapy_performance: {
        manufacturing_success_rate: number;
        infusion_success_rate: number;
        expansion_efficiency: number;
        persistence_duration: number;
        safety_profile_score: number;
        cost_effectiveness: number;
    };
    checkpoint_inhibitor_outcomes: {
        immune_activation_rate: number;
        biomarker_response_correlation: number;
        immune_related_ae_management: number;
        long_term_benefit_rate: number;
        combination_therapy_success: number;
        resistance_overcome_rate: number;
    };
    vaccine_immunogenicity: {
        immune_response_induction: number;
        antigen_specific_immunity: number;
        memory_response_formation: number;
        cross_reactive_immunity: number;
        clinical_benefit_correlation: number;
        safety_profile_score: number;
    };
    safety_profile: {
        grade_3_4_ae_rate: number;
        treatment_related_mortality: number;
        immune_related_ae_rate: number;
        cytokine_release_syndrome_rate: number;
        neurotoxicity_rate: number;
        infection_rate: number;
    };
    immune_monitoring_quality: {
        assay_standardization: number;
        data_reproducibility: number;
        biomarker_validation: number;
        predictive_accuracy: number;
        clinical_correlation: number;
        real_time_monitoring_capability: number;
    };
    personalization_success: {
        biomarker_guided_selection: number;
        personalized_treatment_efficacy: number;
        precision_dosing_success: number;
        adaptive_treatment_optimization: number;
        patient_stratification_accuracy: number;
        individualized_monitoring_effectiveness: number;
    };
    innovation_advancement: {
        novel_target_development: number;
        combination_strategy_success: number;
        resistance_mechanism_understanding: number;
        next_generation_therapy_development: number;
        biomarker_discovery_rate: number;
        clinical_translation_efficiency: number;
    };
    created_at: Date;
    updated_at: Date;
}
