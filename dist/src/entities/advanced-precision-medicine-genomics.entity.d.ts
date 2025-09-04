export declare class GenomicSequencingData {
    id: string;
    sequencing_id: string;
    patient_id: string;
    sequencing_type: string;
    sequencing_platform: string;
    sample_information: {
        sample_type: string;
        collection_date: Date;
        processing_protocols: any;
        quality_metrics: any;
        storage_conditions: any;
        chain_of_custody: any;
    };
    sequencing_parameters: {
        coverage_depth: number;
        read_length: number;
        library_preparation: any;
        sequencing_chemistry: any;
        quality_scores: any;
        technical_specifications: any;
    };
    variant_analysis: {
        variant_calling: any;
        annotation_databases: any[];
        pathogenicity_prediction: any;
        population_frequencies: any;
        clinical_significance: any;
        structural_variants: any;
    };
    genomic_features: {
        single_nucleotide_variants: any;
        copy_number_variations: any;
        structural_variations: any;
        repeat_expansions: any;
        mitochondrial_variants: any;
        pharmacogenomic_markers: any;
    };
    data_quality: {
        sequencing_metrics: any;
        contamination_assessment: any;
        coverage_uniformity: any;
        variant_quality_scores: any;
        technical_artifacts: any;
        validation_results: any;
    };
    privacy_security: {
        data_encryption: any;
        access_controls: any;
        audit_logging: any;
        consent_management: any;
        data_sharing_agreements: any;
        anonymization_methods: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PharmacogenomicProfiles {
    id: string;
    profile_id: string;
    patient_id: string;
    analysis_type: string;
    clinical_context: string;
    drug_metabolizing_enzymes: {
        cyp2d6_genotype: any;
        cyp2c19_genotype: any;
        cyp2c9_genotype: any;
        cyp3a4_genotype: any;
        other_cyp_enzymes: any;
        phase_ii_enzymes: any;
    };
    drug_transporters: {
        slco1b1_genotype: any;
        abcb1_genotype: any;
        slc22a1_genotype: any;
        other_transporters: any;
        transporter_function: any;
        clinical_implications: any;
    };
    drug_targets: {
        receptor_variants: any;
        enzyme_variants: any;
        channel_variants: any;
        target_expression: any;
        pathway_variants: any;
        therapeutic_targets: any;
    };
    pharmacokinetic_predictions: {
        drug_metabolism_rate: any;
        clearance_predictions: any;
        bioavailability_factors: any;
        half_life_estimates: any;
        dose_adjustments: any;
        drug_interactions: any;
    };
    therapeutic_recommendations: {
        drug_selection: any;
        dosing_guidelines: any;
        monitoring_recommendations: any;
        alternative_therapies: any;
        contraindications: any;
        precautions: any;
    };
    clinical_decision_support: {
        alert_systems: any;
        prescribing_guidance: any;
        drug_interaction_warnings: any;
        monitoring_protocols: any;
        outcome_predictions: any;
        evidence_summaries: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PersonalizedTreatmentProtocols {
    id: string;
    protocol_id: string;
    patient_id: string;
    condition_diagnosis: string;
    treatment_approach: string;
    molecular_profiling: {
        genomic_alterations: any;
        expression_profiles: any;
        protein_markers: any;
        metabolomic_data: any;
        epigenetic_modifications: any;
        microbiome_analysis: any;
    };
    risk_stratification: {
        genetic_risk_factors: any;
        clinical_risk_factors: any;
        environmental_factors: any;
        lifestyle_factors: any;
        family_history: any;
        predictive_models: any;
    };
    treatment_selection: {
        therapeutic_targets: any;
        drug_selection_criteria: any;
        combination_strategies: any;
        sequence_optimization: any;
        resistance_mechanisms: any;
        alternative_approaches: any;
    };
    dosing_optimization: {
        pharmacokinetic_modeling: any;
        pharmacodynamic_relationships: any;
        dose_response_curves: any;
        individual_variability: any;
        adaptive_dosing: any;
        monitoring_parameters: any;
    };
    response_monitoring: {
        biomarker_tracking: any;
        imaging_protocols: any;
        clinical_assessments: any;
        patient_reported_outcomes: any;
        adverse_event_monitoring: any;
        real_world_evidence: any;
    };
    adaptive_management: {
        response_assessment: any;
        protocol_modifications: any;
        resistance_monitoring: any;
        salvage_therapies: any;
        supportive_care: any;
        quality_of_life: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class BiomarkerDiscoveryPlatform {
    id: string;
    discovery_id: string;
    study_name: string;
    biomarker_type: string;
    discovery_phase: string;
    omics_integration: {
        genomics_data: any;
        transcriptomics_data: any;
        proteomics_data: any;
        metabolomics_data: any;
        epigenomics_data: any;
        microbiomics_data: any;
    };
    analytical_methods: {
        machine_learning_algorithms: any;
        statistical_methods: any;
        pathway_analysis: any;
        network_analysis: any;
        feature_selection: any;
        validation_approaches: any;
    };
    biomarker_candidates: {
        molecular_signatures: any;
        protein_panels: any;
        genetic_variants: any;
        metabolite_profiles: any;
        microbial_signatures: any;
        composite_scores: any;
    };
    validation_studies: {
        discovery_cohorts: any;
        validation_cohorts: any;
        cross_validation: any;
        external_validation: any;
        prospective_studies: any;
        meta_analyses: any;
    };
    clinical_utility: {
        sensitivity_specificity: any;
        positive_negative_predictive_value: any;
        area_under_curve: any;
        clinical_impact: any;
        cost_effectiveness: any;
        implementation_feasibility: any;
    };
    regulatory_pathway: {
        qualification_strategy: any;
        regulatory_submissions: any;
        companion_diagnostics: any;
        clinical_trial_applications: any;
        post_market_surveillance: any;
        international_harmonization: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MolecularDiagnosticSystems {
    id: string;
    system_id: string;
    diagnostic_name: string;
    technology_platform: string;
    clinical_application: string;
    assay_configuration: {
        target_sequences: any;
        primer_probe_design: any;
        amplification_protocols: any;
        detection_methods: any;
        internal_controls: any;
        quality_controls: any;
    };
    analytical_performance: {
        analytical_sensitivity: number;
        analytical_specificity: number;
        limit_of_detection: number;
        linear_range: any;
        precision_accuracy: any;
        robustness_stability: any;
    };
    clinical_validation: {
        clinical_sensitivity: number;
        clinical_specificity: number;
        positive_predictive_value: number;
        negative_predictive_value: number;
        clinical_trials: any;
        real_world_performance: any;
    };
    laboratory_workflow: {
        sample_processing: any;
        automation_integration: any;
        throughput_capacity: any;
        turnaround_time: any;
        quality_assurance: any;
        result_interpretation: any;
    };
    data_management: {
        result_reporting: any;
        data_storage: any;
        integration_systems: any;
        decision_support: any;
        audit_trails: any;
        privacy_protection: any;
    };
    regulatory_compliance: {
        fda_clearance: any;
        ce_marking: any;
        clia_complexity: any;
        quality_standards: any;
        proficiency_testing: any;
        post_market_monitoring: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PrecisionMedicineQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    genomic_testing_performance: {
        sequencing_success_rate: number;
        data_quality_score: number;
        variant_detection_accuracy: number;
        annotation_completeness: number;
        turnaround_time_efficiency: number;
        cost_effectiveness_ratio: number;
    };
    pharmacogenomic_impact: {
        dosing_optimization_success: number;
        adverse_event_reduction: number;
        therapeutic_response_improvement: number;
        drug_selection_accuracy: number;
        clinical_decision_support_utilization: number;
        prescriber_adoption_rate: number;
    };
    personalized_treatment_outcomes: {
        treatment_response_rate: number;
        progression_free_survival: number;
        overall_survival_improvement: number;
        quality_of_life_enhancement: number;
        toxicity_reduction: number;
        treatment_adherence_improvement: number;
    };
    biomarker_clinical_utility: {
        diagnostic_accuracy: number;
        prognostic_value: number;
        predictive_performance: number;
        clinical_implementation_rate: number;
        healthcare_decision_impact: number;
        patient_management_improvement: number;
    };
    molecular_diagnostic_quality: {
        analytical_performance_score: number;
        clinical_validation_strength: number;
        laboratory_workflow_efficiency: number;
        result_reliability: number;
        regulatory_compliance_rate: number;
        proficiency_testing_performance: number;
    };
    data_integration_effectiveness: {
        multi_omics_integration_success: number;
        clinical_data_correlation: number;
        decision_support_accuracy: number;
        workflow_integration_efficiency: number;
        data_quality_assurance: number;
        interoperability_achievement: number;
    };
    patient_outcomes: {
        clinical_outcome_improvement: number;
        patient_satisfaction_score: number;
        treatment_personalization_success: number;
        healthcare_utilization_optimization: number;
        cost_of_care_reduction: number;
        patient_engagement_enhancement: number;
    };
    innovation_advancement: {
        biomarker_discovery_rate: number;
        therapeutic_target_identification: number;
        clinical_trial_enhancement: number;
        drug_development_acceleration: number;
        precision_medicine_adoption: number;
        research_translation_success: number;
    };
    created_at: Date;
    updated_at: Date;
}
