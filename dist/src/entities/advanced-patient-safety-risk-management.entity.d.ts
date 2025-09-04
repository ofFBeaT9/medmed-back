export declare class PatientSafetyIncidentReporting {
    id: string;
    incident_id: string;
    patient_id: string;
    incident_type: string;
    severity_level: string;
    incident_details: {
        occurrence_datetime: any;
        location: any;
        incident_description: any;
        immediate_consequences: any;
        contributing_factors: any;
        reporter_information: any;
    };
    patient_impact: {
        harm_level: any;
        clinical_consequences: any;
        treatment_required: any;
        length_of_stay_impact: any;
        functional_impact: any;
        psychological_impact: any;
    };
    initial_response: {
        immediate_actions: any;
        patient_care_interventions: any;
        safety_measures: any;
        notification_processes: any;
        documentation_completion: any;
        family_communication: any;
    };
    investigation_process: {
        investigation_team: any[];
        investigation_methods: any;
        root_cause_analysis: any;
        system_factors: any;
        human_factors: any;
        timeline_reconstruction: any;
    };
    corrective_actions: {
        immediate_corrections: any[];
        system_improvements: any[];
        policy_changes: any;
        training_interventions: any;
        monitoring_plans: any;
        prevention_strategies: any;
    };
    outcome_tracking: {
        action_implementation: any;
        effectiveness_monitoring: any;
        recurrence_prevention: any;
        lesson_sharing: any;
        system_learning: any;
        culture_impact: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ProactiveRiskAssessment {
    id: string;
    assessment_id: string;
    process_activity: string;
    assessment_method: string;
    risk_category: string;
    process_mapping: {
        process_steps: any[];
        decision_points: any[];
        handoffs: any[];
        dependencies: any[];
        stakeholders: any[];
        system_boundaries: any;
    };
    hazard_identification: {
        potential_hazards: any[];
        failure_modes: any[];
        error_opportunities: any[];
        vulnerability_points: any[];
        trigger_events: any[];
        environmental_factors: any;
    };
    risk_analysis: {
        probability_assessment: any;
        impact_assessment: any;
        risk_scoring: any;
        risk_prioritization: any;
        uncertainty_analysis: any;
        scenario_modeling: any;
    };
    existing_controls: {
        preventive_measures: any[];
        detective_measures: any[];
        corrective_measures: any[];
        control_effectiveness: any;
        control_gaps: any;
        redundancy_analysis: any;
    };
    risk_mitigation: {
        mitigation_strategies: any[];
        control_enhancements: any;
        system_redesign: any;
        training_interventions: any;
        technology_solutions: any;
        policy_updates: any;
    };
    monitoring_review: {
        risk_indicators: any[];
        monitoring_frequency: any;
        review_triggers: any;
        update_procedures: any;
        performance_metrics: any;
        continuous_improvement: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SafetyCultureMeasurement {
    id: string;
    measurement_id: string;
    assessment_name: string;
    measurement_tool: string;
    target_population: string;
    culture_dimensions: {
        psychological_safety: any;
        reporting_culture: any;
        learning_culture: any;
        just_culture: any;
        informed_culture: any;
        flexible_culture: any;
    };
    measurement_process: {
        survey_administration: any;
        response_collection: any;
        data_analysis: any;
        benchmarking: any;
        trend_analysis: any;
        segment_analysis: any;
    };
    culture_assessment: {
        safety_perceptions: any;
        leadership_commitment: any;
        communication_openness: any;
        teamwork_collaboration: any;
        learning_improvement: any;
        non_punitive_response: any;
    };
    improvement_opportunities: {
        culture_gaps: any[];
        priority_areas: any;
        intervention_strategies: any;
        action_planning: any;
        resource_requirements: any;
        timeline_expectations: any;
    };
    intervention_tracking: {
        culture_initiatives: any[];
        implementation_progress: any;
        outcome_monitoring: any;
        behavior_changes: any;
        culture_evolution: any;
        sustainability_measures: any;
    };
    outcome_evaluation: {
        culture_improvement: any;
        safety_performance: any;
        staff_engagement: any;
        reporting_behaviors: any;
        learning_behaviors: any;
        patient_outcomes: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HighReliabilityOrganizationSystems {
    id: string;
    system_id: string;
    system_name: string;
    hro_principle: string;
    implementation_level: string;
    mindful_organizing: {
        failure_awareness: any;
        complexity_appreciation: any;
        operational_sensitivity: any;
        resilience_building: any;
        expertise_utilization: any;
        collective_mindfulness: any;
    };
    safety_management_systems: {
        safety_policy: any;
        safety_risk_management: any;
        safety_assurance: any;
        safety_promotion: any;
        management_commitment: any;
        continuous_improvement: any;
    };
    operational_excellence: {
        standardization: any;
        reliability_practices: any;
        error_prevention: any;
        performance_monitoring: any;
        continuous_learning: any;
        adaptive_capacity: any;
    };
    leadership_practices: {
        visible_leadership: any;
        safety_rounds: any;
        learning_behaviors: any;
        decision_making: any;
        resource_allocation: any;
        accountability_systems: any;
    };
    team_practices: {
        team_communication: any;
        situational_awareness: any;
        mutual_support: any;
        coordination: any;
        conflict_resolution: any;
        shared_mental_models: any;
    };
    measurement_monitoring: {
        safety_indicators: any[];
        performance_metrics: any;
        trend_analysis: any;
        benchmarking: any;
        feedback_systems: any;
        improvement_tracking: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HarmPreventionPrograms {
    id: string;
    program_id: string;
    program_name: string;
    harm_category: string;
    prevention_strategy: string;
    evidence_base: {
        literature_review: any;
        best_practices: any;
        clinical_guidelines: any;
        expert_consensus: any;
        local_data_analysis: any;
        gap_analysis: any;
    };
    intervention_design: {
        prevention_bundle: any[];
        implementation_strategy: any;
        change_management: any;
        stakeholder_engagement: any;
        resource_requirements: any;
        timeline_planning: any;
    };
    implementation_process: {
        pilot_testing: any;
        staff_training: any;
        system_modifications: any;
        workflow_integration: any;
        compliance_monitoring: any;
        feedback_mechanisms: any;
    };
    outcome_measurement: {
        process_measures: any[];
        outcome_measures: any[];
        balancing_measures: any[];
        data_collection: any;
        analysis_methods: any;
        reporting_systems: any;
    };
    sustainability_strategies: {
        embedding_practices: any;
        ongoing_monitoring: any;
        reinforcement_mechanisms: any;
        continuous_improvement: any;
        spread_strategies: any;
        knowledge_sharing: any;
    };
    program_evaluation: {
        effectiveness_assessment: any;
        cost_benefit_analysis: any;
        unintended_consequences: any;
        stakeholder_satisfaction: any;
        lessons_learned: any;
        recommendations: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PatientSafetyRiskManagementQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    incident_reporting_performance: {
        reporting_rate: number;
        reporting_timeliness: number;
        investigation_completion: number;
        action_implementation: number;
        recurrence_prevention: number;
        learning_dissemination: number;
    };
    proactive_risk_management: {
        risk_assessment_completion: number;
        mitigation_strategy_effectiveness: number;
        control_implementation: number;
        monitoring_system_performance: number;
        risk_reduction_achievement: number;
        prevention_success_rate: number;
    };
    safety_culture_strength: {
        psychological_safety_score: number;
        reporting_culture_index: number;
        learning_culture_rating: number;
        just_culture_implementation: number;
        leadership_commitment_level: number;
        staff_engagement_score: number;
    };
    high_reliability_implementation: {
        hro_principle_adoption: number;
        mindful_organizing_practices: number;
        safety_management_maturity: number;
        operational_excellence_achievement: number;
        leadership_practice_quality: number;
        team_performance_reliability: number;
    };
    harm_prevention_effectiveness: {
        harm_reduction_rate: number;
        prevention_program_success: number;
        intervention_sustainability: number;
        process_compliance: number;
        outcome_improvement: number;
        cost_effectiveness: number;
    };
    safety_performance_outcomes: {
        patient_safety_indicators: number;
        adverse_event_rate: number;
        near_miss_identification: number;
        harm_severity_reduction: number;
        safety_goal_achievement: number;
        benchmark_performance: number;
    };
    organizational_resilience: {
        adaptive_capacity: number;
        crisis_response_capability: number;
        learning_agility: number;
        innovation_adoption: number;
        stakeholder_confidence: number;
        reputation_maintenance: number;
    };
    continuous_improvement_culture: {
        improvement_initiative_rate: number;
        innovation_implementation: number;
        knowledge_sharing_effectiveness: number;
        best_practice_adoption: number;
        performance_monitoring_quality: number;
        excellence_pursuit: number;
    };
    created_at: Date;
    updated_at: Date;
}
