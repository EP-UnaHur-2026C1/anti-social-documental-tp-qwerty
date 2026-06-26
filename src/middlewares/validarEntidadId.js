const validarEntidadId = (modelo, nombreEntidad, entidadId) => {
    return async (req, res, next) => {
        try {
            const entidad = await modelo.findById(req.params[entidadId]);

            if (!entidad) {
                return res.status(404).json({
                    message: `${nombreEntidad} no encontrado`
                });
            }
            req[nombreEntidad.toLowerCase()] = entidad;
            next();
        } catch (error) {
            return res.status(500).json({
                message: `Error al buscar el ${nombreEntidad}`,
                error: error.message
            });
        }
    };
} 

module.exports = validarEntidadId;