import { User } from './facility-provider.entity';
export declare class UserGroup {
    id: number;
    uuid: string;
    group_name: string;
    group_description: string;
    active: number;
    is_system_group: number;
    is_default: number;
    group_type: string;
    sort_order: number;
    permissions: string;
    restrictions: string;
    created_at: Date;
    updated_at: Date;
    users: User[];
    group_permissions: GroupPermission[];
    user_assignments: UserGroupAssignment[];
}
export declare class UserGroupAssignment {
    id: number;
    uuid: string;
    user_id: number;
    group_id: number;
    assigned_by: number;
    assigned_date: Date;
    effective_date: Date;
    expiration_date: Date;
    active: number;
    assignment_reason: string;
    notes: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    group: UserGroup;
    assigner: User;
}
export declare class AclSection {
    id: number;
    uuid: string;
    section_name: string;
    section_title: string;
    section_description: string;
    parent_section: string;
    sort_order: number;
    active: number;
    created_at: Date;
    updated_at: Date;
    permissions: GroupPermission[];
}
export declare class GroupPermission {
    id: number;
    uuid: string;
    group_id: number;
    section_id: number;
    permission_name: string;
    allowed: number;
    conditions: string;
    resource_filter: string;
    active: number;
    created_at: Date;
    updated_at: Date;
    group: UserGroup;
    section: AclSection;
}
export declare class UserSession {
    id: number;
    uuid: string;
    user_id: number;
    session_token: string;
    ip_address: string;
    user_agent: string;
    login_time: Date;
    last_activity: Date;
    logout_time: Date;
    active: number;
    device_type: string;
    browser: string;
    operating_system: string;
    location: string;
    is_mobile: number;
    timeout_seconds: number;
    session_data: string;
    logout_reason: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    login_attempts: LoginAttempt[];
}
export declare class LoginAttempt {
    id: number;
    uuid: string;
    user_id: number;
    username: string;
    ip_address: string;
    attempt_time: Date;
    successful: number;
    failure_reason: string;
    user_agent: string;
    session_id: string;
    authentication_method: string;
    additional_data: string;
    created_at: Date;
    user: User;
    session: UserSession;
}
export declare class PasswordHistory {
    id: number;
    uuid: string;
    user_id: number;
    password_hash: string;
    password_salt: string;
    created_date: Date;
    created_from_ip: string;
    hash_algorithm: string;
    active: number;
    created_at: Date;
    user: User;
}
export declare class TwoFactorAuth {
    id: number;
    uuid: string;
    user_id: number;
    auth_method: string;
    secret_key: string;
    backup_codes: string;
    phone_number: string;
    email: string;
    active: number;
    verified: number;
    last_used: Date;
    failed_attempts: number;
    locked_until: Date;
    setup_date: Date;
    created_at: Date;
    updated_at: Date;
    user: User;
    attempts: TwoFactorAttempt[];
}
export declare class TwoFactorAttempt {
    id: number;
    uuid: string;
    two_factor_auth_id: number;
    code_entered: string;
    attempt_time: Date;
    successful: number;
    ip_address: string;
    user_agent: string;
    failure_reason: string;
    created_at: Date;
    two_factor_auth: TwoFactorAuth;
}
export declare class AccountLockout {
    id: number;
    uuid: string;
    user_id: number;
    lockout_reason: string;
    lockout_start: Date;
    lockout_end: Date;
    failed_attempts: number;
    ip_address: string;
    locked_by: number;
    unlocked_by: number;
    unlocked_date: Date;
    active: number;
    notes: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    locker: User;
    unlocker: User;
}
export declare class ApiKey {
    id: number;
    uuid: string;
    user_id: number;
    key_name: string;
    key_hash: string;
    permissions: string;
    ip_whitelist: string;
    expires_at: Date;
    last_used: Date;
    usage_count: number;
    rate_limit: number;
    active: number;
    created_by: number;
    notes: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    creator: User;
    usage_logs: ApiUsageLog[];
}
export declare class ApiUsageLog {
    id: number;
    uuid: string;
    api_key_id: number;
    endpoint: string;
    http_method: string;
    request_time: Date;
    ip_address: string;
    user_agent: string;
    response_status: number;
    response_time_ms: number;
    request_data: string;
    response_data: string;
    error_message: string;
    created_at: Date;
    api_key: ApiKey;
}
