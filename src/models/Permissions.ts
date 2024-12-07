import { Schema, model } from "mongoose";

const PersmissionsShema = new Schema({
  _id_rol: {
    type: Schema.Types.ObjectId,
    ref: 'Rol',
    require,
  },
  _id_module: {
    type: Schema.Types.ObjectId,
    ref: 'Module',
    require,
  },
  canRead: { type: Boolean, default: false },
  canWrite: { type: Boolean, default: false },
  canEdit: { type: Boolean, default: false },
  canDelete: { type: Boolean, default: false },
});

export default model("Permissions", PersmissionsShema);
