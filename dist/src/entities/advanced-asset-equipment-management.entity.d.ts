export declare class MedicalEquipmentManagement {
    id: string;
    equipment_id: string;
    equipment_name: string;
    manufacturer: string;
    model_number: string;
    serial_number: string;
    equipment_category: string;
    equipment_class: string;
    technical_specifications: {
        physical_dimensions: any;
        power_requirements: any;
        environmental_conditions: any;
        performance_parameters: any;
        connectivity_features: any;
        safety_certifications: any;
    };
    location_tracking: {
        current_location: string;
        department_assignment: string;
        room_number: string;
        zone_designation: string;
        mobility_status: string;
        gps_coordinates: any;
    };
    operational_status: {
        current_status: string;
        availability_percentage: number;
        utilization_rate: number;
        performance_score: number;
        reliability_index: number;
        safety_status: string;
    };
    maintenance_information: {
        maintenance_schedule: any;
        last_maintenance_date: Date;
        next_maintenance_due: Date;
        maintenance_history: any[];
        warranty_information: any;
        service_contracts: any;
    };
    compliance_tracking: {
        regulatory_requirements: string[];
        certification_status: any;
        inspection_records: any[];
        calibration_schedule: any;
        quality_assurance: any;
        risk_classification: string;
    };
    financial_information: {
        acquisition_cost: number;
        current_value: number;
        depreciation_schedule: any;
        maintenance_costs: any;
        insurance_information: any;
        replacement_planning: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class AssetLifecycleManagement {
    id: string;
    asset_id: string;
    asset_description: string;
    asset_type: string;
    lifecycle_stage: string;
    acquisition_phase: {
        requirements_analysis: any;
        vendor_evaluation: any;
        procurement_process: any;
        installation_planning: any;
        acceptance_testing: any;
        commissioning_procedures: any;
    };
    operational_phase: {
        utilization_tracking: any;
        performance_monitoring: any;
        maintenance_management: any;
        upgrade_planning: any;
        cost_tracking: any;
        user_training: any;
    };
    optimization_strategies: {
        utilization_improvement: any;
        cost_reduction: any;
        performance_enhancement: any;
        efficiency_gains: any;
        technology_upgrades: any;
        process_optimization: any;
    };
    risk_management: {
        operational_risks: any;
        financial_risks: any;
        compliance_risks: any;
        technology_risks: any;
        safety_risks: any;
        mitigation_strategies: any;
    };
    retirement_planning: {
        end_of_life_assessment: any;
        replacement_planning: any;
        disposal_procedures: any;
        data_sanitization: any;
        environmental_compliance: any;
        asset_recovery: any;
    };
    total_cost_ownership: {
        acquisition_costs: number;
        operational_costs: number;
        maintenance_costs: number;
        upgrade_costs: number;
        disposal_costs: number;
        roi_analysis: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class PreventiveMaintenanceSystem {
    id: string;
    maintenance_id: string;
    equipment_id: string;
    maintenance_type: string;
    maintenance_category: string;
    maintenance_schedule: {
        frequency_type: string;
        schedule_interval: any;
        maintenance_windows: any;
        resource_requirements: any;
        downtime_planning: any;
        priority_level: string;
    };
    work_order_management: {
        work_order_details: any;
        task_specifications: any;
        resource_allocation: any;
        technician_assignment: any;
        parts_requirements: any;
        time_estimation: any;
    };
    predictive_analytics: {
        condition_monitoring: any;
        failure_prediction: any;
        trend_analysis: any;
        anomaly_detection: any;
        risk_assessment: any;
        optimization_recommendations: any;
    };
    quality_control: {
        maintenance_standards: any;
        inspection_checklists: any;
        performance_validation: any;
        compliance_verification: any;
        documentation_requirements: any;
        approval_workflows: any;
    };
    cost_management: {
        labor_costs: number;
        parts_costs: number;
        external_service_costs: number;
        downtime_costs: number;
        total_maintenance_cost: number;
        cost_optimization: any;
    };
    performance_tracking: {
        maintenance_effectiveness: number;
        equipment_reliability: number;
        mtbf_improvement: number;
        cost_efficiency: number;
        compliance_score: number;
        user_satisfaction: number;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class EquipmentUtilizationAnalytics {
    id: string;
    analytics_id: string;
    equipment_id: string;
    analysis_period: string;
    utilization_metrics: {
        operating_hours: number;
        idle_time: number;
        maintenance_downtime: number;
        utilization_percentage: number;
        capacity_utilization: number;
        peak_usage_periods: any;
    };
    performance_analysis: {
        throughput_metrics: any;
        quality_indicators: any;
        efficiency_ratios: any;
        productivity_measures: any;
        error_rates: any;
        improvement_opportunities: any;
    };
    usage_patterns: {
        daily_patterns: any;
        weekly_trends: any;
        seasonal_variations: any;
        department_usage: any;
        user_patterns: any;
        demand_forecasting: any;
    };
    optimization_insights: {
        capacity_optimization: any;
        scheduling_improvements: any;
        resource_allocation: any;
        workflow_enhancement: any;
        technology_upgrades: any;
        cost_reduction: any;
    };
    benchmarking_data: {
        industry_standards: any;
        peer_comparisons: any;
        best_practices: any;
        performance_gaps: any;
        improvement_targets: any;
        action_plans: any;
    };
    predictive_modeling: {
        demand_prediction: any;
        capacity_planning: any;
        replacement_forecasting: any;
        maintenance_scheduling: any;
        resource_optimization: any;
        scenario_analysis: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class BiomedicalTechnologyIntegration {
    id: string;
    integration_id: string;
    integration_name: string;
    integration_type: string;
    technology_category: string;
    connectivity_framework: {
        communication_protocols: string[];
        data_standards: string[];
        interoperability_level: string;
        security_protocols: any;
        api_integrations: any;
        middleware_components: any;
    };
    data_management: {
        data_collection: any;
        data_processing: any;
        data_storage: any;
        data_analytics: any;
        data_visualization: any;
        data_governance: any;
    };
    intelligent_automation: {
        ai_algorithms: any;
        machine_learning: any;
        predictive_analytics: any;
        decision_support: any;
        process_automation: any;
        cognitive_computing: any;
    };
    clinical_integration: {
        ehr_connectivity: any;
        clinical_workflows: any;
        decision_support: any;
        alert_systems: any;
        documentation_automation: any;
        quality_monitoring: any;
    };
    security_compliance: {
        cybersecurity_measures: any;
        data_protection: any;
        access_controls: any;
        audit_trails: any;
        regulatory_compliance: any;
        risk_management: any;
    };
    innovation_capabilities: {
        emerging_technologies: any;
        research_collaboration: any;
        pilot_programs: any;
        technology_roadmap: any;
        innovation_metrics: any;
        future_planning: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareAssetQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    asset_performance: {
        equipment_uptime: number;
        availability_rate: number;
        utilization_efficiency: number;
        reliability_score: number;
        performance_index: number;
        quality_metrics: number;
    };
    maintenance_effectiveness: {
        preventive_maintenance_compliance: number;
        mean_time_between_failures: number;
        mean_time_to_repair: number;
        maintenance_cost_efficiency: number;
        planned_vs_unplanned_ratio: number;
        first_time_fix_rate: number;
    };
    cost_optimization: {
        total_cost_of_ownership: number;
        maintenance_cost_per_asset: number;
        energy_efficiency_savings: number;
        replacement_cost_avoidance: number;
        warranty_claim_recovery: number;
        roi_on_maintenance: number;
    };
    compliance_performance: {
        regulatory_compliance_rate: number;
        safety_incident_rate: number;
        calibration_compliance: number;
        certification_validity: number;
        audit_pass_rate: number;
        documentation_completeness: number;
    };
    technology_integration: {
        connectivity_rate: number;
        data_quality_score: number;
        automation_adoption: number;
        digital_transformation_index: number;
        innovation_implementation: number;
        user_satisfaction_technology: number;
    };
    sustainability_metrics: {
        energy_consumption_reduction: number;
        carbon_footprint_improvement: number;
        waste_reduction_percentage: number;
        sustainable_procurement_rate: number;
        lifecycle_extension_rate: number;
        environmental_compliance_score: number;
    };
    operational_excellence: {
        asset_utilization_optimization: number;
        workflow_efficiency: number;
        staff_productivity_impact: number;
        patient_care_enhancement: number;
        clinical_outcome_contribution: number;
        operational_cost_reduction: number;
    };
    continuous_improvement: {
        improvement_initiatives: number;
        process_optimization_rate: number;
        innovation_adoption: number;
        best_practices_implementation: number;
        knowledge_sharing_effectiveness: number;
        change_management_success: number;
    };
    created_at: Date;
    updated_at: Date;
}
