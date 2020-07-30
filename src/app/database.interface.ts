export interface Database {
    name: string;
    address: string;
    role: string;
    requestedStatus: string;
    currentStatus: string;
    error?: string;
    default: boolean;
}