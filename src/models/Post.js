const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        descripcion: {
            type: String,
            required:[true, "La descripción es obligatoria"],
        },
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "El usuario es obligatorio"],
        },
        imagenes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "PostImage",
            },
        ],
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tag",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;