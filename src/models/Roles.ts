import { Schema, model } from "mongoose";

const rolesShema = new Schema({
    id_rol: {
        type: Number,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
 
});

// Exporta el modelo de usuario
export default model("Roles", rolesShema);
