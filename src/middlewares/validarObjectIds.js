const mongoose = require("mongoose");

const validarObjectIds = (ids = []) => {
    return (req, res, next) => {

        for (let idActual of ids) {
            const id = req.params[idActual];

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    message: `El ID: ${idActual} es inválido`
                });
            }
        }
        next();
    };
};

module.exports = validarObjectIds;