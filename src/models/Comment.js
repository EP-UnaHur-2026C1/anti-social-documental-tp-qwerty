const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        texto: {
            type: String,
            required: [true, "El texto es obligatorio"],
            maxlength: [100, "El texto no puede superar los 100 caracteres"],
        },
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "El usuario es obligatorio"],
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: [true, "el post es obligatorio"],
        },
    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;