export declare class AstronautHealthMonitoring {
    id: string;
    monitoring_id: string;
    astronaut_id: string;
    mission_phase: string;
    monitoring_environment: string;
    physiological_monitoring: {
        cardiovascular_system: any;
        musculoskeletal_system: any;
        neurovestibular_system: any;
        respiratory_system: any;
        endocrine_system: any;
        immune_system: any;
    };
    microgravity_effects: {
        bone_density_changes: any;
        muscle_atrophy: any;
        fluid_redistribution: any;
        visual_impairment: any;
        cardiovascular_deconditioning: any;
        spatial_disorientation: any;
    };
    radiation_exposure: {
        dosimetry_monitoring: any;
        radiation_types: any;
        exposure_limits: any;
        biological_effects: any;
        protection_measures: any;
        long_term_tracking: any;
    };
    psychological_assessment: {
        cognitive_performance: any;
        mood_assessment: any;
        stress_indicators: any;
        sleep_quality: any;
        social_dynamics: any;
        behavioral_health: any;
    };
    countermeasure_protocols: {
        exercise_regimens: any;
        pharmacological_interventions: any;
        nutritional_countermeasures: any;
        environmental_modifications: any;
        protective_equipment: any;
        therapy_protocols: any;
    };
    telemedicine_support: {
        ground_based_consultation: any;
        autonomous_medical_systems: any;
        diagnostic_capabilities: any;
        treatment_protocols: any;
        emergency_procedures: any;
        data_transmission: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SpaceMissionMedicalSupport {
    id: string;
    mission_id: string;
    mission_name: string;
    mission_type: string;
    mission_duration: string;
    medical_equipment: {
        diagnostic_devices: any[];
        therapeutic_equipment: any[];
        surgical_instruments: any[];
        pharmaceutical_supplies: any[];
        emergency_equipment: any[];
        research_instruments: any[];
    };
    crew_medical_training: {
        medical_officer_training: any;
        crew_cross_training: any;
        emergency_procedures: any;
        equipment_operation: any;
        telemedicine_protocols: any;
        research_procedures: any;
    };
    medical_protocols: {
        preventive_care: any;
        emergency_response: any;
        routine_health_maintenance: any;
        medical_research: any;
        quarantine_procedures: any;
        evacuation_protocols: any;
    };
    life_support_systems: {
        atmospheric_control: any;
        water_recovery: any;
        waste_management: any;
        food_systems: any;
        environmental_monitoring: any;
        emergency_life_support: any;
    };
    ground_support: {
        mission_control_medical: any;
        flight_surgeons: any;
        medical_consultants: any;
        research_teams: any;
        emergency_response: any;
        family_support: any;
    };
    research_objectives: {
        biomedical_experiments: any[];
        technology_demonstrations: any;
        countermeasure_validation: any;
        operational_research: any;
        fundamental_research: any;
        translational_studies: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class MicrogravityResearch {
    id: string;
    research_id: string;
    study_title: string;
    research_category: string;
    research_platform: string;
    biological_systems: {
        cellular_biology: any;
        tissue_engineering: any;
        organ_systems: any;
        developmental_biology: any;
        regenerative_medicine: any;
        aging_research: any;
    };
    physiological_studies: {
        cardiovascular_research: any;
        musculoskeletal_research: any;
        neurological_research: any;
        metabolic_research: any;
        immunological_research: any;
        sensory_research: any;
    };
    pharmaceutical_research: {
        drug_development: any;
        protein_crystallization: any;
        vaccine_development: any;
        drug_delivery_systems: any;
        pharmacokinetics: any;
        therapeutic_efficacy: any;
    };
    biotechnology_applications: {
        biomanufacturing: any;
        tissue_culture: any;
        stem_cell_research: any;
        genetic_engineering: any;
        biosensors: any;
        bioprocessing: any;
    };
    countermeasure_development: {
        exercise_countermeasures: any;
        pharmacological_countermeasures: any;
        nutritional_interventions: any;
        environmental_countermeasures: any;
        behavioral_interventions: any;
        technology_solutions: any;
    };
    translational_medicine: {
        terrestrial_applications: any;
        clinical_trials: any;
        medical_device_development: any;
        therapeutic_innovations: any;
        diagnostic_improvements: any;
        healthcare_benefits: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class AerospaceMedicalCertification {
    id: string;
    certification_id: string;
    individual_id: string;
    certification_type: string;
    certification_class: string;
    medical_examination: {
        comprehensive_physical: any;
        cardiovascular_assessment: any;
        neurological_evaluation: any;
        psychological_assessment: any;
        vision_hearing_testing: any;
        specialized_testing: any;
    };
    fitness_standards: {
        physical_fitness: any;
        cognitive_performance: any;
        psychological_stability: any;
        operational_requirements: any;
        mission_specific_criteria: any;
        adaptive_capabilities: any;
    };
    medical_history: {
        past_medical_conditions: any;
        surgical_history: any;
        medication_use: any;
        family_history: any;
        occupational_exposures: any;
        lifestyle_factors: any;
    };
    ongoing_monitoring: {
        periodic_examinations: any;
        continuous_health_monitoring: any;
        fitness_maintenance: any;
        risk_factor_assessment: any;
    };
    disqualifying_conditions: {
        absolute_disqualifiers: any[];
        relative_disqualifiers: any[];
        waiver_considerations: any;
        appeals_process: any;
        rehabilitation_programs: any;
        return_to_duty: any;
    };
    certification_validity: {
        certification_period: any;
        renewal_requirements: any;
        recertification_process: any;
        emergency_revocation: any;
        conditional_certification: any;
        appeals_procedures: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SpaceRadiationProtection {
    id: string;
    protection_id: string;
    mission_context: string;
    radiation_environment: string;
    protection_strategy: string;
    radiation_sources: {
        galactic_cosmic_rays: any;
        solar_particle_events: any;
        trapped_radiation: any;
        neutron_radiation: any;
        secondary_radiation: any;
        artificial_sources: any;
    };
    dosimetry_systems: {
        personal_dosimeters: any;
        area_monitors: any;
        real_time_monitoring: any;
        passive_detectors: any;
        biological_dosimetry: any;
        computational_dosimetry: any;
    };
    shielding_technologies: {
        passive_shielding: any;
        active_shielding: any;
        material_selection: any;
        shielding_optimization: any;
        weight_considerations: any;
        multi_layer_protection: any;
    };
    biological_effects: {
        acute_radiation_syndrome: any;
        cancer_risk: any;
        cardiovascular_effects: any;
        central_nervous_system: any;
        cataracts: any;
        hereditary_effects: any;
    };
    countermeasures: {
        radioprotective_drugs: any;
        antioxidant_therapy: any;
        immune_modulators: any;
        dna_repair_enhancers: any;
        stem_cell_therapy: any;
        gene_therapy: any;
    };
    risk_assessment: {
        exposure_modeling: any;
        risk_projection: any;
        alara_principles: any;
        mission_planning: any;
        operational_constraints: any;
        decision_support: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SpaceMedicineQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    crew_health_outcomes: {
        mission_health_maintenance: number;
        countermeasure_effectiveness: number;
        medical_event_rate: number;
        fitness_level_preservation: number;
        psychological_well_being: number;
        post_flight_recovery_rate: number;
    };
    medical_system_performance: {
        equipment_reliability: number;
        diagnostic_accuracy: number;
        treatment_success_rate: number;
        telemedicine_effectiveness: number;
        emergency_response_capability: number;
        system_availability: number;
    };
    research_productivity: {
        experiment_success_rate: number;
        data_quality_score: number;
        scientific_publication_impact: number;
        technology_transfer_rate: number;
        innovation_development: number;
        collaboration_effectiveness: number;
    };
    radiation_protection_effectiveness: {
        dose_reduction_achievement: number;
        shielding_performance: number;
        monitoring_system_accuracy: number;
        countermeasure_efficacy: number;
        risk_mitigation_success: number;
        safety_protocol_compliance: number;
    };
    operational_efficiency: {
        medical_training_effectiveness: number;
        protocol_compliance_rate: number;
        resource_utilization_efficiency: number;
        mission_medical_support_quality: number;
        ground_crew_coordination: number;
        documentation_completeness: number;
    };
    technology_advancement: {
        medical_technology_development: number;
        innovation_implementation_rate: number;
        system_integration_success: number;
        automation_effectiveness: number;
        miniaturization_achievement: number;
        reliability_improvement: number;
    };
    knowledge_translation: {
        terrestrial_application_rate: number;
        clinical_trial_initiation: number;
        commercial_development: number;
        healthcare_benefit_realization: number;
        public_health_impact: number;
        educational_value: number;
    };
    mission_success_contribution: {
        crew_performance_maintenance: number;
        mission_objective_achievement: number;
        safety_incident_prevention: number;
        operational_risk_reduction: number;
        crew_autonomy_enhancement: number;
        long_duration_mission_enabling: number;
    };
    created_at: Date;
    updated_at: Date;
}
