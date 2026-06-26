const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        nickName: {
            type: String,
            required: [true, "El nickname es obligatorio"],
            maxlength: [20, "El nickname no puede superar los 20 caracteres"],
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "El email es obligatorio"],
            unique: true,
            lowercase: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model("User", userSchema);
module.exports = User;