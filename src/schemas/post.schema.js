const Joi = require("joi");

const postSchema = Joi.object({
    descripcion: Joi.string()
        .min(3)
        .required()
        .messages({
            "string.base": "La descripción debe ser texto",
            "string.empty": "La descripción no puede estar vacia",
            "string.min": "La descripción debe tener al menos 3 caracteres",
            "any.required": "La descripción es obligatoria"
        }),

    usuario: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.base": "El usuario debe ser un ID válido",
            "string.length": "ID de usuario inválido",
            "any.required": "El usuario es obligatorio"
        }),

    imagenes: Joi.array().items(
        Joi.string()
        .hex()
        .length(24)
    ).optional(),

    tags: Joi.array().items(
        Joi.string()
        .hex()
        .length(24)
    ).optional()
});

module.exports = postSchema;