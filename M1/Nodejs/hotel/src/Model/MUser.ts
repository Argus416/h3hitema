import mongoose, { Document, Schema } from 'mongoose';

export interface IUser   {
    id ?: string,
    lastname: string,
    firstname: string,
    username : string,
    password: string,
    role: Role,
}

export enum Role {
    admin = "admin",
    employee = "employee",
    client = "client"
}

const UserSchema = new Schema({
    lastname: String,
    firstname: String,
    username : {
        type: String, 
        unique: true
    },
    password: String,
    role: String,
}, {
    timestamps: true,
});

export default mongoose.model<IUser>('User', UserSchema);
