import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

// =====================================
// ADVANCED HEALTHCARE SOCIAL DETERMINANTS & HEALTH EQUITY PLATFORM
// Comprehensive social determinants management with health equity assessment,
// social risk screening, community health interventions, disparities analysis,
// policy impact evaluation, and health justice initiatives
// =====================================
@Entity('social_determinants_assessment')
export class SocialDeterminantsAssessment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  assessment_id: string;

  @Column({ type: 'varchar', length: 100 })
  patient_id: string;

  @Column({ type: 'varchar', length: 50 })
  assessment_framework: string; // who_model, healthy_people, social_ecological, life_course
  @Column({ type: 'varchar', length: 50 })
  risk_stratification: string; // low, moderate, high, very_high
  @Column({ type: 'json' })
  economic_stability: {
  employment_status: string;
  income_level: string;
  financial_strain: any;
  housing_stability: any;
  food_security: any;
  transportation_access: any;
  };

  @Column({ type: 'json' })
  education_access: {
  educational_attainment: string;
  health_literacy: any;
  digital_literacy: any;
  language_proficiency: any;
  learning_barriers: any;
  educational_resources: any;
  };

  @Column({ type: 'json' })
  healthcare_access: {
  insurance_coverage: any;
  healthcare_utilization: any;
  provider_accessibility: any;
  care_coordination: any;
  medication_access: any;
  specialist_access: any;
  };

  @Column({ type: 'json' })
  neighborhood_environment: {
  housing_quality: any;
  neighborhood_safety: any;
  environmental_quality: any;
  walkability: any;
  access_to_parks: any;
  transportation_infrastructure: any;
  };

  @Column({ type: 'json' })
  social_community_context: {
  social_support: any;
  community_engagement: any;
  social_cohesion: any;
  discrimination_experiences: any;
  cultural_factors: any;
  civic_participation: any;
  };

  @Column({ type: 'json' })
  structural_factors: {
  systemic_racism: any;
  institutional_discrimination: any;
  policy_environment: any;
  historical_trauma: any;
  power_dynamics: any;
  resource_distribution: any;
  };

  @Column({ type: 'json' })
  risk_scoring: {
  composite_risk_score: number;
  domain_specific_scores: any;
  predictive_modeling: any;
  intervention_priorities: any;
  care_team_alerts: any;
  follow_up_recommendations: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('health_equity_measurement')
export class HealthEquityMeasurement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  measurement_id: string;

  @Column({ type: 'varchar', length: 255 })
  study_name: string;

  @Column({ type: 'varchar', length: 50 })
  equity_dimension: string; // race_ethnicity, gender, age, disability, sexual_orientation, geography
  @Column({ type: 'varchar', length: 50 })
  health_outcome: string; // mortality, morbidity, access, quality, satisfaction, prevention
  @Column({ type: 'json' })
  population_stratification: {
  demographic_groups: any[];
  intersectionality_analysis: any;
  subgroup_definitions: any;
  sample_sizes: any;
  representation_adequacy: any;
  data_quality_assessment: any;
  };

  @Column({ type: 'json' })
  disparity_measurement: {
  absolute_disparities: any;
  relative_disparities: any;
  complex_measures: any;
  trend_analysis: any;
  geographic_variation: any;
  temporal_patterns: any;
  };

  @Column({ type: 'json' })
  causal_analysis: {
  mediation_analysis: any;
  pathway_decomposition: any;
  structural_equation_modeling: any;
  counterfactual_analysis: any;
  natural_experiments: any;
  intervention_studies: any;
  };

  @Column({ type: 'json' })
  intersectionality_assessment: {
  multiple_identities: any;
  interaction_effects: any;
  compound_disadvantage: any;
  privilege_analysis: any;
  multilevel_modeling: any;
  qualitative_insights: any;
  };

  @Column({ type: 'json' })
  contextual_factors: {
  historical_context: any;
  political_context: any;
  economic_context: any;
  social_context: any;
  environmental_context: any;
  cultural_context: any;
  };

  @Column({ type: 'json' })
  intervention_evaluation: {
  equity_focused_interventions: any;
  differential_effects: any;
  unintended_consequences: any;
  implementation_barriers: any;
  sustainability_factors: any;
  scalability_assessment: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('community_health_interventions')
export class CommunityHealthInterventions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  intervention_id: string;

  @Column({ type: 'varchar', length: 255 })
  intervention_name: string;

  @Column({ type: 'varchar', length: 50 })
  intervention_type: string; // structural, behavioral, educational, policy, environmental
  @Column({ type: 'varchar', length: 50 })
  target_population: string; // high_risk, underserved, minority, rural, elderly, youth
  @Column({ type: 'json' })
  community_assessment: {
  needs_assessment: any;
  asset_mapping: any;
  stakeholder_analysis: any;
  readiness_assessment: any;
  capacity_evaluation: any;
  partnership_development: any;
  };

  @Column({ type: 'json' })
  intervention_design: {
  theoretical_framework: any;
  logic_model: any;
  evidence_base: any;
  cultural_adaptation: any;
  community_input: any;
  pilot_testing: any;
  };

  @Column({ type: 'json' })
  implementation_strategy: {
  delivery_methods: any;
  community_partnerships: any;
  staff_training: any;
  quality_assurance: any;
  fidelity_monitoring: any;
  adaptive_management: any;
  };

  @Column({ type: 'json' })
  outcome_measurement: {
  process_indicators: any;
  short_term_outcomes: any;
  intermediate_outcomes: any;
  long_term_outcomes: any;
  health_equity_measures: any;
  unintended_effects: any;
  };

  @Column({ type: 'json' })
  sustainability_planning: {
  funding_diversification: any;
  institutional_support: any;
  community_ownership: any;
  policy_integration: any;
  capacity_building: any;
  continuous_improvement: any;
  };

  @Column({ type: 'json' })
  dissemination_scaling: {
  replication_materials: any;
  training_curricula: any;
  technical_assistance: any;
  policy_advocacy: any;
  research_translation: any;
  knowledge_sharing: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('health_policy_impact_analysis')
export class HealthPolicyImpactAnalysis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  analysis_id: string;

  @Column({ type: 'varchar', length: 255 })
  policy_name: string;

  @Column({ type: 'varchar', length: 50 })
  policy_level: string; // federal, state, local, institutional, organizational
  @Column({ type: 'varchar', length: 50 })
  policy_domain: string; // healthcare, education, housing, employment, criminal_justice, environment
  @Column({ type: 'json' })
  policy_characterization: {
  policy_description: any;
  target_population: any;
  implementation_timeline: any;
  resource_allocation: any;
  enforcement_mechanisms: any;
  stakeholder_involvement: any;
  };

  @Column({ type: 'json' })
  health_impact_assessment: {
  assessment_framework: any;
  pathway_analysis: any;
  population_impact: any;
  distributional_effects: any;
  equity_implications: any;
  unintended_consequences: any;
  };

  @Column({ type: 'json' })
  evaluation_design: {
  study_design: any;
  comparison_groups: any;
  outcome_measures: any;
  data_sources: any;
  analytic_methods: any;
  confounding_control: any;
  };

  @Column({ type: 'json' })
  implementation_analysis: {
  implementation_process: any;
  fidelity_assessment: any;
  reach_penetration: any;
  adoption_uptake: any;
  barriers_facilitators: any;
  contextual_factors: any;
  };

  @Column({ type: 'json' })
  cost_effectiveness: {
  economic_evaluation: any;
  cost_benefit_analysis: any;
  budget_impact: any;
  return_on_investment: any;
  distributional_costs: any;
  opportunity_costs: any;
  };

  @Column({ type: 'json' })
  equity_analysis: {
  differential_impacts: any;
  vulnerable_populations: any;
  access_barriers: any;
  benefit_distribution: any;
  harm_minimization: any;
  justice_considerations: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('health_justice_initiatives')
export class HealthJusticeInitiatives {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  initiative_id: string;

  @Column({ type: 'varchar', length: 255 })
  initiative_name: string;

  @Column({ type: 'varchar', length: 50 })
  justice_framework: string; // distributive, procedural, recognition, capabilities, rights_based
  @Column({ type: 'varchar', length: 50 })
  focus_area: string; // access, quality, participation, representation, power, resources
  @Column({ type: 'json' })
  community_engagement: {
  participatory_approaches: any;
  community_leadership: any;
  power_sharing: any;
  capacity_building: any;
  decision_making_roles: any;
  accountability_mechanisms: any;
  };

  @Column({ type: 'json' })
  advocacy_strategies: {
  policy_advocacy: any;
  grassroots_organizing: any;
  coalition_building: any;
  media_engagement: any;
  legal_strategies: any;
  direct_action: any;
  };

  @Column({ type: 'json' })
  systemic_change_efforts: {
  institutional_reform: any;
  policy_change: any;
  resource_redistribution: any;
  power_restructuring: any;
  norm_transformation: any;
  cultural_change: any;
  };

  @Column({ type: 'json' })
  capacity_building: {
  leadership_development: any;
  skill_building: any;
  knowledge_transfer: any;
  network_strengthening: any;
  resource_mobilization: any;
  organizational_development: any;
  };

  @Column({ type: 'json' })
  accountability_measures: {
  performance_monitoring: any;
  community_oversight: any;
  transparency_mechanisms: any;
  feedback_systems: any;
  complaint_processes: any;
  corrective_actions: any;
  };

  @Column({ type: 'json' })
  impact_assessment: {
  justice_outcomes: any;
  empowerment_measures: any;
  systemic_indicators: any;
  unintended_effects: any;
  sustainability_factors: any;
  replication_potential: any;
  };

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('social_determinants_health_equity_quality_metrics')
export class SocialDeterminantsHealthEquityQualityMetrics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  metrics_id: string;

  @Column({ type: 'varchar', length: 50 })
  measurement_period: string;

  @Column({ type: 'json' })
  assessment_completeness: {
  screening_rate: number;
  data_completeness: number;
  risk_stratification_accuracy: number;
  intervention_appropriateness: number;
  follow_up_compliance: number;
  care_coordination_effectiveness: number;
  };

  @Column({ type: 'json' })
  equity_measurement_quality: {
  disparity_detection_sensitivity: number;
  measurement_validity: number;
  intersectionality_capture: number;
  causal_inference_strength: number;
  contextual_understanding: number;
  action_orientation: number;
  };

  @Column({ type: 'json' })
  intervention_effectiveness: {
  outcome_achievement: number;
  equity_improvement: number;
  community_engagement_quality: number;
  sustainability_likelihood: number;
  scalability_potential: number;
  cost_effectiveness: number;
  };

  @Column({ type: 'json' })
  policy_impact_strength: {
  health_outcome_improvement: number;
  equity_advancement: number;
  implementation_success: number;
  unintended_consequence_minimization: number;
  stakeholder_satisfaction: number;
  evidence_generation_quality: number;
  };

  @Column({ type: 'json' })
  justice_initiative_success: {
  community_empowerment: number;
  systemic_change_achievement: number;
  power_redistribution: number;
  accountability_establishment: number;
  capacity_building_effectiveness: number;
  movement_building_contribution: number;
  };

  @Column({ type: 'json' })
  health_equity_advancement: {
  disparity_reduction: number;
  access_improvement: number;
  quality_equity: number;
  participation_enhancement: number;
  representation_increase: number;
  justice_realization: number;
  };

  @Column({ type: 'json' })
  system_transformation: {
  institutional_change: number;
  policy_reform: number;
  practice_innovation: number;
  culture_shift: number;
  capacity_enhancement: number;
  sustainable_impact: number;
  };

  @Column({ type: 'json' })
  community_impact: {
  community_health_improvement: number;
  social_cohesion_strengthening: number;
  collective_efficacy_enhancement: number;
  resource_mobilization: number;
  advocacy_capacity_building: number;
  democratic_participation: number;
  };

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
