export declare class GlobalHealthPartnerships {
    id: string;
    partnership_id: string;
    partnership_name: string;
    partnership_type: string;
    scope: string;
    partner_organizations: {
        lead_organization: any;
        implementing_partners: any[];
        funding_partners: any[];
        technical_partners: any[];
        community_partners: any[];
        government_partners: any[];
    };
    strategic_objectives: {
        health_goals: any[];
        capacity_building: any;
        system_strengthening: any;
        knowledge_exchange: any;
        resource_mobilization: any;
        policy_harmonization: any;
    };
    governance_structure: {
        steering_committee: any;
        working_groups: any;
        advisory_boards: any;
        decision_making_processes: any;
        accountability_mechanisms: any;
        conflict_resolution: any;
    };
    resource_management: {
        funding_sources: any[];
        budget_allocation: any;
        resource_sharing: any;
        cost_sharing_mechanisms: any;
        financial_reporting: any;
        audit_procedures: any;
    };
    implementation_framework: {
        work_plans: any;
        milestone_tracking: any;
        performance_indicators: any;
        monitoring_evaluation: any;
        adaptive_management: any;
        learning_mechanisms: any;
    };
    knowledge_sharing: {
        best_practices: any;
        lessons_learned: any;
        research_collaboration: any;
        data_sharing: any;
        technical_assistance: any;
        capacity_transfer: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class CrossBorderHealthInitiatives {
    id: string;
    initiative_id: string;
    initiative_name: string;
    initiative_type: string;
    geographic_scope: string;
    participating_countries: {
        primary_countries: any[];
        supporting_countries: any[];
        observer_countries: any[];
        regional_organizations: any[];
        international_bodies: any[];
        coordination_mechanisms: any;
    };
    health_priorities: {
        communicable_diseases: any[];
        non_communicable_diseases: any[];
        emergency_preparedness: any;
        health_security: any;
        migration_health: any;
        environmental_health: any;
    };
    coordination_mechanisms: {
        joint_committees: any;
        technical_working_groups: any;
        information_sharing: any;
        early_warning_systems: any;
        rapid_response_teams: any;
        resource_pooling: any;
    };
    capacity_building: {
        workforce_development: any;
        infrastructure_strengthening: any;
        technology_transfer: any;
        laboratory_networks: any;
        surveillance_systems: any;
        regulatory_harmonization: any;
    };
    operational_activities: {
        joint_operations: any;
        information_exchange: any;
        resource_sharing: any;
        coordinated_responses: any;
        joint_procurement: any;
        harmonized_protocols: any;
    };
    sustainability_mechanisms: {
        institutional_frameworks: any;
        financing_mechanisms: any;
        political_commitment: any;
        community_engagement: any;
        private_sector_involvement: any;
        long_term_planning: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HumanitarianHealthResponses {
    id: string;
    response_id: string;
    emergency_name: string;
    emergency_type: string;
    response_phase: string;
    situation_analysis: {
        affected_population: any;
        health_needs_assessment: any;
        vulnerability_analysis: any;
        capacity_assessment: any;
        access_constraints: any;
        security_situation: any;
    };
    health_interventions: {
        emergency_care: any;
        primary_healthcare: any;
        disease_prevention: any;
        mental_health: any;
        nutrition_support: any;
        reproductive_health: any;
    };
    coordination_mechanisms: {
        cluster_coordination: any;
        inter_agency_coordination: any;
        government_coordination: any;
        military_coordination: any;
        logistics_coordination: any;
        information_management: any;
    };
    resource_mobilization: {
        funding_appeals: any;
        resource_requirements: any;
        donor_coordination: any;
        procurement_logistics: any;
        supply_chain_management: any;
        asset_tracking: any;
    };
    quality_standards: {
        sphere_standards: any;
        who_guidelines: any;
        do_no_harm: any;
        accountability_mechanisms: any;
        beneficiary_feedback: any;
        continuous_improvement: any;
    };
    transition_planning: {
        recovery_planning: any;
        capacity_handover: any;
        sustainability_measures: any;
        resilience_building: any;
        development_linkages: any;
        lessons_learned: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class GlobalDiseaseSurveillance {
    id: string;
    surveillance_id: string;
    surveillance_network: string;
    surveillance_type: string;
    coverage_scope: string;
    surveillance_objectives: {
        early_detection: any;
        outbreak_investigation: any;
        trend_monitoring: any;
        risk_assessment: any;
        prevention_guidance: any;
        response_coordination: any;
    };
    data_sources: {
        national_systems: any[];
        laboratory_networks: any[];
        healthcare_facilities: any[];
        community_surveillance: any;
        digital_platforms: any;
        international_reporting: any;
    };
    data_management: {
        data_collection: any;
        data_validation: any;
        data_integration: any;
        real_time_analysis: any;
        data_sharing: any;
        privacy_protection: any;
    };
    analytical_capabilities: {
        epidemiological_analysis: any;
        risk_modeling: any;
        predictive_analytics: any;
        spatial_analysis: any;
        genomic_surveillance: any;
        artificial_intelligence: any;
    };
    alert_systems: {
        detection_algorithms: any;
        verification_processes: any;
        risk_assessment: any;
        alert_dissemination: any;
        response_activation: any;
        escalation_procedures: any;
    };
    international_coordination: {
        who_reporting: any;
        regional_networks: any;
        bilateral_sharing: any;
        research_collaboration: any;
        capacity_building: any;
        policy_harmonization: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthDiplomacyInitiatives {
    id: string;
    diplomacy_id: string;
    initiative_name: string;
    diplomacy_type: string;
    policy_area: string;
    diplomatic_actors: {
        government_entities: any[];
        international_organizations: any[];
        non_state_actors: any[];
        academic_institutions: any[];
        civil_society: any[];
        private_sector: any[];
    };
    negotiation_processes: {
        agenda_setting: any;
        stakeholder_engagement: any;
        position_development: any;
        negotiation_strategies: any;
        consensus_building: any;
        agreement_finalization: any;
    };
    health_governance: {
        global_health_governance: any;
        regulatory_frameworks: any;
        standard_setting: any;
        compliance_mechanisms: any;
        dispute_resolution: any;
        institutional_development: any;
    };
    soft_power_tools: {
        technical_assistance: any;
        capacity_building: any;
        knowledge_sharing: any;
        cultural_exchange: any;
        humanitarian_aid: any;
        scientific_cooperation: any;
    };
    conflict_transformation: {
        health_as_bridge: any;
        cease_fire_negotiations: any;
        humanitarian_corridors: any;
        post_conflict_reconstruction: any;
        reconciliation_processes: any;
        peace_building: any;
    };
    implementation_mechanisms: {
        institutional_arrangements: any;
        monitoring_frameworks: any;
        accountability_systems: any;
        review_processes: any;
        adaptive_mechanisms: any;
        success_metrics: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class GlobalHealthInternationalCooperationQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    partnership_effectiveness: {
        collaboration_quality: number;
        goal_achievement: number;
        resource_efficiency: number;
        knowledge_transfer: number;
        capacity_building_success: number;
        sustainability_establishment: number;
    };
    cross_border_coordination: {
        coordination_effectiveness: number;
        information_sharing_quality: number;
        joint_response_capability: number;
        resource_pooling_efficiency: number;
        harmonization_achievement: number;
        political_commitment_strength: number;
    };
    humanitarian_response_quality: {
        response_timeliness: number;
        coverage_adequacy: number;
        service_quality: number;
        coordination_effectiveness: number;
        beneficiary_satisfaction: number;
        transition_planning_success: number;
    };
    surveillance_system_performance: {
        detection_sensitivity: number;
        reporting_timeliness: number;
        data_quality: number;
        alert_accuracy: number;
        response_coordination: number;
        international_compliance: number;
    };
    diplomacy_impact: {
        negotiation_success: number;
        agreement_implementation: number;
        relationship_building: number;
        conflict_resolution_contribution: number;
        governance_improvement: number;
        global_health_advancement: number;
    };
    health_outcome_improvement: {
        population_health_gains: number;
        health_equity_advancement: number;
        system_strengthening: number;
        emergency_preparedness: number;
        sustainable_development_progress: number;
        global_health_security: number;
    };
    capacity_development: {
        institutional_strengthening: number;
        workforce_development: number;
        infrastructure_improvement: number;
        technology_transfer: number;
        knowledge_advancement: number;
        innovation_fostering: number;
    };
    international_cooperation_advancement: {
        multilateral_engagement: number;
        south_south_cooperation: number;
        triangular_partnerships: number;
        global_solidarity: number;
        shared_responsibility: number;
        collective_action_effectiveness: number;
    };
    created_at: Date;
    updated_at: Date;
}
