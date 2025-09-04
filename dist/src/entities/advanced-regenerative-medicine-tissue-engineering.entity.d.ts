export declare class StemCellTherapyProtocols {
    id: string;
    protocol_id: string;
    therapy_name: string;
    stem_cell_type: string;
    therapeutic_indication: string;
    cell_characterization: {
        surface_markers: any[];
        differentiation_potential: any;
        proliferation_capacity: any;
        genetic_stability: any;
        epigenetic_profile: any;
        functional_assessment: any;
    };
    isolation_expansion: {
        cell_source: any;
        isolation_methods: any;
        culture_conditions: any;
        expansion_protocols: any;
        quality_control: any;
        cryopreservation: any;
    };
    differentiation_protocols: {
        differentiation_factors: any[];
        culture_media: any;
        growth_factors: any;
        temporal_sequences: any;
        efficiency_markers: any;
        maturation_assessment: any;
    };
    delivery_methods: {
        delivery_route: string;
        cell_dose: any;
        delivery_vehicle: any;
        timing_protocols: any;
        repeat_administrations: any;
        combination_therapies: any;
    };
    safety_monitoring: {
        tumorigenicity_assessment: any;
        immunogenicity_evaluation: any;
        biodistribution_tracking: any;
        long_term_monitoring: any;
        adverse_event_tracking: any;
        risk_mitigation: any;
    };
    efficacy_endpoints: {
        primary_endpoints: any[];
        secondary_endpoints: any[];
        biomarker_assessment: any;
        functional_outcomes: any;
        imaging_endpoints: any;
        patient_reported_outcomes: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class TissueEngineeringConstructs {
    id: string;
    construct_id: string;
    construct_name: string;
    target_tissue: string;
    engineering_approach: string;
    scaffold_design: {
        biomaterial_composition: any;
        architectural_design: any;
        porosity_structure: any;
        mechanical_properties: any;
        degradation_kinetics: any;
        biocompatibility: any;
    };
    cellular_components: {
        cell_types: any[];
        cell_seeding_density: any;
        cell_distribution: any;
        cell_viability: any;
        cell_interactions: any;
        co_culture_systems: any;
    };
    bioreactor_culture: {
        bioreactor_type: any;
        culture_conditions: any;
        mechanical_stimulation: any;
        perfusion_systems: any;
        monitoring_parameters: any;
        maturation_protocols: any;
    };
    bioactive_factors: {
        growth_factors: any[];
        cytokines: any[];
        extracellular_matrix: any;
        bioactive_molecules: any;
        delivery_systems: any;
        temporal_release: any;
    };
    functional_assessment: {
        mechanical_testing: any;
        biochemical_analysis: any;
        histological_evaluation: any;
        molecular_markers: any;
        functional_assays: any;
        comparative_analysis: any;
    };
    preclinical_validation: {
        in_vitro_studies: any;
        animal_models: any;
        biocompatibility_testing: any;
        efficacy_evaluation: any;
        safety_assessment: any;
        regulatory_pathway: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class OrganBioprintingSystems {
    id: string;
    bioprinting_id: string;
    organ_model: string;
    bioprinting_technology: string;
    complexity_level: string;
    bioink_formulation: {
        hydrogel_composition: any;
        cell_concentration: any;
        rheological_properties: any;
        crosslinking_mechanisms: any;
        biocompatibility: any;
        printability_assessment: any;
    };
    printing_parameters: {
        layer_height: any;
        printing_speed: any;
        nozzle_diameter: any;
        temperature_control: any;
        pressure_settings: any;
        environmental_conditions: any;
    };
    design_modeling: {
        cad_design: any;
        medical_imaging_integration: any;
        computational_modeling: any;
        print_path_optimization: any;
        structural_analysis: any;
        process_simulation: any;
    };
    post_printing_processing: {
        crosslinking_procedures: any;
        maturation_protocols: any;
        perfusion_culture: any;
        mechanical_conditioning: any;
        quality_assessment: any;
        sterilization_methods: any;
    };
    vascularization_strategies: {
        vascular_network_design: any;
        angiogenesis_promotion: any;
        perfusion_systems: any;
        oxygen_transport: any;
        nutrient_delivery: any;
        waste_removal: any;
    };
    functional_validation: {
        viability_assessment: any;
        functionality_testing: any;
        integration_studies: any;
        long_term_culture: any;
        transplantation_models: any;
        clinical_translation: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class BiomaterialScaffoldDevelopment {
    id: string;
    scaffold_id: string;
    scaffold_name: string;
    biomaterial_category: string;
    fabrication_method: string;
    material_composition: {
        primary_materials: any[];
        secondary_components: any[];
        crosslinking_agents: any;
        additives: any[];
        surface_modifications: any;
        functionalization: any;
    };
    structural_properties: {
        porosity: any;
        pore_size_distribution: any;
        interconnectivity: any;
        surface_area: any;
        fiber_architecture: any;
        gradient_structures: any;
    };
    mechanical_characteristics: {
        elastic_modulus: any;
        tensile_strength: any;
        compressive_strength: any;
        fatigue_resistance: any;
        viscoelastic_properties: any;
        anisotropic_behavior: any;
    };
    biological_properties: {
        biocompatibility: any;
        cell_adhesion: any;
        cell_proliferation: any;
        differentiation_support: any;
        protein_adsorption: any;
        immune_response: any;
    };
    degradation_behavior: {
        degradation_mechanism: any;
        degradation_rate: any;
        byproduct_analysis: any;
        mass_loss_kinetics: any;
        mechanical_evolution: any;
        biocompatibility_maintenance: any;
    };
    functional_enhancements: {
        drug_delivery_capability: any;
        growth_factor_incorporation: any;
        antimicrobial_properties: any;
        electrical_conductivity: any;
        magnetic_responsiveness: any;
        stimuli_responsiveness: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class CellReprogrammingProtocols {
    id: string;
    reprogramming_id: string;
    protocol_name: string;
    reprogramming_type: string;
    target_cell_type: string;
    starting_cell_source: {
        cell_type: string;
        isolation_method: any;
        cell_characterization: any;
        quality_criteria: any;
        donor_considerations: any;
        ethical_compliance: any;
    };
    reprogramming_factors: {
        transcription_factors: any[];
        small_molecules: any[];
        microRNAs: any[];
        proteins: any[];
        delivery_methods: any;
        factor_combinations: any;
    };
    delivery_systems: {
        viral_vectors: any;
        non_viral_methods: any;
        transient_delivery: any;
        integration_free: any;
        episomal_vectors: any;
        protein_delivery: any;
    };
    culture_conditions: {
        media_formulations: any;
        growth_factors: any;
        small_molecules: any;
        substrate_coatings: any;
        oxygen_conditions: any;
        mechanical_stimuli: any;
    };
    quality_assessment: {
        reprogramming_efficiency: any;
        pluripotency_markers: any;
        differentiation_potential: any;
        genetic_stability: any;
        epigenetic_status: any;
        functional_validation: any;
    };
    safety_considerations: {
        genomic_integrity: any;
        tumorigenicity_risk: any;
        immunogenicity: any;
        residual_factors: any;
        long_term_stability: any;
        clinical_safety: any;
    };
    status: string;
    created_at: Date;
    updated_at: Date;
}
export declare class RegenerativeMedicineQualityMetrics {
    id: string;
    metrics_id: string;
    measurement_period: string;
    therapeutic_efficacy: {
        tissue_regeneration_rate: number;
        functional_recovery_score: number;
        clinical_improvement: number;
        patient_outcome_enhancement: number;
        treatment_durability: number;
        quality_of_life_improvement: number;
    };
    stem_cell_therapy_performance: {
        cell_viability_rate: number;
        engraftment_success: number;
        differentiation_efficiency: number;
        therapeutic_effect_duration: number;
        safety_profile_score: number;
        immunological_compatibility: number;
    };
    tissue_engineering_success: {
        construct_integration_rate: number;
        mechanical_function_restoration: number;
        biological_function_recovery: number;
        vascularization_success: number;
        long_term_stability: number;
        host_tissue_compatibility: number;
    };
    bioprinting_quality: {
        printing_accuracy: number;
        cell_viability_post_printing: number;
        structural_integrity: number;
        functional_tissue_formation: number;
        scalability_achievement: number;
        reproducibility_score: number;
    };
    biomaterial_performance: {
        biocompatibility_score: number;
        mechanical_property_match: number;
        degradation_control: number;
        cellular_response_quality: number;
        integration_success_rate: number;
        adverse_reaction_rate: number;
    };
    safety_assurance: {
        tumorigenicity_risk_level: number;
        immunological_safety: number;
        infection_prevention_rate: number;
        long_term_safety_monitoring: number;
        adverse_event_management: number;
        regulatory_compliance_score: number;
    };
    manufacturing_quality: {
        production_consistency: number;
        quality_control_pass_rate: number;
        scalability_success: number;
        cost_effectiveness: number;
        regulatory_approval_rate: number;
        commercial_viability: number;
    };
    innovation_advancement: {
        research_breakthrough_rate: number;
        technology_development: number;
        clinical_translation_success: number;
        patent_generation: number;
        collaboration_network_growth: number;
        knowledge_transfer_effectiveness: number;
    };
    created_at: Date;
    updated_at: Date;
}
