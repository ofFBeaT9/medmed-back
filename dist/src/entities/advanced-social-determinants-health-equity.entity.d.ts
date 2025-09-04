export declare class SocialDeterminantsAssessment {
    id: string;
    assessment_id: string;
    patient_id: string;
    assessment_framework: string;
    risk_stratification: string;
    economic_stability: {
        employment_status: string;
        income_level: string;
        financial_strain: any;
        housing_stability: any;
        food_security: any;
        transportation_access: any;
    };
    education_access: {
        educational_attainment: string;
        health_literacy: any;
        digital_literacy: any;
        language_proficiency: any;
        learning_barriers: any;
        educational_resources: any;
    };
    healthcare_access: {
        insurance_coverage: any;
        healthcare_utilization: any;
        provider_accessibility: any;
        care_coordination: any;
        medication_access: any;
        specialist_access: any;
    };
    neighborhood_environment: {
        housing_quality: any;
        neighborhood_safety: any;
        environmental_quality: any;
        walkability: any;
        access_to_parks: any;
        transportation_infrastructure: any;
    };
    social_community_context: {
        social_support: any;
        community_engagement: any;
        social_cohesion: any;
        discrimination_experiences: any;
        cultural_factors: any;
        civic_participation: any;
    };
    structural_factors: {
        systemic_racism: any;
        institutional_discrimination: any;
        policy_environment: any;
        historical_trauma: any;
        power_dynamics: any;
        resource_distribution: any;
    };
    risk_scoring: {
        composite_risk_score: number;
        domain_specific_scores: any;
        predictive_modeling: any;
        intervention_priorities: any;
        care_team_alerts: any;
        follow_up_recommendations: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthEquityMeasurement {
    id: string;
    measurement_id: string;
    study_name: string;
    equity_dimension: string;
    health_outcome: string;
    population_stratification: {
        demographic_groups: any[];
        intersectionality_analysis: any;
        subgroup_definitions: any;
        sample_sizes: any;
        representation_adequacy: any;
        data_quality_assessment: any;
    };
    disparity_measurement: {
        absolute_disparities: any;
        relative_disparities: any;
        complex_measures: any;
        trend_analysis: any;
        geographic_variation: any;
        temporal_patterns: any;
    };
    causal_analysis: {
        mediation_analysis: any;
        pathway_decomposition: any;
        structural_equation_modeling: any;
        counterfactual_analysis: any;
        natural_experiments: any;
        intervention_studies: any;
    };
    intersectionality_assessment: {
        multiple_identities: any;
        interaction_effects: any;
        compound_disadvantage: any;
        privilege_analysis: any;
        multilevel_modeling: any;
        qualitative_insights: any;
    };
    contextual_factors: {
        historical_context: any;
        political_context: any;
        economic_context: any;
        social_context: any;
        environmental_context: any;
        cultural_context: any;
    };
    intervention_evaluation: {
        equity_focused_interventions: any;
        differential_effects: any;
        unintended_consequences: any;
        implementation_barriers: any;
        sustainability_factors: any;
        scalability_assessment: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class CommunityHealthInterventions {
    id: string;
    intervention_id: string;
    intervention_name: string;
    intervention_type: string;
    target_population: string;
    community_assessment: {
        needs_assessment: any;
        asset_mapping: any;
        stakeholder_analysis: any;
        readiness_assessment: any;
        capacity_evaluation: any;
        partnership_development: any;
    };
    intervention_design: {
        theoretical_framework: any;
        logic_model: any;
        evidence_base: any;
        cultural_adaptation: any;
        community_input: any;
        pilot_testing: any;
    };
    implementation_strategy: {
        delivery_methods: any;
        community_partnerships: any;
        staff_training: any;
        quality_assurance: any;
        fidelity_monitoring: any;
        adaptive_management: any;
    };
    outcome_measurement: {
        process_indicators: any;
        short_term_outcomes: any;
        intermediate_outcomes: any;
        long_term_outcomes: any;
        health_equity_measures: any;
        unintended_effects: any;
    };
    sustainability_planning: {
        funding_diversification: any;
        institutional_support: any;
        community_ownership: any;
        policy_integration: any;
        capacity_building: any;
        continuous_improvement: any;
    };
    dissemination_scaling: {
        replication_materials: any;
        training_curricula: any;
        technical_assistance: any;
        policy_advocacy: any;
        research_translation: any;
        knowledge_sharing: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthPolicyImpactAnalysis {
    id: string;
    analysis_id: string;
    policy_name: string;
    policy_level: string;
    policy_domain: string;
    policy_characterization: {
        policy_description: any;
        target_population: any;
        implementation_timeline: any;
        resource_allocation: any;
        enforcement_mechanisms: any;
        stakeholder_involvement: any;
    };
    health_impact_assessment: {
        assessment_framework: any;
        pathway_analysis: any;
        population_impact: any;
        distributional_effects: any;
        equity_implications: any;
        unintended_consequences: any;
    };
    evaluation_design: {
        study_design: any;
        comparison_groups: any;
        outcome_measures: any;
        data_sources: any;
        analytic_methods: any;
        confounding_control: any;
    };
    implementation_analysis: {
        implementation_process: any;
        fidelity_assessment: any;
        reach_penetration: any;
        adoption_uptake: any;
        barriers_facilitators: any;
        contextual_factors: any;
    };
    cost_effectiveness: {
        economic_evaluation: any;
        cost_benefit_analysis: any;
        budget_impact: any;
        return_on_investment: any;
        distributional_costs: any;
        opportunity_costs: any;
    };
    equity_analysis: {
        differential_impacts: any;
        vulnerable_populations: any;
        access_barriers: any;
        benefit_distribution: any;
        harm_minimization: any;
        justice_considerations: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthJusticeInitiatives {
    id: string;
    initiative_id: string;
    initiative_name: string;
    justice_framework: string;
    focus_area: string;
    community_engagement: {
        participatory_approaches: any;
        community_leadership: any;
        power_sharing: any;
        capacity_building: any;
        decision_making_roles: any;
        accountability_mechanisms: any;
    };
    advocacy_strategies: {
        policy_advocacy: any;
        grassroots_organizing: any;
        coalition_building: any;
        media_engagement: any;
        legal_strategies: any;
        direct_action: any;
    };
    systemic_change_efforts: {
        institutional_reform: any;
        policy_change: any;
        resource_redistribution: any;
        power_restructuring: any;
        norm_transformation: any;
        cultural_change: any;
    };
    capacity_building: {
        leadership_development: any;
        skill_building: any;
        knowledge_transfer: any;
        network_strengthening: any;
        resource_mobilization: any;
        organizational_development: any;
    };
    accountability_measures: {
        performance_monitoring: any;
        community_oversight: any;
        transparency_mechanisms: any;
        feedback_systems: any;
        complaint_processes: any;
        corrective_actions: any;
    };
    impact_assessment: {
        justice_outcomes: any;
        empowerment_measures: any;
        systemic_indicators: any;
        unintended_effects: any;
        sustainability_factors: any;
        replication_potential: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SocialDeterminantsHealthEquityQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    assessment_completeness: {
        screening_rate: number;
        data_completeness: number;
        risk_stratification_accuracy: number;
        intervention_appropriateness: number;
        follow_up_compliance: number;
        care_coordination_effectiveness: number;
    };
    equity_measurement_quality: {
        disparity_detection_sensitivity: number;
        measurement_validity: number;
        intersectionality_capture: number;
        causal_inference_strength: number;
        contextual_understanding: number;
        action_orientation: number;
    };
    intervention_effectiveness: {
        outcome_achievement: number;
        equity_improvement: number;
        community_engagement_quality: number;
        sustainability_likelihood: number;
        scalability_potential: number;
        cost_effectiveness: number;
    };
    policy_impact_strength: {
        health_outcome_improvement: number;
        equity_advancement: number;
        implementation_success: number;
        unintended_consequence_minimization: number;
        stakeholder_satisfaction: number;
        evidence_generation_quality: number;
    };
    justice_initiative_success: {
        community_empowerment: number;
        systemic_change_achievement: number;
        power_redistribution: number;
        accountability_establishment: number;
        capacity_building_effectiveness: number;
        movement_building_contribution: number;
    };
    health_equity_advancement: {
        disparity_reduction: number;
        access_improvement: number;
        quality_equity: number;
        participation_enhancement: number;
        representation_increase: number;
        justice_realization: number;
    };
    system_transformation: {
        institutional_change: number;
        policy_reform: number;
        practice_innovation: number;
        culture_shift: number;
        capacity_enhancement: number;
        sustainable_impact: number;
    };
    community_impact: {
        community_health_improvement: number;
        social_cohesion_strengthening: number;
        collective_efficacy_enhancement: number;
        resource_mobilization: number;
        advocacy_capacity_building: number;
        democratic_participation: number;
    };
    created_at: Date;
    updated_at: Date;
}
