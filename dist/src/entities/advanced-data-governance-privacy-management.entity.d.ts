export declare class DataGovernanceFrameworks {
    id: string;
    governance_framework_id: string;
    framework_name: string;
    governance_scope: string;
    maturity_level: string;
    governance_organization: {
        data_governance_council: any;
        data_stewardship_roles: any[];
        data_ownership_assignments: any;
        decision_making_authority: any;
        escalation_procedures: any;
        communication_structures: any;
    };
    data_strategy_alignment: {
        strategic_objectives: any[];
        business_value_proposition: any;
        data_vision_mission: any;
        success_metrics: any;
        roadmap_priorities: any;
        investment_strategy: any;
    };
    policy_standards_framework: {
        data_policies: any[];
        data_standards: any[];
        procedures_guidelines: any[];
        compliance_requirements: any[];
        enforcement_mechanisms: any;
        exception_management: any;
    };
    data_lifecycle_management: {
        data_creation_capture: any;
        data_storage_organization: any;
        data_processing_analysis: any;
        data_sharing_distribution: any;
        data_archival: any;
        data_destruction: any;
    };
    risk_compliance_management: {
        risk_assessment_frameworks: any;
        compliance_monitoring: any;
        audit_procedures: any;
        violation_reporting: any;
        remediation_processes: any;
        continuous_improvement: any;
    };
    performance_monitoring: {
        governance_metrics: any[];
        dashboard_reporting: any;
        stakeholder_scorecards: any;
        maturity_assessments: any;
        benchmark_comparisons: any;
        improvement_tracking: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PrivacyProtectionSystems {
    id: string;
    privacy_system_id: string;
    system_name: string;
    privacy_framework: string;
    protection_scope: string;
    privacy_principles: {
        lawfulness_fairness: any;
        purpose_limitation: any;
        data_minimization: any;
        accuracy_integrity: any;
        storage_limitation: any;
        accountability_transparency: any;
    };
    consent_management: {
        consent_collection: any;
        consent_documentation: any;
        consent_withdrawal: any;
        granular_permissions: any;
        dynamic_consent: any;
        consent_analytics: any;
    };
    data_subject_rights: {
        access_rights: any;
        rectification_rights: any;
        erasure_rights: any;
        portability_rights: any;
        objection_rights: any;
        automated_processing_rights: any;
    };
    privacy_controls: {
        access_controls: any;
        encryption_mechanisms: any;
        anonymization_techniques: any;
        pseudonymization_methods: any;
        data_masking: any;
        secure_transmission: any;
    };
    privacy_impact_assessment: {
        pia_methodology: any;
        risk_identification: any;
        impact_evaluation: any;
        mitigation_measures: any;
        stakeholder_consultation: any;
        ongoing_monitoring: any;
    };
    breach_incident_management: {
        breach_detection: any;
        incident_response: any;
        notification_procedures: any;
        regulatory_reporting: any;
        remediation_actions: any;
        lessons_learned: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DataQualityManagementSystems {
    id: string;
    quality_system_id: string;
    system_name: string;
    quality_framework: string;
    quality_scope: string;
    quality_dimensions: {
        accuracy: any;
        completeness: any;
        consistency: any;
        timeliness: any;
        validity: any;
        uniqueness: any;
    };
    quality_assessment: {
        profiling_analysis: any;
        rule_based_validation: any;
        statistical_analysis: any;
        pattern_recognition: any;
        anomaly_detection: any;
        comparative_analysis: any;
    };
    quality_rules_standards: {
        business_rules: any[];
        technical_rules: any[];
        reference_data_standards: any[];
        validation_criteria: any[];
        quality_metrics: any[];
        threshold_definitions: any[];
    };
    monitoring_alerting: {
        real_time_monitoring: any;
        quality_dashboards: any;
        alert_notifications: any;
        trend_analysis: any;
        quality_scorecards: any;
        exception_reporting: any;
    };
    remediation_improvement: {
        root_cause_analysis: any;
        correction_procedures: any;
        prevention_measures: any;
        process_improvements: any;
        training_education: any;
        continuous_monitoring: any;
    };
    stakeholder_engagement: {
        data_steward_involvement: any;
        business_user_feedback: any;
        quality_communities: any;
        training_programs: any;
        change_management: any;
        culture_development: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DataLineageMetadataManagement {
    id: string;
    lineage_system_id: string;
    system_name: string;
    lineage_scope: string;
    capture_method: string;
    metadata_repository: {
        technical_metadata: any;
        business_metadata: any;
        operational_metadata: any;
        social_metadata: any;
        governance_metadata: any;
        quality_metadata: any;
    };
    lineage_tracking: {
        data_flow_mapping: any;
        transformation_tracking: any;
        dependency_analysis: any;
        impact_assessment: any;
        change_propagation: any;
        version_history: any;
    };
    visualization_tools: {
        lineage_diagrams: any;
        interactive_maps: any;
        dependency_graphs: any;
        impact_visualizations: any;
        drill_down_capabilities: any;
        export_capabilities: any;
    };
    integration_capabilities: {
        data_catalog_integration: any;
        etl_tool_integration: any;
        database_connectivity: any;
        api_integrations: any;
        cloud_platform_support: any;
        real_time_updates: any;
    };
    governance_support: {
        compliance_reporting: any;
        audit_trail_support: any;
        change_impact_analysis: any;
        risk_assessment_support: any;
        policy_enforcement: any;
        stakeholder_notifications: any;
    };
    analytics_insights: {
        usage_analytics: any;
        pattern_recognition: any;
        optimization_opportunities: any;
        performance_insights: any;
        trend_analysis: any;
        predictive_modeling: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class RegulatoryComplianceAutomation {
    id: string;
    compliance_automation_id: string;
    automation_name: string;
    regulatory_framework: string;
    automation_level: string;
    regulation_monitoring: {
        regulatory_change_tracking: any;
        impact_assessment: any;
        requirement_mapping: any;
        compliance_gap_analysis: any;
        update_notifications: any;
        stakeholder_alerts: any;
    };
    automated_controls: {
        policy_enforcement: any;
        access_controls: any;
        audit_logging: any;
        data_protection_measures: any;
        workflow_controls: any;
        exception_handling: any;
    };
    compliance_monitoring: {
        continuous_monitoring: any;
        real_time_assessments: any;
        compliance_scoring: any;
        risk_indicators: any;
        trend_analysis: any;
        predictive_compliance: any;
    };
    reporting_documentation: {
        automated_report_generation: any;
        regulatory_submissions: any;
        audit_documentation: any;
        evidence_collection: any;
        template_management: any;
        version_control: any;
    };
    remediation_workflows: {
        violation_detection: any;
        automated_remediation: any;
        escalation_procedures: any;
        corrective_action_tracking: any;
        approval_workflows: any;
        outcome_verification: any;
    };
    stakeholder_collaboration: {
        compliance_teams: any;
        legal_departments: any;
        audit_functions: any;
        business_units: any;
        external_advisors: any;
        regulatory_bodies: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DataGovernancePrivacyManagementMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    data_governance_maturity: {
        governance_framework_effectiveness: number;
        policy_compliance_rate: number;
        data_stewardship_engagement: number;
        decision_making_efficiency: number;
        stakeholder_satisfaction: number;
        governance_culture_development: number;
    };
    privacy_protection_effectiveness: {
        privacy_incident_rate: number;
        consent_management_quality: number;
        data_subject_request_fulfillment: number;
        privacy_by_design_implementation: number;
        breach_response_effectiveness: number;
        privacy_culture_strength: number;
    };
    data_quality_performance: {
        data_accuracy_score: number;
        data_completeness_rate: number;
        data_consistency_index: number;
        quality_issue_resolution_speed: number;
        stakeholder_data_confidence: number;
        quality_improvement_rate: number;
    };
    metadata_lineage_value: {
        metadata_coverage_completeness: number;
        lineage_accuracy_rate: number;
        impact_analysis_effectiveness: number;
        change_management_efficiency: number;
        discovery_time_reduction: number;
        governance_support_quality: number;
    };
    regulatory_compliance_performance: {
        compliance_automation_rate: number;
        regulatory_violation_prevention: number;
        audit_readiness_score: number;
        reporting_accuracy_timeliness: number;
        regulatory_change_adaptation: number;
        compliance_cost_efficiency: number;
    };
    data_risk_management: {
        data_risk_identification_rate: number;
        risk_mitigation_effectiveness: number;
        incident_response_quality: number;
        business_continuity_protection: number;
        reputation_risk_management: number;
        regulatory_risk_mitigation: number;
    };
    data_value_realization: {
        data_asset_utilization: number;
        analytics_enablement_quality: number;
        decision_support_effectiveness: number;
        innovation_data_contribution: number;
        competitive_advantage_creation: number;
        roi_data_investments: number;
    };
    organizational_data_capability: {
        data_literacy_development: number;
        data_culture_maturity: number;
        cross_functional_collaboration: number;
        data_innovation_capacity: number;
        change_adaptability: number;
        sustainable_governance_capability: number;
    };
    created_at: Date;
    updated_at: Date;
}
