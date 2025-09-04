export declare class RegulatoryComplianceManagement {
    id: string;
    compliance_id: string;
    regulation_name: string;
    regulatory_authority: string;
    regulation_type: string;
    compliance_requirements: {
        mandatory_requirements: any[];
        voluntary_guidelines: any[];
        reporting_obligations: any;
        documentation_requirements: any;
        training_requirements: any;
        audit_requirements: any;
    };
    compliance_status: {
        current_status: string;
        compliance_percentage: number;
        gap_analysis: any;
        risk_assessment: any;
        remediation_plan: any;
        timeline_milestones: any;
    };
    monitoring_framework: {
        compliance_monitoring: any;
        automated_tracking: any;
        manual_reviews: any;
        audit_schedules: any;
        reporting_cycles: any;
        escalation_procedures: any;
    };
    regulatory_updates: {
        update_tracking: any;
        impact_assessment: any;
        implementation_planning: any;
        change_management: any;
        communication_strategy: any;
        training_updates: any;
    };
    enforcement_actions: {
        citations_issued: any[];
        penalties_imposed: any;
        corrective_actions: any;
        settlement_agreements: any;
        consent_decrees: any;
        monitoring_agreements: any;
    };
    stakeholder_communication: {
        internal_reporting: any;
        external_reporting: any;
        regulatory_communication: any;
        board_reporting: any;
        public_disclosures: any;
        media_relations: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ContractManagementSystem {
    id: string;
    contract_id: string;
    contract_title: string;
    contract_type: string;
    contract_category: string;
    contract_details: {
        parties_involved: any;
        contract_value: number;
        contract_term: any;
        renewal_options: any;
        termination_clauses: any;
        performance_metrics: any;
    };
    legal_provisions: {
        liability_clauses: any;
        indemnification: any;
        insurance_requirements: any;
        intellectual_property: any;
        confidentiality: any;
        dispute_resolution: any;
    };
    compliance_requirements: {
        regulatory_compliance: any;
        industry_standards: any;
        quality_requirements: any;
        reporting_obligations: any;
        audit_rights: any;
        certification_requirements: any;
    };
    performance_monitoring: {
        key_performance_indicators: any;
        service_level_agreements: any;
        milestone_tracking: any;
        deliverable_management: any;
        quality_assessments: any;
        corrective_actions: any;
    };
    financial_management: {
        payment_terms: any;
        billing_procedures: any;
        cost_adjustments: any;
        penalty_structures: any;
        incentive_mechanisms: any;
        financial_reporting: any;
    };
    risk_management: {
        contract_risks: any;
        mitigation_strategies: any;
        contingency_planning: any;
        insurance_coverage: any;
        legal_remedies: any;
        exit_strategies: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class LitigationCaseManagement {
    id: string;
    case_id: string;
    case_title: string;
    case_type: string;
    case_status: string;
    case_details: {
        parties_involved: any;
        case_description: string;
        legal_claims: any[];
        damages_sought: number;
        jurisdiction: string;
        case_timeline: any;
    };
    legal_strategy: {
        defense_strategy: any;
        legal_arguments: any;
        evidence_strategy: any;
        expert_witnesses: any;
        settlement_strategy: any;
        appeal_strategy: any;
    };
    discovery_management: {
        document_requests: any;
        interrogatories: any;
        depositions: any;
        expert_discovery: any;
        electronic_discovery: any;
        privilege_issues: any;
    };
    cost_management: {
        legal_fees: number;
        expert_costs: number;
        court_costs: number;
        settlement_amounts: number;
        insurance_coverage: any;
        budget_tracking: any;
    };
    risk_assessment: {
        liability_exposure: any;
        financial_risk: any;
        reputational_risk: any;
        operational_impact: any;
        regulatory_implications: any;
        strategic_considerations: any;
    };
    resolution_outcome: {
        resolution_type: string;
        resolution_terms: any;
        financial_impact: number;
        lessons_learned: any;
        policy_changes: any;
        future_prevention: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class LegalPolicyDevelopment {
    id: string;
    policy_id: string;
    policy_title: string;
    policy_category: string;
    policy_type: string;
    policy_development: {
        purpose_objectives: any;
        scope_applicability: any;
        legal_requirements: any;
        stakeholder_input: any;
        expert_consultation: any;
        drafting_process: any;
    };
    legal_review: {
        legal_analysis: any;
        compliance_verification: any;
        risk_assessment: any;
        liability_considerations: any;
        regulatory_alignment: any;
        best_practices_review: any;
    };
    approval_process: {
        review_committees: any;
        approval_authorities: any;
        stakeholder_feedback: any;
        revision_cycles: any;
        final_approval: any;
        implementation_planning: any;
    };
    implementation_support: {
        training_programs: any;
        communication_strategy: any;
        implementation_timeline: any;
        resource_requirements: any;
        change_management: any;
        monitoring_mechanisms: any;
    };
    policy_maintenance: {
        review_schedule: any;
        update_triggers: any;
        version_control: any;
        change_tracking: any;
        stakeholder_notification: any;
        continuous_improvement: any;
    };
    effectiveness_measurement: {
        compliance_metrics: any;
        performance_indicators: any;
        outcome_measures: any;
        feedback_mechanisms: any;
        audit_findings: any;
        improvement_opportunities: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class IntellectualPropertyManagement {
    id: string;
    ip_id: string;
    ip_title: string;
    ip_type: string;
    ip_category: string;
    ip_details: {
        invention_description: string;
        inventors: any[];
        creation_date: Date;
        development_stage: string;
        commercial_potential: any;
        competitive_landscape: any;
    };
    protection_strategy: {
        protection_type: string;
        filing_strategy: any;
        geographic_coverage: string[];
        timing_considerations: any;
        cost_considerations: any;
        enforcement_strategy: any;
    };
    legal_proceedings: {
        patent_applications: any[];
        prosecution_history: any;
        oppositions_challenges: any;
        licensing_negotiations: any;
        infringement_matters: any;
        enforcement_actions: any;
    };
    commercialization: {
        licensing_opportunities: any;
        partnership_potential: any;
        market_analysis: any;
        revenue_projections: any;
        commercialization_timeline: any;
        go_to_market_strategy: any;
    };
    portfolio_management: {
        portfolio_strategy: any;
        value_assessment: any;
        maintenance_decisions: any;
        pruning_strategy: any;
        competitive_analysis: any;
        strategic_planning: any;
    };
    risk_management: {
        freedom_to_operate: any;
        infringement_risks: any;
        validity_challenges: any;
        competitive_threats: any;
        regulatory_risks: any;
        mitigation_strategies: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareLegalQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    compliance_performance: {
        regulatory_compliance_rate: number;
        audit_pass_rate: number;
        citation_reduction_rate: number;
        corrective_action_completion: number;
        policy_compliance_score: number;
        training_completion_rate: number;
    };
    legal_risk_management: {
        risk_identification_rate: number;
        risk_mitigation_effectiveness: number;
        litigation_prevention_success: number;
        contract_compliance_score: number;
        legal_cost_optimization: number;
        insurance_claim_reduction: number;
    };
    operational_efficiency: {
        legal_review_turnaround: number;
        contract_negotiation_time: number;
        policy_development_speed: number;
        legal_cost_per_case: number;
        automation_adoption_rate: number;
        process_standardization: number;
    };
    stakeholder_satisfaction: {
        internal_client_satisfaction: number;
        business_partner_satisfaction: number;
        regulatory_relationship_quality: number;
        vendor_relationship_score: number;
        board_confidence_level: number;
        external_counsel_effectiveness: number;
    };
    strategic_impact: {
        business_objective_support: number;
        strategic_initiative_enablement: number;
        competitive_advantage_protection: number;
        market_opportunity_facilitation: number;
        innovation_protection_rate: number;
        partnership_facilitation: number;
    };
    quality_assurance: {
        legal_document_quality: number;
        advice_accuracy_rate: number;
        precedent_consistency: number;
        knowledge_management_effectiveness: number;
        professional_development_progress: number;
        external_recognition: number;
    };
    innovation_advancement: {
        legal_technology_adoption: number;
        process_innovation_rate: number;
        best_practice_development: number;
        knowledge_sharing_effectiveness: number;
        industry_leadership_recognition: number;
        thought_leadership_contribution: number;
    };
    continuous_improvement: {
        process_improvement_rate: number;
        efficiency_gain_achievement: number;
        quality_enhancement_progress: number;
        stakeholder_feedback_integration: number;
        professional_development_investment: number;
        adaptation_to_change: number;
    };
    created_at: Date;
    updated_at: Date;
}
