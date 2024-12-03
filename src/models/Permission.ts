import { model, Schema } from "mongoose";

const PermissionShema = new Schema({
  module: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Module",
  },
  actions: {
    type: [String],
    required: true,
  },
});

export default model("Permission", PermissionShema);
