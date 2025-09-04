export declare class GenomicsDataManagement {
    id: string;
    genomics_id: string;
    patient_id: string;
    test_type: string;
    sample_type: string;
    genomic_data: {
        raw_sequencing_data: any;
        variant_calling: any;
        annotation_data: any;
        quality_metrics: any;
        coverage_statistics: any;
        bioinformatics_pipeline: any;
    };
    genetic_variants: {
        pathogenic_variants: any[];
        likely_pathogenic: any[];
        variants_uncertain_significance: any[];
        benign_variants: any[];
        pharmacogenomic_variants: any[];
        carrier_status: any[];
    };
    clinical_interpretation: {
        disease_associations: any;
        drug_responses: any;
        risk_predictions: any;
        carrier_screening: any;
        ancestry_analysis: any;
        trait_associations: any;
    };
    privacy_security: {
        consent_management: any;
        data_encryption: any;
        access_controls: any;
        audit_trails: any;
        data_sharing_agreements: any;
        genetic_discrimination_protection: any;
    };
    quality_assurance: {
        laboratory_standards: any;
        validation_studies: any;
        proficiency_testing: any;
        quality_control_metrics: any;
        accreditation_status: any;
        error_tracking: any;
    };
    family_genetics: {
        family_history: any;
        pedigree_analysis: any;
        inheritance_patterns: any;
        cascade_screening: any;
        genetic_counseling: any;
        family_communication: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PrecisionMedicinePlatform {
    id: string;
    precision_id: string;
    patient_id: string;
    condition_category: string;
    precision_approach: string;
    molecular_profile: {
        genomic_alterations: any;
        protein_expression: any;
        metabolic_signatures: any;
        epigenetic_modifications: any;
        transcriptomic_data: any;
        multi_omics_integration: any;
    };
    biomarker_analysis: {
        predictive_biomarkers: any;
        prognostic_biomarkers: any;
        diagnostic_biomarkers: any;
        pharmacodynamic_biomarkers: any;
        resistance_biomarkers: any;
        companion_diagnostics: any;
    };
    treatment_recommendations: {
        targeted_therapies: any;
        personalized_dosing: any;
        combination_strategies: any;
        treatment_sequencing: any;
        monitoring_protocols: any;
        alternative_options: any;
    };
    clinical_decision_support: {
        evidence_synthesis: any;
        guideline_integration: any;
        expert_recommendations: any;
        clinical_trials_matching: any;
        outcome_predictions: any;
        risk_stratification: any;
    };
    outcome_tracking: {
        treatment_response: any;
        adverse_events: any;
        resistance_development: any;
        survival_outcomes: any;
        quality_of_life: any;
        biomarker_evolution: any;
    };
    research_integration: {
        clinical_trial_participation: any;
        data_contribution: any;
        knowledge_generation: any;
        real_world_evidence: any;
        comparative_effectiveness: any;
        population_insights: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PharmacogenomicsManagement {
    id: string;
    pharmacogenomics_id: string;
    patient_id: string;
    medication_name: string;
    drug_class: string;
    genetic_variants: {
        cyp_enzymes: any;
        drug_transporters: any;
        drug_targets: any;
        hla_alleles: any;
        other_pharmacogenes: any;
        variant_annotations: any;
    };
    drug_response_prediction: {
        efficacy_prediction: any;
        toxicity_risk: any;
        dosing_recommendations: any;
        alternative_medications: any;
        monitoring_requirements: any;
        contraindications: any;
    };
    clinical_implementation: {
        prescribing_guidance: any;
        dose_adjustments: any;
        therapeutic_monitoring: any;
        drug_interactions: any;
        patient_education: any;
        provider_alerts: any;
    };
    outcome_monitoring: {
        treatment_response: any;
        adverse_drug_reactions: any;
        dose_modifications: any;
        medication_changes: any;
        adherence_monitoring: any;
        long_term_outcomes: any;
    };
    evidence_base: {
        clinical_guidelines: any;
        drug_labels: any;
        published_studies: any;
        real_world_evidence: any;
        population_data: any;
        expert_consensus: any;
    };
    implementation_support: {
        ehr_integration: any;
        clinical_decision_support: any;
        pharmacist_consultation: any;
        genetic_counseling: any;
        patient_resources: any;
        provider_education: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MolecularDiagnosticsPlatform {
    id: string;
    diagnostic_id: string;
    patient_id: string;
    diagnostic_type: string;
    testing_methodology: string;
    test_specifications: {
        analytes_tested: any[];
        detection_methods: any;
        sensitivity_specificity: any;
        reference_ranges: any;
        quality_controls: any;
        validation_data: any;
    };
    sample_processing: {
        sample_collection: any;
        preprocessing_steps: any;
        extraction_methods: any;
        purification_procedures: any;
        quality_assessment: any;
        storage_conditions: any;
    };
    analytical_workflow: {
        instrumentation: any;
        reagent_systems: any;
        protocol_steps: any;
        automation_level: any;
        throughput_capacity: any;
        turnaround_time: any;
    };
    result_interpretation: {
        analytical_results: any;
        clinical_correlation: any;
        reference_data: any;
        interpretation_guidelines: any;
        limitations_considerations: any;
        follow_up_recommendations: any;
    };
    quality_management: {
        quality_control_results: any;
        proficiency_testing: any;
        method_validation: any;
        uncertainty_measurement: any;
        corrective_actions: any;
        continuous_improvement: any;
    };
    regulatory_compliance: {
        clia_compliance: any;
        fda_clearance: any;
        iso_standards: any;
        cap_accreditation: any;
        local_regulations: any;
        documentation_requirements: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HereditaryDiseaseManagement {
    id: string;
    hereditary_id: string;
    patient_id: string;
    condition_name: string;
    inheritance_pattern: string;
    genetic_basis: {
        causative_genes: any[];
        pathogenic_variants: any;
        mutation_types: any;
        penetrance_data: any;
        expressivity_patterns: any;
        genotype_phenotype: any;
    };
    clinical_manifestations: {
        phenotypic_features: any;
        age_of_onset: any;
        disease_progression: any;
        severity_spectrum: any;
        associated_conditions: any;
        differential_diagnosis: any;
    };
    risk_assessment: {
        disease_risk_calculation: any;
        age_related_penetrance: any;
        modifier_factors: any;
        environmental_influences: any;
        lifestyle_factors: any;
        preventive_measures: any;
    };
    family_screening: {
        at_risk_relatives: any;
        cascade_testing: any;
        preconception_counseling: any;
        prenatal_testing: any;
        newborn_screening: any;
        family_communication: any;
    };
    management_plan: {
        surveillance_protocols: any;
        preventive_interventions: any;
        treatment_options: any;
        lifestyle_modifications: any;
        specialist_referrals: any;
        psychosocial_support: any;
    };
    genetic_counseling: {
        pre_test_counseling: any;
        post_test_counseling: any;
        risk_communication: any;
        reproductive_counseling: any;
        family_planning: any;
        psychological_support: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareGenomicsQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    testing_performance: {
        analytical_accuracy: number;
        test_sensitivity: number;
        test_specificity: number;
        reproducibility_rate: number;
        turnaround_time_compliance: number;
        quality_control_pass_rate: number;
    };
    clinical_impact: {
        diagnostic_yield: number;
        treatment_modification_rate: number;
        patient_outcome_improvement: number;
        adverse_event_prevention: number;
        healthcare_cost_reduction: number;
        clinical_utility_score: number;
    };
    precision_medicine_adoption: {
        genomic_testing_utilization: number;
        pharmacogenomic_implementation: number;
        personalized_therapy_rate: number;
        biomarker_guided_treatment: number;
        clinical_trial_matching: number;
        precision_medicine_outcomes: number;
    };
    data_quality: {
        genomic_data_completeness: number;
        annotation_accuracy: number;
        variant_classification_consistency: number;
        database_integration_success: number;
        data_sharing_compliance: number;
        privacy_protection_score: number;
    };
    patient_engagement: {
        genetic_counseling_utilization: number;
        patient_education_effectiveness: number;
        informed_consent_quality: number;
        family_screening_participation: number;
        result_communication_satisfaction: number;
        genetic_literacy_improvement: number;
    };
    healthcare_integration: {
        ehr_integration_success: number;
        clinical_workflow_efficiency: number;
        provider_adoption_rate: number;
        decision_support_utilization: number;
        interdisciplinary_collaboration: number;
        knowledge_translation_rate: number;
    };
    innovation_advancement: {
        research_contribution_rate: number;
        technology_adoption_speed: number;
        biomarker_discovery_rate: number;
        therapeutic_development: number;
        knowledge_generation: number;
        scientific_publication_impact: number;
    };
    equity_access: {
        population_diversity: number;
        health_disparity_reduction: number;
        access_to_testing: number;
        insurance_coverage_rate: number;
        geographic_accessibility: number;
        socioeconomic_inclusion: number;
    };
    created_at: Date;
    updated_at: Date;
}
