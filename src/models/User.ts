import { Schema, model } from "mongoose";

const userSchema = new Schema({
    id_user: {
        type: Number,
        required: true,
        unique: true // Asegura que el ID sea único
    },
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
        unique: true, // Asegura que el correo electrónico sea único
        match: /.+\@.+\..+/ // Validación básica para el formato del correo
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: [String], // Array de strings
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now // Establece la fecha de creación por defecto como la fecha actual
    },
    active: {
        type: Boolean,
        default: true // Estado activo por defecto
    }
});

// Exporta el modelo de usuario
export default model("User", userSchema);
