const Joi = require("joi");

const userSchema = Joi.object({
    nickName: Joi.string()
        .min(3)
        .max(20)
        .required()
        .trim()
        .messages({
            "string.base": "El nickname debe ser texto",
            "string.empty": "El nickname es obligatorio",
            "string.min": "El nickname debe tener al menos 3 caracteres",
            "string.max": "El nickname no puede superar los 20 caracteres",
            "any.required": "El nickname es obligatorio"
        }),

    email: Joi.string()
        .email()
        .required()
        .lowercase()
        .trim()
        .messages({
            "string.base": "El email debe ser texto",
            "string.empty": "El email es obligatorio",
            "string.email": "El email debe ser válido",
            "any.required": "El email es obligatorio"
        })
});

module.exports = userSchema;