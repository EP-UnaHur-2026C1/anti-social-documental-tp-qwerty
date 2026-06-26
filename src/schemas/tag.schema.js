const Joi = require("joi");

const tagSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(20)
        .required()
        .trim()
        .messages({
            "string.base": "El nombre debe ser texto",
            "string.empty": "El nombre es obligatorio",
            "string.min": "El nombre debe tener al menos 3 caracteres",
            "string.max": "El nombre no puede superar los 20 caracteres",
            "any.required": "El nombre es obligatorio"
        }),
});

module.exports = tagSchema;