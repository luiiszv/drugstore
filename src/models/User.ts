import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, //  correo único
        match: /.+\@.+\..+/ // Validación básica para el formato del correo
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: Schema.Types.ObjectId, // Relación con la colección "roles"
        ref: "Rol", // Nombre del modelo relacionado
        required: true
    }],
    creationDate: {
        type: Date,
        default: Date.now //  fecha por defecto 
    },
    active: {
        type: Boolean,
        default: true // Estado activo por defecto
    }
});

// Exporta el modelo de usuario
export default model("User", userSchema);
