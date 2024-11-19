import { model, Schema } from "mongoose";


const permissionShema= new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        required: false // Opcional
    }
})

export default model('Permission', permissionShema);


