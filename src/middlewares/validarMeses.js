const validarMeses = (req, res, next) => {
    if (req.query.meses) {
        const meses = parseInt(req.query.meses);

        if (isNaN(meses) || meses < 0) {
            return res.status(400).json({
                message:"La cantidad de meses debe ser un número válido",
            });
        }
        req.meses = meses;
    }
    next();
}

module.exports = validarMeses;