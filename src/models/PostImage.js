const mongoose = require("mongoose");

const postImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, "La URL es obligatoria"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostImage = mongoose.model("PostImage", postImageSchema);
module.exports = PostImage;