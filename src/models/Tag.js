const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      maxlength: [20, "El nombre no puede superar los 100 caracteres"],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag; 