export interface Iusers {
    id ?: string,
    lastname: string;
    firstname: string;
    username : string,
    password: string,
    role: Role,
}

export enum Role {
    admin = "admin",
    employee = "employee",
    client = "client"
}