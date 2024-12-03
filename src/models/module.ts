import { model, Schema } from "mongoose";

const ModuleShema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Module",
    default: null,
  }, // Relación jerárquica (módulo padre)
  url: {
    type: String,
    required: true,
  }, // URL del módulo para control
  icon: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
  }, // Para ordenar los módulos en listas o menús
  description: {
    type: String,
  },
});

export default model("Module", ModuleShema);
