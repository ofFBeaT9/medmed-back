export declare class PaginationDto {
    page?: number;
    limit?: number;
    get skip(): number;
}
export declare class PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    constructor(data: T[], total: number, page: number, limit: number);
}
