const mongoose = require("mongoose");

const postImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, "La URL es obligatoria"],
      trim: true,
      maxlength: [300, "La url no puede superar los 300 caracteres"],
    },
  },
  {
    timestamps: true,
  }
);

const PostImage = mongoose.model("PostImage", postImageSchema);
module.exports = PostImage;