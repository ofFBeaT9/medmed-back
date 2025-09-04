export declare class InnovationManagementSystem {
    id: string;
    innovation_id: string;
    innovation_title: string;
    innovation_type: string;
    innovation_category: string;
    innovation_concept: {
        problem_statement: string;
        solution_description: string;
        value_proposition: any;
        target_market: any;
        competitive_advantage: any;
        success_metrics: any;
    };
    development_stage: {
        current_stage: string;
        stage_gate_criteria: any;
        milestone_achievements: any;
        resource_requirements: any;
        timeline_projections: any;
        risk_assessments: any;
    };
    research_foundation: {
        scientific_basis: any;
        literature_review: any;
        preliminary_studies: any;
        proof_of_concept: any;
        feasibility_analysis: any;
        regulatory_pathway: any;
    };
    team_collaboration: {
        project_team: any[];
        advisory_board: any[];
        external_collaborators: any;
        expertise_requirements: any;
        mentorship_network: any;
        stakeholder_engagement: any;
    };
    funding_strategy: {
        funding_sources: string[];
        budget_requirements: number;
        funding_timeline: any;
        grant_applications: any;
        investor_relationships: any;
        financial_projections: any;
    };
    impact_assessment: {
        clinical_impact: any;
        patient_outcomes: any;
        economic_impact: any;
        social_benefits: any;
        environmental_impact: any;
        global_health_potential: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ResearchDevelopmentPortfolio {
    id: string;
    portfolio_id: string;
    portfolio_name: string;
    research_focus: string;
    therapeutic_area: string;
    portfolio_strategy: {
        strategic_objectives: any;
        research_priorities: any;
        resource_allocation: any;
        risk_balance: any;
        timeline_coordination: any;
        success_criteria: any;
    };
    project_pipeline: {
        early_stage_projects: any[];
        development_projects: any[];
        late_stage_projects: any[];
        commercialization_ready: any[];
        pipeline_metrics: any;
        portfolio_balance: any;
    };
    research_capabilities: {
        core_competencies: any;
        research_infrastructure: any;
        technology_platforms: any;
        analytical_capabilities: any;
        clinical_expertise: any;
        external_partnerships: any;
    };
    collaboration_network: {
        academic_partnerships: any;
        industry_collaborations: any;
        government_agencies: any;
        international_partners: any;
        patient_organizations: any;
        regulatory_bodies: any;
    };
    resource_management: {
        funding_portfolio: any;
        talent_resources: any;
        equipment_facilities: any;
        technology_access: any;
        data_resources: any;
        service_providers: any;
    };
    performance_metrics: {
        research_productivity: any;
        innovation_output: any;
        collaboration_success: any;
        commercial_potential: any;
        scientific_impact: any;
        roi_measurements: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TechnologyTransferOffice {
    id: string;
    tto_id: string;
    invention_title: string;
    invention_category: string;
    development_stage: string;
    invention_details: {
        technology_description: string;
        inventors: any[];
        invention_date: Date;
        prior_art_analysis: any;
        technical_advantages: any;
        market_applications: any;
    };
    ip_protection: {
        patent_strategy: any;
        filing_status: any;
        prosecution_timeline: any;
        international_filings: any;
        trade_secret_protection: any;
        copyright_considerations: any;
    };
    market_assessment: {
        market_size: any;
        competitive_landscape: any;
        target_customers: any;
        commercial_potential: any;
        regulatory_requirements: any;
        development_timeline: any;
    };
    commercialization_strategy: {
        licensing_approach: any;
        startup_creation: any;
        industry_partnerships: any;
        development_funding: any;
        market_entry_strategy: any;
        revenue_projections: any;
    };
    licensing_activities: {
        licensing_negotiations: any;
        license_agreements: any;
        royalty_structures: any;
        milestone_payments: any;
        performance_metrics: any;
        relationship_management: any;
    };
    startup_support: {
        entrepreneur_identification: any;
        business_plan_development: any;
        funding_assistance: any;
        incubation_programs: any;
        mentorship_networks: any;
        market_validation: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ClinicalResearchInnovation {
    id: string;
    research_id: string;
    study_title: string;
    study_type: string;
    innovation_focus: string;
    research_design: {
        study_objectives: any;
        study_population: any;
        intervention_details: any;
        outcome_measures: any;
        statistical_plan: any;
        ethical_considerations: any;
    };
    innovation_elements: {
        novel_technologies: any;
        innovative_endpoints: any;
        digital_tools: any;
        personalized_approaches: any;
        adaptive_designs: any;
        patient_engagement: any;
    };
    regulatory_strategy: {
        regulatory_pathway: any;
        agency_interactions: any;
        guidance_documents: any;
        fast_track_designations: any;
        orphan_drug_status: any;
        breakthrough_therapy: any;
    };
    data_innovation: {
        data_collection_methods: any;
        real_world_data: any;
        digital_biomarkers: any;
        ai_analytics: any;
        predictive_modeling: any;
        data_sharing_initiatives: any;
    };
    collaboration_network: {
        investigator_network: any;
        patient_advocacy_groups: any;
        technology_partners: any;
        regulatory_advisors: any;
        statistical_collaborators: any;
        international_consortiums: any;
    };
    impact_potential: {
        patient_benefit: any;
        clinical_practice_change: any;
        healthcare_economics: any;
        scientific_advancement: any;
        public_health_impact: any;
        global_accessibility: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class InnovationIncubatorProgram {
    id: string;
    program_id: string;
    program_name: string;
    program_type: string;
    focus_area: string;
    program_structure: {
        program_duration: any;
        cohort_size: number;
        selection_criteria: any;
        curriculum_design: any;
        mentorship_model: any;
        graduation_requirements: any;
    };
    participant_support: {
        funding_provision: any;
        workspace_access: any;
        technical_resources: any;
        business_development: any;
        regulatory_guidance: any;
        market_access: any;
    };
    mentor_network: {
        industry_experts: any;
        successful_entrepreneurs: any;
        clinical_advisors: any;
        regulatory_specialists: any;
        investor_network: any;
        technology_experts: any;
    };
    success_metrics: {
        graduation_rate: number;
        funding_secured: number;
        patents_filed: number;
        partnerships_formed: number;
        jobs_created: number;
        revenue_generated: number;
    };
    alumni_network: {
        graduated_companies: any[];
        success_stories: any;
        continued_support: any;
        mentorship_opportunities: any;
        network_events: any;
        knowledge_sharing: any;
    };
    ecosystem_impact: {
        innovation_culture: any;
        knowledge_transfer: any;
        economic_development: any;
        talent_development: any;
        partnership_facilitation: any;
        research_translation: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareInnovationQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    innovation_performance: {
        innovation_pipeline_strength: number;
        project_success_rate: number;
        time_to_market: number;
        research_productivity: number;
        patent_application_rate: number;
        technology_transfer_success: number;
    };
    research_excellence: {
        publication_impact: number;
        research_funding_secured: number;
        collaboration_effectiveness: number;
        scientific_recognition: number;
        peer_review_success: number;
        research_translation_rate: number;
    };
    commercialization_success: {
        licensing_revenue: number;
        startup_creation_rate: number;
        product_launch_success: number;
        market_penetration: number;
        customer_adoption: number;
        competitive_positioning: number;
    };
    talent_development: {
        researcher_retention_rate: number;
        skill_development_progress: number;
        career_advancement: number;
        external_recognition: number;
        knowledge_sharing_effectiveness: number;
        innovation_culture_index: number;
    };
    partnership_effectiveness: {
        collaboration_quality: number;
        partnership_sustainability: number;
        knowledge_exchange: number;
        resource_leverage: number;
        joint_innovation_success: number;
        network_expansion: number;
    };
    societal_impact: {
        patient_benefit_realization: number;
        healthcare_improvement: number;
        economic_value_creation: number;
        global_health_contribution: number;
        sustainability_advancement: number;
        health_equity_promotion: number;
    };
    strategic_alignment: {
        organizational_goal_support: number;
        market_opportunity_capture: number;
        competitive_advantage_creation: number;
        future_preparedness: number;
        risk_management_effectiveness: number;
        strategic_adaptability: number;
    };
    continuous_innovation: {
        innovation_capability_building: number;
        process_improvement_rate: number;
        technology_adoption_speed: number;
        learning_organization_index: number;
        adaptive_capacity: number;
        innovation_ecosystem_health: number;
    };
    created_at: Date;
    updated_at: Date;
}
