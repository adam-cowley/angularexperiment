export interface User {
    user: string;
    roles: string[];
    passwordChangeRequired: boolean;
    suspended: boolean;
}