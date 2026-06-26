const Joi = require("joi");

const commentSchema = Joi.object({
    texto: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.base": "El cuerpo del texto debe ser texto",
            "string.empty": "El texto no puede estar vacio",
            "string.min": "El texto debe tener al menos 3 caracteres",
            "string.max": "El texto no puede superar los 100 caracteres",
            "any.required": "El texto es obligatorio"
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
    
    post: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.base": "El post debe ser un ID válido",
            "string.length": "ID de post inválido",
            "any.required": "El post es obligatorio"
        }),
});

module.exports = commentSchema;