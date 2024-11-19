import { Schema, model } from "mongoose";

const rolSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // Cada rol debe ser único
    },
    description: {
        type: String,
        required: false // Opcional, para describir el propósito del rol
    },
    permissions: [{
        type: Schema.Types.ObjectId, 
        ref: "Permission", 
        required: false 
    }]
});

// Exporta el modelo de rol
export default model("Rol", rolSchema);
