export declare class SupplyChainManagement {
    id: string;
    supply_chain_id: string;
    supply_chain_name: string;
    supply_chain_description: string;
    supply_chain_type: string;
    supply_chain_category: string;
    supply_chain_specifications: {
        geographical_coverage: string[];
        distribution_centers: any[];
        transportation_modes: string[];
        delivery_timeframes: any;
        capacity_constraints: any;
        scalability_factors: any;
    };
    operational_parameters: {
        demand_forecasting: any;
        inventory_optimization: any;
        procurement_strategies: any;
        vendor_management: any;
        logistics_coordination: any;
        cost_optimization: any;
    };
    performance_metrics: {
        delivery_performance: number;
        inventory_turnover: number;
        cost_efficiency: number;
        quality_metrics: number;
        supplier_performance: number;
        customer_satisfaction: number;
    };
    compliance_requirements: {
        regulatory_standards: string[];
        quality_certifications: string[];
        safety_protocols: any;
        documentation_requirements: any;
        audit_requirements: any;
        risk_management: any;
    };
    technology_integration: {
        erp_systems: any;
        wms_integration: any;
        rfid_tracking: any;
        iot_sensors: any;
        ai_optimization: any;
        blockchain_traceability: any;
    };
    sustainability_initiatives: {
        environmental_impact: any;
        carbon_footprint: any;
        waste_reduction: any;
        sustainable_sourcing: any;
        circular_economy: any;
        green_logistics: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class InventoryManagementSystem {
    id: string;
    inventory_id: string;
    item_name: string;
    item_code: string;
    item_category: string;
    item_classification: string;
    item_specifications: {
        product_details: any;
        technical_specs: any;
        quality_standards: any;
        regulatory_information: any;
        usage_instructions: any;
        storage_requirements: any;
    };
    inventory_levels: {
        current_stock: number;
        minimum_stock: number;
        maximum_stock: number;
        reorder_point: number;
        safety_stock: number;
        optimal_stock: number;
    };
    location_tracking: {
        primary_location: string;
        secondary_locations: string[];
        zone_assignments: any;
        shelf_positions: any;
        temperature_zones: any;
        access_restrictions: any;
    };
    cost_information: {
        unit_cost: number;
        total_value: number;
        carrying_cost: number;
        ordering_cost: number;
        stockout_cost: number;
        obsolescence_risk: number;
    };
    quality_control: {
        lot_tracking: any;
        expiration_management: any;
        quality_testing: any;
        recall_procedures: any;
        condition_monitoring: any;
        compliance_verification: any;
    };
    usage_analytics: {
        consumption_patterns: any;
        demand_forecasting: any;
        seasonal_variations: any;
        usage_trends: any;
        waste_analysis: any;
        optimization_opportunities: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class VendorSupplierManagement {
    id: string;
    vendor_id: string;
    vendor_name: string;
    vendor_type: string;
    vendor_category: string;
    vendor_profile: {
        company_information: any;
        contact_details: any;
        business_registration: any;
        certifications: string[];
        capabilities: any;
        geographical_coverage: any;
    };
    performance_metrics: {
        delivery_performance: number;
        quality_ratings: number;
        cost_competitiveness: number;
        service_quality: number;
        compliance_score: number;
        reliability_index: number;
    };
    contract_management: {
        contract_terms: any;
        pricing_agreements: any;
        service_levels: any;
        delivery_schedules: any;
        quality_requirements: any;
        penalty_clauses: any;
    };
    risk_assessment: {
        financial_stability: any;
        operational_risks: any;
        compliance_risks: any;
        supply_chain_risks: any;
        geographical_risks: any;
        mitigation_strategies: any;
    };
    relationship_management: {
        partnership_level: string;
        communication_protocols: any;
        escalation_procedures: any;
        performance_reviews: any;
        improvement_initiatives: any;
        strategic_alignment: any;
    };
    sustainability_compliance: {
        environmental_standards: any;
        social_responsibility: any;
        ethical_sourcing: any;
        sustainability_reporting: any;
        carbon_footprint: any;
        circular_economy: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class ProcurementAutomation {
    id: string;
    procurement_id: string;
    procurement_description: string;
    procurement_type: string;
    procurement_category: string;
    automation_workflow: {
        requisition_process: any;
        approval_workflow: any;
        vendor_selection: any;
        purchase_order_generation: any;
        delivery_tracking: any;
        invoice_processing: any;
    };
    intelligent_sourcing: {
        demand_prediction: any;
        supplier_optimization: any;
        cost_analysis: any;
        risk_assessment: any;
        quality_evaluation: any;
        performance_monitoring: any;
    };
    decision_support: {
        ai_recommendations: any;
        predictive_analytics: any;
        market_intelligence: any;
        cost_optimization: any;
        risk_mitigation: any;
        compliance_verification: any;
    };
    integration_systems: {
        erp_integration: any;
        financial_systems: any;
        inventory_management: any;
        supplier_portals: any;
        e_procurement: any;
        contract_management: any;
    };
    compliance_automation: {
        regulatory_checks: any;
        approval_workflows: any;
        documentation_generation: any;
        audit_trails: any;
        policy_enforcement: any;
        risk_monitoring: any;
    };
    performance_optimization: {
        cycle_time_reduction: any;
        cost_savings: any;
        quality_improvement: any;
        efficiency_gains: any;
        error_reduction: any;
        transparency_enhancement: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DistributionLogistics {
    id: string;
    distribution_id: string;
    distribution_route: string;
    distribution_type: string;
    priority_level: string;
    route_optimization: {
        origin_destination: any;
        waypoints: any[];
        distance_calculation: any;
        time_estimation: any;
        cost_optimization: any;
        traffic_consideration: any;
    };
    transportation_management: {
        vehicle_assignment: any;
        driver_scheduling: any;
        capacity_planning: any;
        load_optimization: any;
        fuel_efficiency: any;
        maintenance_scheduling: any;
    };
    delivery_tracking: {
        real_time_location: any;
        eta_updates: any;
        milestone_tracking: any;
        exception_handling: any;
        customer_notifications: any;
        proof_of_delivery: any;
    };
    cold_chain_management: {
        temperature_monitoring: any;
        humidity_control: any;
        shock_detection: any;
        breach_alerts: any;
        validation_protocols: any;
        documentation_requirements: any;
    };
    special_handling: {
        hazardous_materials: any;
        controlled_substances: any;
        high_value_items: any;
        fragile_goods: any;
        oversized_items: any;
        security_requirements: any;
    };
    performance_analytics: {
        delivery_performance: any;
        cost_efficiency: any;
        customer_satisfaction: any;
        quality_metrics: any;
        environmental_impact: any;
        continuous_improvement: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareSupplyChainQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    operational_efficiency: {
        inventory_turnover_rate: number;
        order_fulfillment_rate: number;
        delivery_performance_score: number;
        cost_per_transaction: number;
        cycle_time_reduction: number;
        automation_percentage: number;
    };
    quality_performance: {
        defect_rate: number;
        return_rate: number;
        quality_compliance_score: number;
        supplier_quality_rating: number;
        customer_satisfaction_score: number;
        regulatory_compliance_rate: number;
    };
    cost_optimization: {
        total_cost_savings: number;
        procurement_cost_reduction: number;
        inventory_carrying_cost: number;
        logistics_cost_efficiency: number;
        waste_reduction_percentage: number;
        roi_improvement: number;
    };
    risk_management: {
        supply_chain_risk_score: number;
        supplier_risk_assessment: number;
        business_continuity_rating: number;
        compliance_risk_level: number;
        financial_risk_exposure: number;
        operational_resilience: number;
    };
    sustainability_metrics: {
        carbon_footprint_reduction: number;
        sustainable_sourcing_percentage: number;
        waste_diversion_rate: number;
        energy_efficiency_improvement: number;
        circular_economy_adoption: number;
        environmental_compliance_score: number;
    };
    technology_integration: {
        digitalization_level: number;
        automation_adoption: number;
        data_accuracy_rate: number;
        system_integration_score: number;
        innovation_index: number;
        user_adoption_rate: number;
    };
    stakeholder_satisfaction: {
        internal_customer_satisfaction: number;
        supplier_satisfaction_rating: number;
        end_user_satisfaction: number;
        management_satisfaction: number;
        regulatory_satisfaction: number;
        community_impact_score: number;
    };
    continuous_improvement: {
        improvement_initiatives: number;
        process_optimization_rate: number;
        innovation_implementation: number;
        best_practices_adoption: number;
        knowledge_sharing_index: number;
        change_management_effectiveness: number;
    };
    created_at: Date;
    updated_at: Date;
}
