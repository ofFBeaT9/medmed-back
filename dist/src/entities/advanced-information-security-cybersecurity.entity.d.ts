export declare class CybersecurityFramework {
    id: string;
    framework_id: string;
    framework_name: string;
    framework_type: string;
    implementation_level: string;
    security_domains: {
        identify: any;
        protect: any;
        detect: any;
        respond: any;
        recover: any;
    };
    governance_structure: {
        security_policies: any[];
        procedures_standards: any[];
        roles_responsibilities: any;
        compliance_requirements: any;
        risk_management: any;
        performance_metrics: any;
    };
    threat_landscape: {
        threat_intelligence: any;
        attack_vectors: string[];
        vulnerability_assessment: any;
        risk_scenarios: any;
        threat_modeling: any;
        impact_analysis: any;
    };
    security_controls: {
        administrative_controls: any;
        technical_controls: any;
        physical_controls: any;
        preventive_controls: any;
        detective_controls: any;
        corrective_controls: any;
    };
    compliance_mapping: {
        regulatory_requirements: any;
        audit_requirements: any;
        certification_standards: any;
        gap_analysis: any;
        remediation_plans: any;
        continuous_monitoring: any;
    };
    maturity_assessment: {
        current_maturity_level: number;
        target_maturity_level: number;
        improvement_roadmap: any;
        capability_gaps: any;
        investment_requirements: any;
        timeline_milestones: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ThreatDetectionResponse {
    id: string;
    threat_id: string;
    threat_description: string;
    threat_type: string;
    severity_level: string;
    detection_mechanisms: {
        signature_based: any;
        behavioral_analysis: any;
        anomaly_detection: any;
        machine_learning: any;
        threat_intelligence: any;
        user_reporting: any;
    };
    threat_indicators: {
        iocs: any[];
        network_indicators: any;
        host_indicators: any;
        behavioral_indicators: any;
        temporal_indicators: any;
        contextual_indicators: any;
    };
    impact_assessment: {
        affected_systems: string[];
        data_compromise: any;
        service_disruption: any;
        financial_impact: number;
        reputational_impact: any;
        regulatory_impact: any;
    };
    response_actions: {
        immediate_containment: any;
        evidence_preservation: any;
        system_isolation: any;
        threat_eradication: any;
        system_recovery: any;
        lessons_learned: any;
    };
    investigation_details: {
        forensic_analysis: any;
        attack_timeline: any;
        attack_methodology: any;
        attribution_analysis: any;
        root_cause_analysis: any;
        recommendations: any;
    };
    communication_plan: {
        internal_notifications: any;
        external_notifications: any;
        regulatory_reporting: any;
        customer_communication: any;
        media_relations: any;
        stakeholder_updates: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class AccessControlManagement {
    id: string;
    access_control_id: string;
    user_id: string;
    user_identity: string;
    access_type: string;
    identity_verification: {
        authentication_methods: string[];
        identity_providers: any;
        verification_status: string;
        trust_level: number;
        risk_score: number;
        verification_history: any[];
    };
    authorization_framework: {
        role_based_access: any;
        attribute_based_access: any;
        policy_based_access: any;
        risk_based_access: any;
        contextual_access: any;
        dynamic_authorization: any;
    };
    permission_management: {
        granted_permissions: string[];
        denied_permissions: string[];
        conditional_permissions: any;
        temporary_permissions: any;
        escalated_privileges: any;
        permission_inheritance: any;
    };
    session_management: {
        session_creation: any;
        session_monitoring: any;
        session_timeout: any;
        concurrent_sessions: any;
        session_termination: any;
        session_analytics: any;
    };
    access_monitoring: {
        access_attempts: any[];
        successful_access: any[];
        failed_access: any[];
        suspicious_activity: any[];
        privilege_usage: any;
        compliance_tracking: any;
    };
    privileged_access: {
        admin_access: any;
        emergency_access: any;
        break_glass_access: any;
        elevated_privileges: any;
        approval_workflows: any;
        audit_requirements: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DataProtectionPrivacy {
    id: string;
    protection_id: string;
    data_classification: string;
    data_category: string;
    sensitivity_level: string;
    encryption_management: {
        encryption_at_rest: any;
        encryption_in_transit: any;
        encryption_in_use: any;
        key_management: any;
        encryption_algorithms: string[];
        certificate_management: any;
    };
    data_lifecycle: {
        data_creation: any;
        data_storage: any;
        data_processing: any;
        data_sharing: any;
        data_retention: any;
        data_destruction: any;
    };
    privacy_controls: {
        consent_management: any;
        purpose_limitation: any;
        data_minimization: any;
        accuracy_controls: any;
        transparency_measures: any;
        individual_rights: any;
    };
    compliance_framework: {
        hipaa_compliance: any;
        gdpr_compliance: any;
        ccpa_compliance: any;
        hitech_compliance: any;
        state_regulations: any;
        international_standards: any;
    };
    data_loss_prevention: {
        dlp_policies: any;
        content_inspection: any;
        data_classification: any;
        policy_enforcement: any;
        incident_detection: any;
        remediation_actions: any;
    };
    breach_management: {
        breach_detection: any;
        impact_assessment: any;
        notification_requirements: any;
        regulatory_reporting: any;
        remediation_measures: any;
        prevention_strategies: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SecurityAnalyticsMonitoring {
    id: string;
    analytics_id: string;
    monitoring_scope: string;
    analytics_type: string;
    security_metrics: {
        threat_detection_rate: number;
        false_positive_rate: number;
        incident_response_time: number;
        security_coverage: number;
        vulnerability_exposure: number;
        compliance_score: number;
    };
    behavioral_analytics: {
        user_behavior_analysis: any;
        entity_behavior_analysis: any;
        network_behavior_analysis: any;
        application_behavior_analysis: any;
        anomaly_detection: any;
        risk_scoring: any;
    };
    threat_intelligence: {
        external_feeds: any;
        internal_intelligence: any;
        contextual_analysis: any;
        threat_correlation: any;
        predictive_modeling: any;
        actionable_insights: any;
    };
    security_dashboards: {
        executive_dashboard: any;
        operational_dashboard: any;
        tactical_dashboard: any;
        compliance_dashboard: any;
        incident_dashboard: any;
        performance_dashboard: any;
    };
    automated_response: {
        response_playbooks: any;
        automated_containment: any;
        orchestrated_response: any;
        machine_learning: any;
        decision_engines: any;
        feedback_loops: any;
    };
    continuous_monitoring: {
        real_time_monitoring: any;
        log_analysis: any;
        network_monitoring: any;
        endpoint_monitoring: any;
        cloud_monitoring: any;
        application_monitoring: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareCybersecurityQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    security_effectiveness: {
        threat_detection_accuracy: number;
        incident_response_time: number;
        vulnerability_remediation_rate: number;
        security_control_effectiveness: number;
        false_positive_reduction: number;
        security_coverage_percentage: number;
    };
    compliance_performance: {
        regulatory_compliance_score: number;
        audit_pass_rate: number;
        policy_compliance_rate: number;
        control_implementation_rate: number;
        documentation_completeness: number;
        certification_maintenance: number;
    };
    risk_management: {
        risk_reduction_percentage: number;
        risk_assessment_coverage: number;
        mitigation_effectiveness: number;
        residual_risk_level: number;
        risk_appetite_alignment: number;
        business_impact_reduction: number;
    };
    operational_efficiency: {
        security_automation_rate: number;
        mean_time_to_detection: number;
        mean_time_to_response: number;
        security_tool_integration: number;
        process_optimization: number;
        resource_utilization: number;
    };
    user_awareness: {
        training_completion_rate: number;
        phishing_simulation_success: number;
        security_incident_reporting: number;
        policy_acknowledgment_rate: number;
        security_culture_index: number;
        behavioral_change_metrics: number;
    };
    technology_effectiveness: {
        security_tool_performance: number;
        integration_success_rate: number;
        automation_adoption: number;
        ai_ml_effectiveness: number;
        threat_intelligence_quality: number;
        innovation_implementation: number;
    };
    business_impact: {
        security_roi: number;
        business_continuity_score: number;
        reputation_protection: number;
        customer_trust_index: number;
        financial_loss_prevention: number;
        competitive_advantage: number;
    };
    continuous_improvement: {
        security_maturity_advancement: number;
        process_improvement_rate: number;
        innovation_adoption: number;
        best_practices_implementation: number;
        knowledge_sharing_effectiveness: number;
        adaptation_to_threats: number;
    };
    created_at: Date;
    updated_at: Date;
}
