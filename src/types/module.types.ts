import { Number, Types } from "mongoose";
export interface ModuleInterface {
    name: string,
    parent: Types.ObjectId,
    url: string,
    icon: String,
    order: Number
    description: string

}