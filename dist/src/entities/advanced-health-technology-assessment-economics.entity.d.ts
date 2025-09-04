export declare class HealthTechnologyAssessment {
    id: string;
    assessment_id: string;
    technology_name: string;
    technology_type: string;
    assessment_scope: string;
    technology_description: {
        clinical_indication: any;
        target_population: any;
        mechanism_of_action: any;
        clinical_pathway: any;
        comparator_technologies: any;
        regulatory_status: any;
    };
    clinical_effectiveness: {
        systematic_review: any;
        meta_analysis: any;
        primary_endpoints: any;
        secondary_endpoints: any;
        safety_profile: any;
        quality_of_evidence: any;
    };
    economic_evaluation: {
        economic_model: any;
        perspective: any;
        time_horizon: any;
        cost_categories: any;
        outcome_measures: any;
        uncertainty_analysis: any;
    };
    cost_effectiveness_analysis: {
        incremental_costs: any;
        incremental_effects: any;
        cost_effectiveness_ratio: any;
        cost_utility_ratio: any;
        net_monetary_benefit: any;
        threshold_analysis: any;
    };
    budget_impact_assessment: {
        eligible_population: any;
        market_uptake: any;
        resource_utilization: any;
        budget_impact: any;
        affordability_analysis: any;
        financial_sustainability: any;
    };
    broader_impacts: {
        organizational_impact: any;
        social_impact: any;
        ethical_considerations: any;
        legal_implications: any;
        innovation_aspects: any;
        equity_considerations: any;
    };
    implementation_considerations: {
        adoption_barriers: any;
        implementation_requirements: any;
        training_needs: any;
        infrastructure_requirements: any;
        monitoring_systems: any;
        quality_assurance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class EconomicEvaluationModels {
    id: string;
    model_id: string;
    model_name: string;
    model_type: string;
    evaluation_type: string;
    model_structure: {
        health_states: any[];
        transitions: any[];
        cycles: any;
        time_horizon: any;
        discount_rates: any;
        half_cycle_correction: any;
    };
    cost_inputs: {
        direct_medical_costs: any;
        direct_non_medical_costs: any;
        indirect_costs: any;
        cost_sources: any;
        cost_year: any;
        currency: string;
    };
    effectiveness_inputs: {
        clinical_outcomes: any;
        utility_values: any;
        quality_adjusted_life_years: any;
        disability_adjusted_life_years: any;
        data_sources: any;
        measurement_methods: any;
    };
    model_parameters: {
        base_case_values: any;
        parameter_distributions: any;
        correlation_matrices: any;
        scenario_definitions: any;
        threshold_values: any;
        calibration_targets: any;
    };
    uncertainty_analysis: {
        deterministic_sensitivity: any;
        probabilistic_sensitivity: any;
        scenario_analysis: any;
        value_of_information: any;
        model_validation: any;
        external_validation: any;
    };
    model_outputs: {
        incremental_results: any;
        cost_effectiveness_plane: any;
        acceptability_curves: any;
        expected_value_information: any;
        budget_impact_results: any;
        disaggregated_results: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ValueBasedHealthcareFrameworks {
    id: string;
    framework_id: string;
    framework_name: string;
    value_framework: string;
    application_area: string;
    value_elements: {
        clinical_outcomes: any;
        safety_profile: any;
        patient_experience: any;
        convenience_administration: any;
        innovation_factors: any;
        contextual_considerations: any;
    };
    outcome_measurement: {
        outcome_definitions: any;
        measurement_instruments: any;
        data_collection_methods: any;
        risk_adjustment: any;
        outcome_hierarchies: any;
        composite_measures: any;
    };
    cost_measurement: {
        cost_categories: any;
        cost_allocation_methods: any;
        activity_based_costing: any;
        time_driven_costing: any;
        full_cycle_costs: any;
        cost_transparency: any;
    };
    value_calculation: {
        value_metrics: any;
        benchmarking_methods: any;
        performance_scoring: any;
        value_indices: any;
        comparative_assessment: any;
        threshold_definitions: any;
    };
    implementation_strategy: {
        stakeholder_engagement: any;
        data_infrastructure: any;
        measurement_systems: any;
        reporting_mechanisms: any;
        incentive_alignment: any;
        continuous_improvement: any;
    };
    decision_support: {
        value_dashboards: any;
        decision_algorithms: any;
        trade_off_analysis: any;
        scenario_planning: any;
        recommendation_engines: any;
        evidence_integration: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ReimbursementDecisionSupport {
    id: string;
    decision_id: string;
    technology_name: string;
    decision_type: string;
    payer_type: string;
    decision_criteria: {
        clinical_effectiveness: any;
        cost_effectiveness: any;
        budget_impact: any;
        unmet_medical_need: any;
        innovation_value: any;
        social_value: any;
    };
    evidence_requirements: {
        clinical_evidence: any;
        economic_evidence: any;
        real_world_evidence: any;
        patient_reported_outcomes: any;
        comparative_effectiveness: any;
        long_term_outcomes: any;
    };
    stakeholder_input: {
        clinical_experts: any;
        patient_advocates: any;
        health_economists: any;
        payer_representatives: any;
        manufacturer_input: any;
        public_consultation: any;
    };
    decision_process: {
        submission_requirements: any;
        review_timeline: any;
        committee_structure: any;
        deliberation_process: any;
        voting_mechanisms: any;
        appeal_procedures: any;
    };
    decision_outcomes: {
        coverage_decision: any;
        pricing_recommendation: any;
        utilization_restrictions: any;
        monitoring_requirements: any;
        review_schedule: any;
        risk_sharing_agreements: any;
    };
    implementation_support: {
        guidance_documents: any;
        training_materials: any;
        monitoring_systems: any;
        feedback_mechanisms: any;
        post_decision_review: any;
        continuous_learning: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthEconomicsResearch {
    id: string;
    research_id: string;
    study_title: string;
    research_type: string;
    study_design: string;
    research_objectives: {
        primary_objectives: any[];
        secondary_objectives: any[];
        research_questions: any[];
        hypotheses: any[];
        policy_relevance: any;
        knowledge_gaps: any;
    };
    methodology: {
        study_population: any;
        data_sources: any;
        outcome_measures: any;
        analytical_methods: any;
        sample_size_calculation: any;
        bias_mitigation: any;
    };
    data_collection: {
        primary_data: any;
        secondary_data: any;
        administrative_data: any;
        survey_instruments: any;
        clinical_data: any;
        cost_data: any;
    };
    economic_analysis: {
        perspective: any;
        time_horizon: any;
        discount_rate: any;
        cost_categories: any;
        outcome_valuation: any;
        incremental_analysis: any;
    };
    statistical_analysis: {
        descriptive_statistics: any;
        inferential_statistics: any;
        regression_models: any;
        survival_analysis: any;
        missing_data_handling: any;
        sensitivity_analysis: any;
    };
    results_dissemination: {
        peer_reviewed_publications: any;
        conference_presentations: any;
        policy_briefs: any;
        stakeholder_reports: any;
        media_engagement: any;
        knowledge_translation: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthTechnologyAssessmentEconomicsQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    assessment_quality: {
        methodological_rigor: number;
        evidence_comprehensiveness: number;
        analysis_transparency: number;
        uncertainty_characterization: number;
        stakeholder_engagement: number;
        decision_relevance: number;
    };
    economic_modeling_accuracy: {
        model_validity: number;
        parameter_accuracy: number;
        prediction_reliability: number;
        sensitivity_analysis_completeness: number;
        validation_success: number;
        uncertainty_handling: number;
    };
    value_assessment_effectiveness: {
        value_capture_comprehensiveness: number;
        measurement_validity: number;
        stakeholder_acceptability: number;
        decision_utility: number;
        implementation_feasibility: number;
        continuous_improvement: number;
    };
    reimbursement_decision_quality: {
        evidence_based_decisions: number;
        process_transparency: number;
        stakeholder_satisfaction: number;
        decision_consistency: number;
        appeal_resolution_rate: number;
        policy_coherence: number;
    };
    research_impact: {
        policy_influence: number;
        practice_change: number;
        knowledge_advancement: number;
        methodology_innovation: number;
        capacity_building: number;
        international_collaboration: number;
    };
    healthcare_system_value: {
        resource_allocation_improvement: number;
        efficiency_gains: number;
        access_enhancement: number;
        quality_improvement: number;
        innovation_promotion: number;
        sustainability_contribution: number;
    };
    stakeholder_engagement: {
        multistakeholder_participation: number;
        transparency_achievement: number;
        consensus_building: number;
        conflict_resolution: number;
        capacity_development: number;
        trust_building: number;
    };
    technology_adoption_optimization: {
        evidence_generation_speed: number;
        adoption_facilitation: number;
        implementation_support: number;
        monitoring_effectiveness: number;
        adaptive_learning: number;
        value_realization: number;
    };
    created_at: Date;
    updated_at: Date;
}
