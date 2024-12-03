import { z } from "zod";
import mongoose from "mongoose";


const registerModuleShema= z.object({
    name: z.string({required_error: 'Name is required'}).min(5, {message: 'name must be at least 5 characters'}),
    parent: z
    .string()
    .nullable() // Permite que el valor sea null
    .refine(val => val === null || mongoose.Types.ObjectId.isValid(val), {
      message: 'ID is not valid',
    }),
    url: z.string({required_error: 'url is requeried'}),
    icon: z.string({required_error: 'icon is requeried'}),
    order: z.number({required_error: 'Order is requeried'}),
    description: z.string(),

})


export {registerModuleShema}