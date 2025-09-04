export declare class CloudInfrastructureManagement {
    id: string;
    infrastructure_id: string;
    infrastructure_name: string;
    deployment_model: string;
    service_model: string;
    cloud_architecture: {
        compute_resources: any;
        storage_systems: any;
        network_infrastructure: any;
        database_services: any;
        application_services: any;
        security_services: any;
    };
    scalability_management: {
        auto_scaling: any;
        load_balancing: any;
        capacity_planning: any;
        resource_optimization: any;
        performance_monitoring: any;
        elasticity_management: any;
    };
    high_availability: {
        redundancy_design: any;
        failover_mechanisms: any;
        disaster_recovery: any;
        backup_strategies: any;
        business_continuity: any;
        sla_management: any;
    };
    security_framework: {
        identity_access_management: any;
        data_encryption: any;
        network_security: any;
        compliance_controls: any;
        threat_protection: any;
        vulnerability_management: any;
    };
    cost_optimization: {
        resource_utilization: any;
        cost_monitoring: any;
        budget_management: any;
        rightsizing_recommendations: any;
        reserved_instances: any;
        cost_allocation: any;
    };
    governance_compliance: {
        cloud_governance: any;
        policy_management: any;
        compliance_monitoring: any;
        audit_controls: any;
        risk_management: any;
        change_management: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class NetworkInfrastructureManagement {
    id: string;
    network_id: string;
    network_name: string;
    network_type: string;
    topology_type: string;
    network_components: {
        switches: any;
        routers: any;
        firewalls: any;
        access_points: any;
        load_balancers: any;
        network_controllers: any;
    };
    performance_metrics: {
        bandwidth_utilization: number;
        latency_measurements: number;
        packet_loss_rate: number;
        throughput_capacity: number;
        availability_percentage: number;
        response_time: number;
    };
    security_controls: {
        network_segmentation: any;
        access_controls: any;
        intrusion_detection: any;
        intrusion_prevention: any;
        traffic_monitoring: any;
        threat_intelligence: any;
    };
    quality_of_service: {
        traffic_prioritization: any;
        bandwidth_allocation: any;
        latency_optimization: any;
        application_prioritization: any;
        congestion_management: any;
        service_level_agreements: any;
    };
    network_optimization: {
        traffic_engineering: any;
        route_optimization: any;
        capacity_planning: any;
        performance_tuning: any;
        congestion_avoidance: any;
        efficiency_improvements: any;
    };
    monitoring_analytics: {
        real_time_monitoring: any;
        network_analytics: any;
        performance_dashboards: any;
        alerting_systems: any;
        predictive_analytics: any;
        reporting_capabilities: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DataCenterOperations {
    id: string;
    datacenter_id: string;
    datacenter_name: string;
    datacenter_type: string;
    tier_classification: string;
    infrastructure_components: {
        server_hardware: any;
        storage_systems: any;
        network_equipment: any;
        power_systems: any;
        cooling_systems: any;
        security_systems: any;
    };
    environmental_controls: {
        temperature_management: any;
        humidity_control: any;
        air_quality_monitoring: any;
        power_usage_effectiveness: number;
        energy_efficiency: any;
        environmental_monitoring: any;
    };
    capacity_management: {
        compute_capacity: any;
        storage_capacity: any;
        network_capacity: any;
        power_capacity: any;
        cooling_capacity: any;
        space_utilization: any;
    };
    operations_management: {
        change_management: any;
        incident_management: any;
        problem_management: any;
        configuration_management: any;
        release_management: any;
        service_management: any;
    };
    business_continuity: {
        backup_systems: any;
        disaster_recovery: any;
        redundancy_planning: any;
        failover_procedures: any;
        business_impact_analysis: any;
        recovery_time_objectives: any;
    };
    compliance_standards: {
        regulatory_compliance: any;
        industry_standards: any;
        certification_requirements: any;
        audit_procedures: any;
        documentation_management: any;
        continuous_compliance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DisasterRecoveryPlanning {
    id: string;
    dr_plan_id: string;
    dr_plan_name: string;
    disaster_type: string;
    criticality_level: string;
    risk_assessment: {
        threat_identification: any;
        vulnerability_analysis: any;
        impact_assessment: any;
        likelihood_evaluation: any;
        risk_prioritization: any;
        mitigation_strategies: any;
    };
    recovery_objectives: {
        recovery_time_objective: number;
        recovery_point_objective: number;
        maximum_tolerable_downtime: number;
        minimum_business_continuity: any;
        service_level_requirements: any;
        performance_expectations: any;
    };
    recovery_strategies: {
        backup_strategies: any;
        alternative_sites: any;
        technology_recovery: any;
        data_recovery: any;
        communication_plans: any;
        vendor_relationships: any;
    };
    implementation_procedures: {
        activation_procedures: any;
        notification_procedures: any;
        escalation_procedures: any;
        recovery_procedures: any;
        testing_procedures: any;
        maintenance_procedures: any;
    };
    testing_validation: {
        testing_schedule: any;
        test_scenarios: any;
        test_results: any;
        gap_analysis: any;
        improvement_recommendations: any;
        lessons_learned: any;
    };
    coordination_management: {
        emergency_response_team: any;
        communication_protocols: any;
        vendor_coordination: any;
        stakeholder_management: any;
        external_dependencies: any;
        regulatory_reporting: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ItPerformanceMonitoring {
    id: string;
    monitoring_id: string;
    monitoring_scope: string;
    monitoring_type: string;
    monitoring_frequency: string;
    performance_metrics: {
        availability_metrics: any;
        performance_metrics: any;
        capacity_metrics: any;
        security_metrics: any;
        user_experience_metrics: any;
        business_metrics: any;
    };
    monitoring_tools: {
        infrastructure_monitoring: any;
        application_monitoring: any;
        network_monitoring: any;
        log_management: any;
        synthetic_monitoring: any;
        real_user_monitoring: any;
    };
    alerting_framework: {
        alert_thresholds: any;
        escalation_procedures: any;
        notification_channels: any;
        alert_correlation: any;
        noise_reduction: any;
        intelligent_alerting: any;
    };
    analytics_insights: {
        trend_analysis: any;
        root_cause_analysis: any;
        predictive_analytics: any;
        capacity_forecasting: any;
        performance_optimization: any;
        anomaly_detection: any;
    };
    reporting_dashboards: {
        executive_dashboards: any;
        operational_dashboards: any;
        technical_dashboards: any;
        compliance_reports: any;
        performance_reports: any;
        sla_reports: any;
    };
    continuous_improvement: {
        performance_benchmarking: any;
        optimization_recommendations: any;
        best_practices: any;
        process_improvements: any;
        technology_upgrades: any;
        training_requirements: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareItQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    infrastructure_performance: {
        system_availability: number;
        network_uptime: number;
        application_performance: number;
        data_center_efficiency: number;
        cloud_service_reliability: number;
        disaster_recovery_readiness: number;
    };
    security_effectiveness: {
        security_incident_rate: number;
        vulnerability_remediation_time: number;
        compliance_score: number;
        threat_detection_accuracy: number;
        access_control_effectiveness: number;
        data_protection_level: number;
    };
    operational_efficiency: {
        it_cost_per_user: number;
        automation_percentage: number;
        change_success_rate: number;
        incident_resolution_time: number;
        service_request_fulfillment: number;
        resource_utilization: number;
    };
    user_satisfaction: {
        end_user_satisfaction: number;
        help_desk_satisfaction: number;
        system_usability_score: number;
        training_effectiveness: number;
        support_quality_rating: number;
        digital_experience_score: number;
    };
    innovation_advancement: {
        technology_adoption_rate: number;
        digital_transformation_progress: number;
        innovation_project_success: number;
        emerging_technology_integration: number;
        process_digitization: number;
        competitive_positioning: number;
    };
    cost_optimization: {
        it_budget_variance: number;
        cost_per_transaction: number;
        energy_efficiency_improvement: number;
        cloud_cost_optimization: number;
        vendor_cost_management: number;
        roi_on_it_investments: number;
    };
    business_alignment: {
        business_objective_support: number;
        strategic_initiative_enablement: number;
        clinical_workflow_support: number;
        operational_process_improvement: number;
        patient_care_enhancement: number;
        regulatory_compliance_support: number;
    };
    continuous_improvement: {
        service_improvement_rate: number;
        process_optimization: number;
        technology_refresh_rate: number;
        skill_development_progress: number;
        best_practice_adoption: number;
        change_management_effectiveness: number;
    };
    created_at: Date;
    updated_at: Date;
}
