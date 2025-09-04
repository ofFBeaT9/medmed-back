export declare class MedicalIoTDevices {
    id: string;
    device_id: string;
    device_name: string;
    device_type: string;
    deployment_location: string;
    sensor_configuration: {
        sensor_types: string[];
        measurement_parameters: any;
        sampling_frequency: number;
        data_precision: any;
        calibration_settings: any;
        environmental_compensation: any;
    };
    connectivity_profile: {
        communication_protocols: string[];
        network_interfaces: any;
        bandwidth_requirements: any;
        latency_specifications: any;
        reliability_parameters: any;
        security_protocols: any;
    };
    edge_processing: {
        local_analytics: any;
        real_time_filtering: any;
        anomaly_detection: any;
        data_compression: any;
        edge_ml_models: any;
        preprocessing_algorithms: any;
    };
    power_management: {
        power_source: string;
        battery_life: any;
        energy_harvesting: any;
        sleep_wake_cycles: any;
        power_optimization: any;
        charging_protocols: any;
    };
    clinical_integration: {
        ehr_connectivity: any;
        clinical_workflows: any;
        alert_mechanisms: any;
        decision_support: any;
        care_team_notifications: any;
        patient_engagement: any;
    };
    regulatory_compliance: {
        fda_classification: any;
        medical_device_standards: any;
        safety_certifications: any;
        privacy_regulations: any;
        quality_assurance: any;
        post_market_surveillance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class EdgeAnalyticsPlatform {
    id: string;
    platform_id: string;
    platform_name: string;
    deployment_model: string;
    computing_paradigm: string;
    processing_capabilities: {
        compute_resources: any;
        storage_capacity: any;
        memory_specifications: any;
        gpu_acceleration: any;
        specialized_processors: any;
        virtualization_support: any;
    };
    analytics_engines: {
        real_time_processing: any;
        stream_analytics: any;
        batch_processing: any;
        machine_learning: any;
        deep_learning: any;
        statistical_analysis: any;
    };
    data_management: {
        data_ingestion: any;
        data_storage: any;
        data_transformation: any;
        data_synchronization: any;
        data_archival: any;
        data_governance: any;
    };
    orchestration_framework: {
        workload_distribution: any;
        resource_allocation: any;
        load_balancing: any;
        fault_tolerance: any;
        auto_scaling: any;
        service_mesh: any;
    };
    security_architecture: {
        edge_security: any;
        data_encryption: any;
        access_control: any;
        threat_detection: any;
        secure_communication: any;
        privacy_preservation: any;
    };
    integration_interfaces: {
        cloud_connectivity: any;
        api_gateways: any;
        message_brokers: any;
        protocol_adapters: any;
        legacy_system_bridges: any;
        interoperability_standards: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class RealTimePatientMonitoring {
    id: string;
    monitoring_id: string;
    patient_id: string;
    monitoring_type: string;
    care_setting: string;
    vital_signs_monitoring: {
        physiological_parameters: string[];
        measurement_frequency: any;
        normal_ranges: any;
        alert_thresholds: any;
        trend_analysis: any;
        predictive_indicators: any;
    };
    wearable_integration: {
        device_inventory: any[];
        data_fusion: any;
        signal_processing: any;
        artifact_removal: any;
        quality_assessment: any;
        battery_monitoring: any;
    };
    clinical_decision_support: {
        early_warning_systems: any;
        risk_stratification: any;
        deterioration_detection: any;
        intervention_recommendations: any;
        care_pathway_guidance: any;
        outcome_prediction: any;
    };
    alert_management: {
        alert_algorithms: any;
        notification_channels: any;
        escalation_protocols: any;
        alert_fatigue_reduction: any;
        contextual_filtering: any;
        response_tracking: any;
    };
    data_streaming: {
        real_time_transmission: any;
        data_compression: any;
        bandwidth_optimization: any;
        latency_minimization: any;
        reliability_assurance: any;
        failover_mechanisms: any;
    };
    patient_engagement: {
        mobile_applications: any;
        patient_dashboards: any;
        educational_content: any;
        self_care_guidance: any;
        family_involvement: any;
        compliance_tracking: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SmartHealthcareInfrastructure {
    id: string;
    infrastructure_id: string;
    facility_name: string;
    infrastructure_type: string;
    automation_level: string;
    building_automation: {
        hvac_systems: any;
        lighting_control: any;
        security_systems: any;
        fire_safety: any;
        elevator_management: any;
        energy_management: any;
    };
    medical_equipment_network: {
        connected_devices: any[];
        equipment_monitoring: any;
        predictive_maintenance: any;
        utilization_tracking: any;
        asset_management: any;
        performance_optimization: any;
    };
    environmental_monitoring: {
        air_quality_sensors: any;
        temperature_humidity: any;
        noise_level_monitoring: any;
        infection_control: any;
        contamination_detection: any;
        environmental_compliance: any;
    };
    workflow_automation: {
        patient_flow_optimization: any;
        resource_allocation: any;
        scheduling_systems: any;
        supply_chain_automation: any;
        communication_systems: any;
        documentation_automation: any;
    };
    digital_twin_model: {
        virtual_representation: any;
        real_time_synchronization: any;
        simulation_capabilities: any;
        predictive_modeling: any;
        optimization_algorithms: any;
        scenario_planning: any;
    };
    sustainability_features: {
        energy_efficiency: any;
        renewable_energy: any;
        waste_management: any;
        water_conservation: any;
        carbon_footprint: any;
        green_building_standards: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DistributedHealthComputing {
    id: string;
    computing_id: string;
    network_name: string;
    architecture_type: string;
    computing_model: string;
    node_configuration: {
        edge_nodes: any[];
        computing_capabilities: any;
        storage_resources: any;
        network_connectivity: any;
        redundancy_mechanisms: any;
        failover_protocols: any;
    };
    workload_distribution: {
        task_scheduling: any;
        load_balancing: any;
        resource_optimization: any;
        latency_minimization: any;
        bandwidth_efficiency: any;
        cost_optimization: any;
    };
    federated_learning: {
        model_aggregation: any;
        privacy_preservation: any;
        differential_privacy: any;
        secure_aggregation: any;
        participant_management: any;
        model_validation: any;
    };
    data_synchronization: {
        consistency_models: any;
        conflict_resolution: any;
        eventual_consistency: any;
        real_time_sync: any;
        offline_capabilities: any;
        data_versioning: any;
    };
    security_framework: {
        distributed_security: any;
        trust_management: any;
        consensus_mechanisms: any;
        byzantine_fault_tolerance: any;
        secure_multiparty_computation: any;
        zero_knowledge_protocols: any;
    };
    performance_optimization: {
        caching_strategies: any;
        data_locality: any;
        computation_offloading: any;
        network_optimization: any;
        resource_pooling: any;
        elastic_scaling: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareEdgeQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    performance_metrics: {
        latency_reduction: number;
        bandwidth_utilization: number;
        processing_efficiency: number;
        response_time_improvement: number;
        throughput_optimization: number;
        resource_utilization_rate: number;
    };
    reliability_metrics: {
        system_availability: number;
        fault_tolerance_rate: number;
        data_integrity_assurance: number;
        network_resilience: number;
        disaster_recovery_capability: number;
        service_continuity: number;
    };
    clinical_impact: {
        patient_outcome_improvement: number;
        care_quality_enhancement: number;
        clinical_workflow_efficiency: number;
        decision_support_effectiveness: number;
        alert_accuracy_rate: number;
        intervention_timeliness: number;
    };
    iot_device_performance: {
        device_connectivity_rate: number;
        data_collection_accuracy: number;
        battery_life_optimization: number;
        sensor_reliability: number;
        maintenance_efficiency: number;
        upgrade_success_rate: number;
    };
    security_effectiveness: {
        threat_detection_rate: number;
        vulnerability_mitigation: number;
        data_protection_level: number;
        access_control_effectiveness: number;
        privacy_preservation_score: number;
        compliance_adherence: number;
    };
    cost_efficiency: {
        infrastructure_cost_reduction: number;
        operational_cost_savings: number;
        energy_efficiency_improvement: number;
        maintenance_cost_optimization: number;
        scalability_cost_effectiveness: number;
        return_on_investment: number;
    };
    user_experience: {
        healthcare_provider_satisfaction: number;
        patient_experience_score: number;
        system_usability_rating: number;
        training_effectiveness: number;
        support_quality_rating: number;
        adoption_rate: number;
    };
    innovation_advancement: {
        technology_adoption_rate: number;
        research_contribution: number;
        patent_development: number;
        ecosystem_growth: number;
        partnership_formation: number;
        future_readiness_score: number;
    };
    created_at: Date;
    updated_at: Date;
}
