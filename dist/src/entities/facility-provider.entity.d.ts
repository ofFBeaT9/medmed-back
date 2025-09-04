import { User } from './user.entity';
export declare class Facility {
    id: number;
    uuid: string;
    name: string;
    phone: string;
    fax: string;
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country_code: string;
    federal_ein: string;
    website: string;
    email: string;
    service_location: string;
    billing_location: string;
    accepts_assignment: string;
    pos_code: string;
    domain_identifier: number;
    attn: string;
    tax_id_type: string;
    color: string;
    primary_business_entity: number;
    facility_npi: string;
    facility_taxonomy: string;
    facility_code: string;
    mail_street: string;
    mail_street2: string;
    mail_city: string;
    mail_state: string;
    mail_zip: string;
    oid: string;
    inactive: number;
    info: string;
    created_at: Date;
    updated_at: Date;
}
export declare class FacilityUserRight {
    id: number;
    uuid: string;
    user_id: number;
    facility_id: number;
    created_at: Date;
    updated_at: Date;
    facility: Facility;
    user: User;
}
export declare class UserSetting {
    setting_id: number;
    uuid: string;
    user_id: number;
    setting_label: string;
    setting_value: string;
    created_at: Date;
    updated_at: Date;
    user: User;
}
export declare class ProviderType {
    pt_id: number;
    uuid: string;
    type_name: string;
    type_description: string;
    created_at: Date;
    updated_at: Date;
}
export declare class X12Partner {
    id: number;
    uuid: string;
    name: string;
    id_number: string;
    x12_sender_id: string;
    x12_receiver_id: string;
    x12_version: string;
    processing_format: string;
    x12_isa05: number;
    x12_isa07: number;
    x12_isa14: number;
    x12_isa15: number;
    x12_gs02: string;
    x12_per06: string;
    x12_gs03: string;
    created_at: Date;
    updated_at: Date;
}
export declare class Clearinghouse {
    id: number;
    uuid: string;
    hcfa_id: string;
    x12_partner_id: number;
    eligibility_id: string;
    claims_v5010_id: string;
    eligibility_v5010_id: string;
    created_at: Date;
    updated_at: Date;
}
export declare class InsuranceTypeCode {
    id: number;
    uuid: string;
    type: string;
    claim_type: string;
    created_at: Date;
    updated_at: Date;
}
export declare class AddressBook {
    id: number;
    uuid: string;
    title: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    suffix: string;
    organization: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    street2: string;
    city2: string;
    state2: string;
    zip2: string;
    phone: string;
    fax: string;
    phone2: string;
    email: string;
    url: string;
    assistant: string;
    valedictory: string;
    notes: string;
    type: string;
    created_at: Date;
    updated_at: Date;
}
export declare class Pharmacy {
    id: number;
    uuid: string;
    name: string;
    transmit_method: string;
    email: string;
    ncpdp: string;
    npi: string;
    created_at: Date;
    updated_at: Date;
}
