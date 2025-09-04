import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

// =====================================
// ADVANCED HEALTHCARE SPACE MEDICINE & AEROSPACE HEALTH PLATFORM
// Comprehensive space medicine management with astronaut health monitoring,
// microgravity effects research, space mission medical support,
// radiation protection, aerospace medical certification,
// and extraterrestrial healthcare systems
// =====================================

@Entity('astronaut_health_monitoring')
export class AstronautHealthMonitoring {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  monitoring_id: string;

  @Column({ type: 'varchar', length: 100 })
  astronaut_id: string;

  @Column({ type: 'varchar', length: 50 })
  mission_phase: string; // pre_flight, in_flight, post_flight, long_duration
  
  @Column({ type: 'varchar', length: 50 })
  monitoring_environment: string; // ground, iss, lunar, mars, deep_space
  
  @Column({ type: 'json' })
  physiological_monitoring: {
    cardiovascular_system: any;
    musculoskeletal_system: any;
    neurovestibular_system: any;
    respiratory_system: any;
    endocrine_system: any;
    immune_system: any;
  };

  @Column({ type: 'json' })
  microgravity_effects: {
    bone_density_changes: any;
    muscle_atrophy: any;
    fluid_redistribution: any;
    visual_impairment: any;
    cardiovascular_deconditioning: any;
    spatial_disorientation: any;
  };

  @Column({ type: 'json' })
  radiation_exposure: {
    dosimetry_monitoring: any;
    radiation_types: any;
    exposure_limits: any;
    biological_effects: any;
    protection_measures: any;
    long_term_tracking: any;
  };

  @Column({ type: 'json' })
  psychological_assessment: {
    cognitive_performance: any;
    mood_assessment: any;
    stress_indicators: any;
    sleep_quality: any;
    social_dynamics: any;
    behavioral_health: any;
  };

  @Column({ type: 'json' })
  countermeasure_protocols: {
    exercise_regimens: any;
    pharmacological_interventions: any;
    nutritional_countermeasures: any;
    environmental_modifications: any;
    protective_equipment: any;
    therapy_protocols: any;
  };

  @Column({ type: 'json' })
  telemedicine_support: {
    ground_based_consultation: any;
    autonomous_medical_systems: any;
    diagnostic_capabilities: any;
    treatment_protocols: any;
    emergency_procedures: any;
    data_transmission: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('space_mission_medical_support')
export class SpaceMissionMedicalSupport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  mission_id: string;

  @Column({ type: 'varchar', length: 255 })
  mission_name: string;

  @Column({ type: 'varchar', length: 50 })
  mission_type: string; // iss, lunar, mars, asteroid, deep_space
  
  @Column({ type: 'varchar', length: 50 })
  mission_duration: string; // short, medium, long, extended
  
  @Column({ type: 'json' })
  medical_equipment: {
    diagnostic_devices: any[];
    therapeutic_equipment: any[];
    surgical_instruments: any[];
    pharmaceutical_supplies: any[];
    emergency_equipment: any[];
    research_instruments: any[];
  };

  @Column({ type: 'json' })
  crew_medical_training: {
    medical_officer_training: any;
    crew_cross_training: any;
    emergency_procedures: any;
    equipment_operation: any;
    telemedicine_protocols: any;
    research_procedures: any;
  };

  @Column({ type: 'json' })
  medical_protocols: {
    preventive_care: any;
    emergency_response: any;
    routine_health_maintenance: any;
    medical_research: any;
    quarantine_procedures: any;
    evacuation_protocols: any;
  };

  @Column({ type: 'json' })
  life_support_systems: {
    atmospheric_control: any;
    water_recovery: any;
    waste_management: any;
    food_systems: any;
    environmental_monitoring: any;
    emergency_life_support: any;
  };

  @Column({ type: 'json' })
  ground_support: {
    mission_control_medical: any;
    flight_surgeons: any;
    medical_consultants: any;
    research_teams: any;
    emergency_response: any;
    family_support: any;
  };

  @Column({ type: 'json' })
  research_objectives: {
    biomedical_experiments: any[];
    technology_demonstrations: any;
    countermeasure_validation: any;
    operational_research: any;
    fundamental_research: any;
    translational_studies: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('microgravity_research')
export class MicrogravityResearch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  research_id: string;

  @Column({ type: 'varchar', length: 255 })
  study_title: string;

  @Column({ type: 'varchar', length: 50 })
  research_category: string; // fundamental, applied, translational, operational
  
  @Column({ type: 'varchar', length: 50 })
  research_platform: string; // iss, parabolic_flight, centrifuge, ground_analog
  
  @Column({ type: 'json' })
  biological_systems: {
    cellular_biology: any;
    tissue_engineering: any;
    organ_systems: any;
    developmental_biology: any;
    regenerative_medicine: any;
    aging_research: any;
  };

  @Column({ type: 'json' })
  physiological_studies: {
    cardiovascular_research: any;
    musculoskeletal_research: any;
    neurological_research: any;
    metabolic_research: any;
    immunological_research: any;
    sensory_research: any;
  };

  @Column({ type: 'json' })
  pharmaceutical_research: {
    drug_development: any;
    protein_crystallization: any;
    vaccine_development: any;
    drug_delivery_systems: any;
    pharmacokinetics: any;
    therapeutic_efficacy: any;
  };

  @Column({ type: 'json' })
  biotechnology_applications: {
    biomanufacturing: any;
    tissue_culture: any;
    stem_cell_research: any;
    genetic_engineering: any;
    biosensors: any;
    bioprocessing: any;
  };

  @Column({ type: 'json' })
  countermeasure_development: {
    exercise_countermeasures: any;
    pharmacological_countermeasures: any;
    nutritional_interventions: any;
    environmental_countermeasures: any;
    behavioral_interventions: any;
    technology_solutions: any;
  };

  @Column({ type: 'json' })
  translational_medicine: {
    terrestrial_applications: any;
    clinical_trials: any;
    medical_device_development: any;
    therapeutic_innovations: any;
    diagnostic_improvements: any;
    healthcare_benefits: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('aerospace_medical_certification')
export class AerospaceMedicalCertification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  certification_id: string;

  @Column({ type: 'varchar', length: 100 })
  individual_id: string;

  @Column({ type: 'varchar', length: 50 })
  certification_type: string; // astronaut, pilot, flight_engineer, mission_specialist
  
  @Column({ type: 'varchar', length: 50 })
  certification_class: string; // class_i, class_ii, class_iii, spaceflight
  
  @Column({ type: 'json' })
  medical_examination: {
    comprehensive_physical: any;
    cardiovascular_assessment: any;
    neurological_evaluation: any;
    psychological_assessment: any;
    vision_hearing_testing: any;
    specialized_testing: any;
  };

  @Column({ type: 'json' })
  fitness_standards: {
    physical_fitness: any;
    cognitive_performance: any;
    psychological_stability: any;
    operational_requirements: any;
    mission_specific_criteria: any;
    adaptive_capabilities: any;
  };

  @Column({ type: 'json' })
  medical_history: {
    past_medical_conditions: any;
    surgical_history: any;
    medication_use: any;
    family_history: any;
    occupational_exposures: any;
    lifestyle_factors: any;
  };

  @Column({ type: 'json' })
  ongoing_monitoring: {
    periodic_examinations: any;
    continuous_health_monitoring: any;
    fitness_maintenance: any;
    risk_factor_assessment: any;
  };

  @Column({ type: 'json' })
  disqualifying_conditions: {
    absolute_disqualifiers: any[];
    relative_disqualifiers: any[];
    waiver_considerations: any;
    appeals_process: any;
    rehabilitation_programs: any;
    return_to_duty: any;
  };

  @Column({ type: 'json' })
  certification_validity: {
    certification_period: any;
    renewal_requirements: any;
    recertification_process: any;
    emergency_revocation: any;
    conditional_certification: any;
    appeals_procedures: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('space_radiation_protection')
export class SpaceRadiationProtection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  protection_id: string;

  @Column({ type: 'varchar', length: 255 })
  mission_context: string;

  @Column({ type: 'varchar', length: 50 })
  radiation_environment: string; // leo, geo, lunar, interplanetary, solar_particle_event

  @Column({ type: 'varchar', length: 50 })
  protection_strategy: string; // passive, active, operational, pharmaceutical

  @Column({ type: 'json' })
  radiation_sources: {
    galactic_cosmic_rays: any;
    solar_particle_events: any;
    trapped_radiation: any;
    neutron_radiation: any;
    secondary_radiation: any;
    artificial_sources: any;
  };

  @Column({ type: 'json' })
  dosimetry_systems: {
    personal_dosimeters: any;
    area_monitors: any;
    real_time_monitoring: any;
    passive_detectors: any;
    biological_dosimetry: any;
    computational_dosimetry: any;
  };

  @Column({ type: 'json' })
  shielding_technologies: {
    passive_shielding: any;
    active_shielding: any;
    material_selection: any;
    shielding_optimization: any;
    weight_considerations: any;
    multi_layer_protection: any;
  };

  @Column({ type: 'json' })
  biological_effects: {
    acute_radiation_syndrome: any;
    cancer_risk: any;
    cardiovascular_effects: any;
    central_nervous_system: any;
    cataracts: any;
    hereditary_effects: any;
  };

  @Column({ type: 'json' })
  countermeasures: {
    radioprotective_drugs: any;
    antioxidant_therapy: any;
    immune_modulators: any;
    dna_repair_enhancers: any;
    stem_cell_therapy: any;
    gene_therapy: any;
  };

  @Column({ type: 'json' })
  risk_assessment: {
    exposure_modeling: any;
    risk_projection: any;
    alara_principles: any;
    mission_planning: any;
    operational_constraints: any;
    decision_support: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('space_medicine_quality_metrics')
export class SpaceMedicineQualityMetrics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  metrics_id: string;

  @Column({ type: 'varchar', length: 50 })
  measurement_period: string;

  @Column({ type: 'json' })
  crew_health_outcomes: {
    mission_health_maintenance: number;
    countermeasure_effectiveness: number;
    medical_event_rate: number;
    fitness_level_preservation: number;
    psychological_well_being: number;
    post_flight_recovery_rate: number;
  };

  @Column({ type: 'json' })
  medical_system_performance: {
    equipment_reliability: number;
    diagnostic_accuracy: number;
    treatment_success_rate: number;
    telemedicine_effectiveness: number;
    emergency_response_capability: number;
    system_availability: number;
  };

  @Column({ type: 'json' })
  research_productivity: {
    experiment_success_rate: number;
    data_quality_score: number;
    scientific_publication_impact: number;
    technology_transfer_rate: number;
    innovation_development: number;
    collaboration_effectiveness: number;
  };

  @Column({ type: 'json' })
  radiation_protection_effectiveness: {
    dose_reduction_achievement: number;
    shielding_performance: number;
    monitoring_system_accuracy: number;
    countermeasure_efficacy: number;
    risk_mitigation_success: number;
    safety_protocol_compliance: number;
  };

  @Column({ type: 'json' })
  operational_efficiency: {
    medical_training_effectiveness: number;
    protocol_compliance_rate: number;
    resource_utilization_efficiency: number;
    mission_medical_support_quality: number;
    ground_crew_coordination: number;
    documentation_completeness: number;
  };

  @Column({ type: 'json' })
  technology_advancement: {
    medical_technology_development: number;
    innovation_implementation_rate: number;
    system_integration_success: number;
    automation_effectiveness: number;
    miniaturization_achievement: number;
    reliability_improvement: number;
  };

  @Column({ type: 'json' })
  knowledge_translation: {
    terrestrial_application_rate: number;
    clinical_trial_initiation: number;
    commercial_development: number;
    healthcare_benefit_realization: number;
    public_health_impact: number;
    educational_value: number;
  };

  @Column({ type: 'json' })
  mission_success_contribution: {
    crew_performance_maintenance: number;
    mission_objective_achievement: number;
    safety_incident_prevention: number;
    operational_risk_reduction: number;
    crew_autonomy_enhancement: number;
    long_duration_mission_enabling: number;
  };

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
