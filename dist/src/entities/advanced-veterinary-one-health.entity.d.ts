export declare class VeterinaryPatientRecords {
    id: string;
    animal_id: string;
    animal_name: string;
    species: string;
    breed: string;
    animal_category: string;
    demographic_information: {
        age: any;
        sex: string;
        reproductive_status: string;
        weight: number;
        body_condition_score: number;
        identification_methods: any;
    };
    owner_information: {
        owner_details: any;
        contact_information: any;
        ownership_type: string;
        care_agreements: any;
        insurance_information: any;
        emergency_contacts: any;
    };
    medical_history: {
        previous_conditions: any[];
        surgical_history: any[];
        vaccination_records: any[];
        medication_history: any[];
        allergies_sensitivities: any[];
        genetic_information: any;
    };
    current_health_status: {
        vital_signs: any;
        physical_examination: any;
        laboratory_results: any;
        diagnostic_imaging: any;
        behavioral_assessment: any;
        nutritional_status: any;
    };
    treatment_plans: {
        current_medications: any[];
        therapeutic_interventions: any[];
        dietary_recommendations: any;
        exercise_protocols: any;
        monitoring_schedules: any;
        follow_up_care: any;
    };
    one_health_considerations: {
        zoonotic_risk_assessment: any;
        public_health_implications: any;
        environmental_factors: any;
        human_animal_bond: any;
        occupational_health: any;
        food_safety_concerns: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ZoonoticDiseaseSurveillance {
    id: string;
    surveillance_id: string;
    disease_name: string;
    surveillance_type: string;
    geographic_scope: string;
    pathogen_information: {
        pathogen_type: string;
        pathogen_identification: any;
        transmission_mechanisms: any;
        host_range: any;
        environmental_persistence: any;
        genetic_characterization: any;
    };
    animal_surveillance: {
        target_species: any[];
        surveillance_methods: any;
        sampling_protocols: any;
        laboratory_testing: any;
        case_definitions: any;
        reporting_systems: any;
    };
    human_surveillance: {
        case_surveillance: any;
        occupational_health: any;
        healthcare_provider_network: any;
        laboratory_networks: any;
        contact_tracing: any;
        outbreak_investigation: any;
    };
    environmental_monitoring: {
        environmental_sampling: any;
        vector_surveillance: any;
        water_quality_monitoring: any;
        food_chain_monitoring: any;
        wildlife_monitoring: any;
        ecosystem_health: any;
    };
    risk_assessment: {
        transmission_risk: any;
        exposure_pathways: any;
    };
    intervention_strategies: {
        prevention_measures: any;
        control_strategies: any;
        vaccination_programs: any;
        vector_control: any;
        biosecurity_measures: any;
        public_health_response: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ComparativeMedicineResearch {
    id: string;
    research_id: string;
    study_title: string;
    research_type: string;
    comparative_model: string;
    species_comparison: {
        primary_species: string;
        comparative_species: any[];
        species_selection_rationale: any;
        phylogenetic_considerations: any;
        physiological_similarities: any;
        genetic_homology: any;
    };
    disease_models: {
        disease_condition: string;
        model_characteristics: any;
        pathophysiology_comparison: any;
        clinical_presentation: any;
        progression_patterns: any;
        biomarker_correlation: any;
    };
    therapeutic_research: {
        drug_development: any;
        treatment_protocols: any;
        efficacy_assessment: any;
        safety_evaluation: any;
        dosing_strategies: any;
        translational_potential: any;
    };
    diagnostic_research: {
        diagnostic_methods: any;
        biomarker_discovery: any;
        imaging_techniques: any;
        laboratory_tests: any;
        point_of_care_testing: any;
        diagnostic_validation: any;
    };
    ethical_considerations: {
        animal_welfare: any;
        research_ethics: any;
        replacement_alternatives: any;
        reduction_strategies: any;
        refinement_methods: any;
        regulatory_compliance: any;
    };
    translational_outcomes: {
        human_health_applications: any;
        veterinary_applications: any;
        clinical_trial_initiation: any;
        therapeutic_development: any;
        diagnostic_advancement: any;
        policy_implications: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class OneHealthIntegration {
    id: string;
    integration_id: string;
    initiative_name: string;
    integration_scope: string;
    health_domain: string;
    stakeholder_network: {
        human_health_sector: any[];
        animal_health_sector: any[];
        environmental_sector: any[];
        academic_institutions: any[];
        government_agencies: any[];
        international_organizations: any[];
    };
    collaborative_frameworks: {
        governance_structure: any;
        coordination_mechanisms: any;
        communication_protocols: any;
        resource_sharing: any;
        joint_planning: any;
        conflict_resolution: any;
    };
    surveillance_integration: {
        cross_sector_surveillance: any;
        data_sharing_protocols: any;
        integrated_reporting: any;
        early_warning_systems: any;
        outbreak_response: any;
        information_systems: any;
    };
    research_collaboration: {
        interdisciplinary_research: any;
        shared_research_priorities: any;
        joint_funding_mechanisms: any;
        collaborative_studies: any;
        knowledge_synthesis: any;
        capacity_building: any;
    };
    policy_coordination: {
        policy_alignment: any;
        regulatory_harmonization: any;
        standard_development: any;
        legislation_coordination: any;
        international_agreements: any;
        implementation_strategies: any;
    };
    capacity_development: {
        workforce_development: any;
        training_programs: any;
        educational_curricula: any;
        professional_development: any;
        technology_transfer: any;
        infrastructure_development: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class WildlifeHealthMonitoring {
    id: string;
    monitoring_id: string;
    species_name: string;
    conservation_status: string;
    habitat_type: string;
    population_health: {
        population_dynamics: any;
        demographic_parameters: any;
        genetic_diversity: any;
        reproductive_health: any;
        mortality_factors: any;
        health_indicators: any;
    };
    disease_surveillance: {
        pathogen_screening: any;
        disease_prevalence: any;
        emerging_diseases: any;
        mortality_events: any;
        health_assessments: any;
        diagnostic_testing: any;
    };
    environmental_health: {
        habitat_quality: any;
        pollution_exposure: any;
        climate_impacts: any;
        human_wildlife_interface: any;
        ecosystem_health: any;
        environmental_stressors: any;
    };
    monitoring_methods: {
        field_surveys: any;
        telemetry_tracking: any;
        remote_sensing: any;
        biological_sampling: any;
        citizen_science: any;
        technological_tools: any;
    };
    conservation_medicine: {
        health_interventions: any;
        rehabilitation_programs: any;
        captive_breeding: any;
        translocation_health: any;
        veterinary_care: any;
        research_applications: any;
    };
    data_management: {
        data_collection_protocols: any;
        database_systems: any;
        data_sharing: any;
        spatial_analysis: any;
        modeling_approaches: any;
        reporting_systems: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class VeterinaryOneHealthQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    veterinary_care_quality: {
        treatment_success_rate: number;
        diagnostic_accuracy: number;
        client_satisfaction_score: number;
        animal_welfare_score: number;
        clinical_outcome_improvement: number;
        professional_competency_level: number;
    };
    zoonotic_disease_control: {
        surveillance_effectiveness: number;
        outbreak_detection_rate: number;
        response_time_efficiency: number;
        transmission_prevention_success: number;
        public_health_protection: number;
        international_reporting_compliance: number;
    };
    comparative_research_impact: {
        translational_success_rate: number;
        research_publication_impact: number;
        clinical_trial_initiation: number;
        therapeutic_development: number;
        animal_model_validity: number;
        ethical_compliance_score: number;
    };
    one_health_collaboration: {
        cross_sector_coordination: number;
        stakeholder_engagement_level: number;
        information_sharing_effectiveness: number;
        joint_initiative_success: number;
        policy_alignment_achievement: number;
        capacity_building_effectiveness: number;
    };
    wildlife_conservation_impact: {
        population_health_improvement: number;
        conservation_success_rate: number;
        ecosystem_health_enhancement: number;
        species_recovery_contribution: number;
        habitat_protection_effectiveness: number;
        biodiversity_preservation: number;
    };
    antimicrobial_stewardship: {
        appropriate_use_rate: number;
        resistance_pattern_monitoring: number;
        stewardship_program_effectiveness: number;
        education_impact_score: number;
        policy_implementation_success: number;
        resistance_reduction_achievement: number;
    };
    food_safety_assurance: {
        farm_to_fork_monitoring: number;
        foodborne_illness_prevention: number;
        inspection_effectiveness: number;
        compliance_rate: number;
        consumer_protection_level: number;
        supply_chain_integrity: number;
    };
    environmental_health_protection: {
        pollution_impact_mitigation: number;
        ecosystem_service_preservation: number;
        climate_adaptation_effectiveness: number;
        sustainable_practice_adoption: number;
        environmental_monitoring_quality: number;
        conservation_policy_effectiveness: number;
    };
    created_at: Date;
    updated_at: Date;
}
