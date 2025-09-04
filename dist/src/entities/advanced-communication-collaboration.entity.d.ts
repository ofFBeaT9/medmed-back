export declare class ClinicalCommunicationSystems {
    id: string;
    communication_id: string;
    system_name: string;
    communication_type: string;
    priority_level: string;
    messaging_capabilities: {
        secure_messaging: any;
        group_communications: any;
        broadcast_alerts: any;
        file_attachments: any;
        multimedia_support: any;
        message_encryption: any;
    };
    clinical_context: {
        patient_information: any;
        clinical_data_integration: any;
        order_communication: any;
        result_notifications: any;
        care_plan_updates: any;
        clinical_decision_support: any;
    };
    workflow_integration: {
        ehr_integration: any;
        notification_routing: any;
        escalation_protocols: any;
        response_tracking: any;
        workflow_triggers: any;
        automated_responses: any;
    };
    security_compliance: {
        hipaa_compliance: any;
        access_controls: any;
        audit_logging: any;
        data_encryption: any;
        identity_verification: any;
        privacy_protection: any;
    };
    communication_analytics: {
        response_times: any;
        communication_patterns: any;
        workflow_efficiency: any;
        user_engagement: any;
        system_performance: any;
        quality_metrics: any;
    };
    interoperability_features: {
        cross_platform_messaging: any;
        api_integrations: any;
        standard_protocols: any;
        data_exchange: any;
        system_connectivity: any;
        vendor_compatibility: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class CareTeamCoordinationPlatforms {
    id: string;
    coordination_id: string;
    patient_id: string;
    care_setting: string;
    coordination_model: string;
    care_team_composition: {
        team_members: any[];
        roles_responsibilities: any;
        communication_preferences: any;
        availability_schedules: any;
        contact_information: any;
        expertise_specializations: any;
    };
    coordination_workflows: {
        care_planning: any;
        goal_setting: any;
        task_assignment: any;
        progress_monitoring: any;
        decision_making: any;
        care_transitions: any;
    };
    collaborative_tools: {
        shared_care_plans: any;
        team_messaging: any;
        virtual_meetings: any;
        document_sharing: any;
        real_time_updates: any;
        mobile_access: any;
    };
    care_coordination_processes: {
        admission_coordination: any;
        discharge_planning: any;
        referral_management: any;
        follow_up_coordination: any;
        emergency_coordination: any;
        chronic_care_management: any;
    };
    patient_family_engagement: {
        communication_channels: any;
        shared_decision_making: any;
        education_resources: any;
        progress_sharing: any;
        feedback_collection: any;
        support_systems: any;
    };
    coordination_outcomes: {
        care_quality_indicators: any;
        patient_satisfaction: any;
        team_satisfaction: any;
        efficiency_measures: any;
        cost_effectiveness: any;
        safety_outcomes: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PatientCommunicationEngagement {
    id: string;
    engagement_id: string;
    patient_id: string;
    communication_channel: string;
    engagement_type: string;
    patient_portal_features: {
        health_records_access: any;
        appointment_scheduling: any;
        prescription_refills: any;
        test_results_viewing: any;
        provider_messaging: any;
        educational_resources: any;
    };
    mobile_health_capabilities: {
        symptom_tracking: any;
        medication_reminders: any;
        health_monitoring: any;
        care_plan_access: any;
        virtual_consultations: any;
        emergency_contacts: any;
    };
    personalized_communication: {
        preferred_languages: any;
        communication_preferences: any;
        health_literacy_level: any;
        cultural_considerations: any;
        accessibility_needs: any;
        contact_preferences: any;
    };
    educational_content: {
        condition_specific_education: any;
        treatment_explanations: any;
        preventive_care_guidance: any;
        medication_information: any;
        lifestyle_recommendations: any;
        self_management_tools: any;
    };
    automated_communications: {
        appointment_reminders: any;
        medication_alerts: any;
        preventive_care_notifications: any;
        follow_up_messages: any;
        health_tips: any;
        satisfaction_surveys: any;
    };
    engagement_analytics: {
        communication_frequency: any;
        response_rates: any;
        engagement_patterns: any;
        portal_utilization: any;
        satisfaction_scores: any;
        outcome_correlations: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TelehealthCollaborationSystems {
    id: string;
    telehealth_id: string;
    session_id: string;
    session_type: string;
    technology_platform: string;
    virtual_consultation_features: {
        high_definition_video: any;
        audio_quality: any;
        screen_sharing: any;
        document_collaboration: any;
        real_time_annotations: any;
        recording_capabilities: any;
    };
    remote_monitoring_integration: {
        vital_signs_monitoring: any;
        device_connectivity: any;
        real_time_data_streaming: any;
        alert_systems: any;
        trend_analysis: any;
        intervention_triggers: any;
    };
    collaborative_care_tools: {
        multi_provider_sessions: any;
        specialist_consultations: any;
        team_conferences: any;
        case_presentations: any;
        shared_decision_making: any;
        care_plan_coordination: any;
    };
    technical_infrastructure: {
        platform_reliability: any;
        security_protocols: any;
        bandwidth_optimization: any;
        cross_device_compatibility: any;
        integration_apis: any;
        backup_systems: any;
    };
    quality_assurance: {
        session_quality_monitoring: any;
        technical_support: any;
        user_experience_optimization: any;
        performance_analytics: any;
        issue_resolution: any;
        continuous_improvement: any;
    };
    regulatory_compliance: {
        licensure_verification: any;
        privacy_protection: any;
        consent_management: any;
        documentation_standards: any;
        billing_integration: any;
        audit_capabilities: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SecureMessagingInfrastructure {
    id: string;
    messaging_system_id: string;
    infrastructure_name: string;
    deployment_model: string;
    security_framework: string;
    encryption_protocols: {
        message_encryption: any;
        transport_security: any;
        data_at_rest: any;
        key_management: any;
        certificate_management: any;
        cryptographic_standards: any;
    };
    access_control_systems: {
        user_authentication: any;
        role_based_access: any;
        permission_management: any;
        session_management: any;
        single_sign_on: any;
        privileged_access: any;
    };
    compliance_features: {
        hipaa_safeguards: any;
        gdpr_compliance: any;
        audit_logging: any;
        data_retention: any;
        privacy_controls: any;
        regulatory_reporting: any;
    };
    scalability_performance: {
        message_throughput: any;
        concurrent_users: any;
        response_times: any;
        availability_uptime: any;
        disaster_recovery: any;
        load_balancing: any;
    };
    integration_capabilities: {
        api_gateway: any;
        webhook_support: any;
        third_party_connectors: any;
        protocol_support: any;
        data_synchronization: any;
        middleware_integration: any;
    };
    monitoring_analytics: {
        system_monitoring: any;
        security_analytics: any;
        usage_statistics: any;
        performance_metrics: any;
        threat_detection: any;
        incident_response: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class CommunicationCollaborationQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    clinical_communication_effectiveness: {
        message_response_time: number;
        communication_accuracy: number;
        workflow_efficiency: number;
        alert_appropriateness: number;
        user_satisfaction: number;
        error_reduction_rate: number;
    };
    care_coordination_performance: {
        team_collaboration_score: number;
        care_plan_adherence: number;
        transition_coordination_success: number;
        patient_outcome_improvement: number;
        team_satisfaction: number;
        coordination_efficiency: number;
    };
    patient_engagement_metrics: {
        portal_utilization_rate: number;
        communication_engagement: number;
        self_service_adoption: number;
        patient_satisfaction_score: number;
        health_outcome_correlation: number;
        digital_literacy_improvement: number;
    };
    telehealth_quality_indicators: {
        session_completion_rate: number;
        technical_quality_score: number;
        user_experience_rating: number;
        clinical_effectiveness: number;
        cost_efficiency: number;
        accessibility_improvement: number;
    };
    secure_messaging_performance: {
        system_availability: number;
        security_incident_rate: number;
        message_delivery_success: number;
        encryption_compliance: number;
        audit_completeness: number;
        privacy_protection_score: number;
    };
    collaboration_technology_adoption: {
        platform_utilization: number;
        feature_adoption_rate: number;
        user_competency_level: number;
        training_effectiveness: number;
        support_ticket_volume: number;
        innovation_integration: number;
    };
    communication_roi_analysis: {
        productivity_improvement: number;
        cost_reduction_achieved: number;
        time_savings_realized: number;
        error_prevention_value: number;
        patient_satisfaction_impact: number;
        staff_efficiency_gain: number;
    };
    strategic_communication_alignment: {
        organizational_goal_support: number;
        care_quality_enhancement: number;
        patient_experience_improvement: number;
        operational_excellence: number;
        innovation_enablement: number;
        competitive_advantage: number;
    };
    created_at: Date;
    updated_at: Date;
}
