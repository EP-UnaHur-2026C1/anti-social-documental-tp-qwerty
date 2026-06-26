const Joi = require("joi");

const postImageSchema = Joi.object({
    url: Joi.string()
        .min(3)
        .max(300)
        .required()
        .trim()
        .messages({
            "string.base": "La url debe ser texto",
            "string.empty": "La url es obligatoria",
            "string.min": "La url debe tener al menos 3 caracteres",
            "string.max": "La url no puede superar los 300 caracteres",
            "any.required": "La url es obligatoria"
        }),
});

module.exports = postImageSchema;