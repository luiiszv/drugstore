import { Types } from "mongoose";

export interface RolInterface{
    name: string,
    description: string,
    permissions?: Types.ObjectId[];
}