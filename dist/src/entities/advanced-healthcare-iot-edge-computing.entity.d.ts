export declare class MedicalIoTDeviceManagementSystems {
    id: string;
    iot_device_system_id: string;
    device_system_name: string;
    device_category: string;
    connectivity_type: string;
    device_inventory_management: {
        device_registration: any[];
        device_lifecycle_tracking: any;
        firmware_version_management: any;
        certification_compliance: any;
        warranty_service_tracking: any;
        asset_depreciation: any;
    };
    patient_monitoring_devices: {
        vital_signs_monitors: any;
        cardiac_monitoring: any;
        respiratory_monitoring: any;
        blood_glucose_monitors: any;
        medication_adherence_devices: any;
        activity_fitness_trackers: any;
    };
    clinical_diagnostic_devices: {
        point_of_care_testing: any;
        portable_imaging_devices: any;
        laboratory_analyzers: any;
        diagnostic_sensors: any;
        mobile_ultrasound: any;
        digital_stethoscopes: any;
    };
    therapeutic_intervention_devices: {
        insulin_pumps: any;
        pacemakers_defibrillators: any;
        drug_delivery_systems: any;
        rehabilitation_devices: any;
        neurostimulation_devices: any;
        robotic_assistance_devices: any;
    };
    environmental_monitoring: {
        air_quality_sensors: any;
        temperature_humidity_monitoring: any;
        infection_control_sensors: any;
        noise_level_monitoring: any;
        lighting_control_systems: any;
        occupancy_tracking: any;
    };
    device_integration_protocols: {
        hl7_fhir_integration: any;
        dicom_integration: any;
        continua_alliance_standards: any;
        ihe_profiles: any;
        api_management: any;
        interoperability_frameworks: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareEdgeComputingPlatforms {
    id: string;
    edge_platform_id: string;
    platform_name: string;
    edge_deployment_model: string;
    computing_architecture: string;
    edge_infrastructure: {
        edge_computing_nodes: any[];
        processing_capabilities: any;
        storage_resources: any;
        network_connectivity: any;
        power_management: any;
        environmental_controls: any;
    };
    real_time_processing: {
        stream_processing_engines: any;
        event_driven_architectures: any;
        real_time_analytics: any;
        machine_learning_inference: any;
        data_preprocessing: any;
        alert_generation: any;
    };
    local_data_processing: {
        data_filtering_aggregation: any;
        local_storage_management: any;
        data_compression: any;
        privacy_preserving_processing: any;
        offline_capabilities: any;
        synchronization_mechanisms: any;
    };
    edge_ai_capabilities: {
        federated_learning: any;
        on_device_inference: any;
        model_optimization: any;
        distributed_training: any;
        transfer_learning: any;
        adaptive_algorithms: any;
    };
    cloud_edge_orchestration: {
        workload_distribution: any;
        dynamic_resource_allocation: any;
        data_synchronization: any;
        hybrid_processing: any;
        failover_mechanisms: any;
        load_balancing: any;
    };
    edge_security_frameworks: {
        device_authentication: any;
        data_encryption: any;
        secure_communication: any;
        access_control: any;
        intrusion_detection: any;
        security_monitoring: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SensorNetworksMonitoringSystems {
    id: string;
    sensor_network_id: string;
    network_name: string;
    network_topology: string;
    sensor_type_category: string;
    physiological_sensors: {
        ecg_sensors: any;
        blood_pressure_sensors: any;
        temperature_sensors: any;
        respiratory_sensors: any;
        pulse_oximetry_sensors: any;
        glucose_sensors: any;
    };
    environmental_sensors: {
        air_quality_sensors: any;
        humidity_sensors: any;
        light_sensors: any;
        noise_sensors: any;
        motion_sensors: any;
        proximity_sensors: any;
    };
    activity_movement_sensors: {
        accelerometers: any;
        gyroscopes: any;
        magnetometers: any;
        gps_location_sensors: any;
        step_counters: any;
        fall_detection_sensors: any;
    };
    network_communication: {
        wireless_protocols: any;
        data_transmission_rates: any;
        network_reliability: any;
        energy_efficiency: any;
        range_coverage: any;
        interference_management: any;
    };
    data_collection_aggregation: {
        sensor_data_fusion: any;
        data_quality_assessment: any;
        anomaly_detection: any;
        data_preprocessing: any;
        temporal_analysis: any;
        spatial_analysis: any;
    };
    network_management: {
        sensor_provisioning: any;
        network_monitoring: any;
        fault_detection_recovery: any;
        battery_management: any;
        firmware_updates: any;
        calibration_maintenance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class RealTimeHealthMonitoringPlatforms {
    id: string;
    monitoring_platform_id: string;
    platform_name: string;
    monitoring_scope: string;
    monitoring_type: string;
    continuous_monitoring_capabilities: {
        vital_signs_monitoring: any;
        chronic_disease_monitoring: any;
        medication_adherence_tracking: any;
        activity_monitoring: any;
        sleep_monitoring: any;
        nutrition_monitoring: any;
    };
    alert_notification_systems: {
        critical_alert_protocols: any;
        escalation_procedures: any;
        notification_channels: any;
        clinical_decision_support: any;
        automated_interventions: any;
        emergency_response_triggers: any;
    };
    data_analytics_insights: {
        trend_analysis: any;
        predictive_modeling: any;
        risk_stratification: any;
        pattern_recognition: any;
        behavioral_analysis: any;
        outcome_prediction: any;
    };
    clinical_integration: {
        ehr_integration: any;
        clinical_workflow_integration: any;
        provider_dashboards: any;
        care_team_coordination: any;
        clinical_documentation: any;
        quality_reporting: any;
    };
    patient_engagement_tools: {
        mobile_applications: any;
        patient_portals: any;
        self_monitoring_tools: any;
        educational_resources: any;
        goal_setting_tracking: any;
        social_support_features: any;
    };
    privacy_security_measures: {
        data_encryption: any;
        access_controls: any;
        audit_logging: any;
        consent_management: any;
        data_anonymization: any;
        regulatory_compliance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class IoTSecurityManagementFrameworks {
    id: string;
    iot_security_id: string;
    security_framework_name: string;
    security_approach: string;
    threat_model: string;
    device_security_controls: {
        device_authentication: any;
        secure_boot_processes: any;
        firmware_integrity: any;
        hardware_security_modules: any;
        device_identity_management: any;
        physical_security_measures: any;
    };
    communication_security: {
        encryption_protocols: any;
        secure_communication_channels: any;
        certificate_management: any;
        message_authentication: any;
        network_segmentation: any;
        vpn_tunneling: any;
    };
    data_protection_strategies: {
        data_encryption: any;
        data_integrity_verification: any;
        data_loss_prevention: any;
        privacy_preserving_techniques: any;
        secure_data_storage: any;
        data_lifecycle_protection: any;
    };
    access_control_management: {
        identity_access_management: any;
        role_based_access_control: any;
        attribute_based_access_control: any;
        multi_factor_authentication: any;
        privileged_access_management: any;
        session_management: any;
    };
    security_monitoring_response: {
        intrusion_detection_systems: any;
        anomaly_detection: any;
        security_incident_response: any;
        forensics_capabilities: any;
        threat_intelligence: any;
        vulnerability_management: any;
    };
    compliance_governance: {
        regulatory_compliance: any;
        security_standards_adherence: any;
        audit_capabilities: any;
        risk_assessment: any;
        policy_enforcement: any;
        security_awareness_training: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class IoTEdgeComputingQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    medical_iot_device_performance: {
        device_connectivity_reliability: number;
        data_transmission_accuracy: number;
        device_uptime_availability: number;
        battery_life_optimization: number;
        integration_success_rate: number;
        device_management_efficiency: number;
    };
    edge_computing_effectiveness: {
        real_time_processing_performance: number;
        latency_reduction_achievement: number;
        local_processing_efficiency: number;
        ai_inference_accuracy: number;
        resource_utilization_optimization: number;
        cloud_edge_orchestration_quality: number;
    };
    sensor_network_quality: {
        network_coverage_completeness: number;
        data_collection_accuracy: number;
        sensor_reliability_rate: number;
        network_fault_tolerance: number;
        energy_efficiency_achievement: number;
        data_fusion_effectiveness: number;
    };
    real_time_monitoring_success: {
        continuous_monitoring_reliability: number;
        alert_accuracy_timeliness: number;
        clinical_integration_effectiveness: number;
        patient_engagement_quality: number;
        predictive_analytics_accuracy: number;
        intervention_response_time: number;
    };
    iot_security_posture: {
        device_security_strength: number;
        communication_security_effectiveness: number;
        data_protection_quality: number;
        access_control_robustness: number;
        security_incident_prevention: number;
        compliance_adherence_rate: number;
    };
    iot_operational_excellence: {
        system_scalability_success: number;
        interoperability_achievement: number;
        maintenance_efficiency: number;
        update_deployment_success: number;
        cost_effectiveness_ratio: number;
        innovation_adoption_rate: number;
    };
    iot_clinical_impact: {
        patient_outcome_improvement: number;
        care_quality_enhancement: number;
        clinical_workflow_optimization: number;
        diagnostic_accuracy_improvement: number;
        treatment_adherence_increase: number;
        healthcare_cost_reduction: number;
    };
    strategic_iot_value: {
        digital_health_transformation: number;
        care_delivery_modernization: number;
        population_health_insights: number;
        research_innovation_enablement: number;
        competitive_advantage_creation: number;
        future_readiness_preparation: number;
    };
    created_at: Date;
    updated_at: Date;
}
