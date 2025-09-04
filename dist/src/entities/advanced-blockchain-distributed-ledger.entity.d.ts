export declare class BlockchainHealthRecords {
    id: string;
    blockchain_id: string;
    patient_id: string;
    record_type: string;
    blockchain_network: string;
    record_metadata: {
        transaction_hash: string;
        block_number: number;
        timestamp: Date;
        data_hash: string;
        previous_hash: string;
        merkle_root: string;
    };
    access_control: {
        permission_model: any;
        access_rights: string[];
        consent_management: any;
        role_based_access: any;
        time_limited_access: any;
        audit_permissions: any;
    };
    data_integrity: {
        cryptographic_hashing: any;
        digital_signatures: any;
        merkle_tree_validation: any;
        immutability_proof: any;
        tamper_evidence: any;
        verification_mechanisms: any;
    };
    privacy_protection: {
        zero_knowledge_proofs: any;
        homomorphic_encryption: any;
        differential_privacy: any;
        data_minimization: any;
        pseudonymization: any;
        selective_disclosure: any;
    };
    interoperability: {
        standard_compliance: any;
        cross_chain_protocols: any;
        api_gateways: any;
        data_mapping: any;
        semantic_interoperability: any;
        legacy_integration: any;
    };
    consensus_mechanism: {
        consensus_algorithm: string;
        validator_network: any;
        consensus_participation: any;
        finality_guarantees: any;
        fork_resolution: any;
        performance_metrics: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SmartContractHealthcare {
    id: string;
    contract_id: string;
    contract_name: string;
    contract_type: string;
    deployment_status: string;
    contract_logic: {
        business_rules: any;
        execution_conditions: any;
        trigger_events: any;
        automated_actions: any;
        exception_handling: any;
        termination_conditions: any;
    };
    participants: {
        contract_parties: any[];
        roles_permissions: any;
        signature_requirements: any;
        dispute_resolution: any;
        governance_structure: any;
        compliance_obligations: any;
    };
    execution_parameters: {
        gas_optimization: any;
        performance_metrics: any;
        cost_analysis: any;
        scalability_factors: any;
        security_measures: any;
        upgrade_mechanisms: any;
    };
    oracle_integration: {
        data_sources: any[];
        oracle_networks: any;
        data_validation: any;
        external_apis: any;
        real_world_events: any;
        reliability_measures: any;
    };
    compliance_framework: {
        regulatory_compliance: any;
        legal_validity: any;
        audit_requirements: any;
        reporting_obligations: any;
        privacy_regulations: any;
        jurisdictional_considerations: any;
    };
    monitoring_analytics: {
        execution_tracking: any;
        performance_monitoring: any;
        cost_analysis: any;
        usage_patterns: any;
        error_logging: any;
        optimization_insights: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class SupplyChainTraceability {
    id: string;
    traceability_id: string;
    product_identifier: string;
    product_category: string;
    tracking_scope: string;
    product_provenance: {
        manufacturer_details: any;
        production_batch: any;
        manufacturing_date: Date;
        quality_certifications: any;
        regulatory_approvals: any;
        chain_of_custody: any[];
    };
    supply_chain_events: {
        production_events: any[];
        transportation_events: any[];
        storage_events: any[];
        transfer_events: any[];
        quality_events: any[];
        disposal_events: any[];
    };
    verification_protocols: {
        identity_verification: any;
        authenticity_checks: any;
        quality_validation: any;
        compliance_verification: any;
        counterfeit_detection: any;
        recall_procedures: any;
    };
    stakeholder_network: {
        manufacturers: any[];
        distributors: any[];
        healthcare_providers: any[];
        regulatory_bodies: any[];
        patients: any[];
        verification_authorities: any[];
    };
    transparency_features: {
        public_verification: any;
        audit_trails: any;
        real_time_tracking: any;
        historical_records: any;
        compliance_reporting: any;
        stakeholder_notifications: any;
    };
    anti_counterfeiting: {
        unique_identifiers: any;
        cryptographic_seals: any;
        physical_security: any;
        digital_watermarks: any;
        authentication_protocols: any;
        enforcement_mechanisms: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class DecentralizedIdentityManagement {
    id: string;
    identity_id: string;
    subject_id: string;
    identity_type: string;
    credential_framework: string;
    decentralized_identifier: {
        did_method: string;
        did_document: any;
        public_keys: any[];
        service_endpoints: any[];
        authentication_methods: any;
        key_rotation: any;
    };
    verifiable_credentials: {
        credential_types: string[];
        issuer_authorities: any[];
        credential_schemas: any;
        proof_mechanisms: any;
        expiration_management: any;
        revocation_registry: any;
    };
    identity_attributes: {
        demographic_data: any;
        professional_credentials: any;
        health_identifiers: any;
        authorization_levels: any;
        specialty_certifications: any;
        institutional_affiliations: any;
    };
    trust_framework: {
        trust_anchors: any[];
        governance_framework: any;
        credential_validation: any;
        reputation_systems: any;
        dispute_resolution: any;
        compliance_monitoring: any;
    };
    privacy_controls: {
        selective_disclosure: any;
        zero_knowledge_proofs: any;
        minimal_disclosure: any;
        consent_management: any;
        data_sovereignty: any;
        anonymity_preservation: any;
    };
    interoperability_standards: {
        cross_platform_support: any;
        standard_compliance: any;
        protocol_bridges: any;
        legacy_integration: any;
        federation_protocols: any;
        semantic_alignment: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class BlockchainInteroperability {
    id: string;
    interop_id: string;
    integration_name: string;
    interop_type: string;
    protocol_standard: string;
    network_topology: {
        connected_networks: any[];
        bridge_protocols: any;
        relay_mechanisms: any;
        consensus_coordination: any;
        state_synchronization: any;
        finality_guarantees: any;
    };
    data_exchange: {
        message_protocols: any;
        data_formats: any;
        semantic_mapping: any;
        transformation_rules: any;
        validation_mechanisms: any;
        error_handling: any;
    };
    security_framework: {
        cryptographic_protocols: any;
        trust_assumptions: any;
        threat_models: any;
        security_proofs: any;
        attack_vectors: any;
        mitigation_strategies: any;
    };
    governance_coordination: {
        multi_chain_governance: any;
        consensus_mechanisms: any;
        upgrade_coordination: any;
        dispute_resolution: any;
        standard_development: any;
        compliance_alignment: any;
    };
    performance_optimization: {
        latency_optimization: any;
        throughput_scaling: any;
        cost_efficiency: any;
        resource_utilization: any;
        load_balancing: any;
        caching_strategies: any;
    };
    use_case_applications: {
        health_data_sharing: any;
        cross_border_payments: any;
        research_collaboration: any;
        supply_chain_integration: any;
        identity_federation: any;
        regulatory_compliance: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class HealthcareBlockchainQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    security_performance: {
        cryptographic_strength: number;
        immutability_assurance: number;
        tamper_detection_rate: number;
        unauthorized_access_prevention: number;
        data_integrity_verification: number;
        consensus_security_level: number;
    };
    privacy_protection: {
        anonymity_preservation: number;
        consent_management_effectiveness: number;
        data_minimization_compliance: number;
        selective_disclosure_accuracy: number;
        privacy_regulation_adherence: number;
        zero_knowledge_proof_success: number;
    };
    interoperability_success: {
        cross_chain_transaction_success: number;
        data_exchange_accuracy: number;
        protocol_compatibility: number;
        semantic_interoperability: number;
        legacy_system_integration: number;
        standard_compliance_rate: number;
    };
    performance_efficiency: {
        transaction_throughput: number;
        confirmation_time: number;
        network_latency: number;
        energy_efficiency: number;
        cost_per_transaction: number;
        scalability_metrics: number;
    };
    governance_effectiveness: {
        consensus_participation: number;
        governance_decision_quality: number;
        stakeholder_engagement: number;
        upgrade_success_rate: number;
        dispute_resolution_efficiency: number;
        regulatory_compliance_score: number;
    };
    user_adoption: {
        platform_utilization_rate: number;
        user_satisfaction_score: number;
        ease_of_use_rating: number;
        training_effectiveness: number;
        support_quality_rating: number;
        feature_adoption_rate: number;
    };
    business_impact: {
        cost_reduction_achievement: number;
        process_efficiency_improvement: number;
        trust_enhancement_score: number;
        transparency_improvement: number;
        regulatory_compliance_benefit: number;
        competitive_advantage_gain: number;
    };
    innovation_advancement: {
        technology_adoption_rate: number;
        smart_contract_deployment: number;
        research_contribution: number;
        ecosystem_development: number;
        partnership_formation: number;
        future_readiness_score: number;
    };
    created_at: Date;
    updated_at: Date;
}
