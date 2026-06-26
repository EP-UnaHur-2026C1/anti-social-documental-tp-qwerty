const PostImage = require("../models/PostImage");

const obtenerImagenes = async (req, res) => {
    try {
        const imagenes = await PostImage.find().select("-createdAt -updatedAt -__v");
        res.status(200).json(imagenes);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener las imágenes",
            error: error.message,
        });
    }
};

const obtenerImagenPorId = async (req, res) => {
    const imagen = req.imagen;
    res.status(200).json(imagen);
};

const crearImagen = async (req,res) => {
    try {
        await PostImage.create(req.body);
        res.status(201).json({message: "Imagen creada con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al crear la imagen",
            error: error.message,
        });
    }
};

const actualizarImagen = async (req,res) => {
    try {
        const id = req.imagen._id;
        await PostImage.findByIdAndUpdate(id, req.body, {
            runValidators: true,
        });

        res.status(200).json({message: "Imagen actualizada con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar la imagen",
            error: error.message,
        });
    }
};

const eliminarImagen = async (req,res) => {
    try {
        const id = req.imagen._id;
        await PostImage.findByIdAndDelete(id);

        res.status(200).json({
            message: "Imagen eliminada con exito"});
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar la imagen",
            error: error.message,
        });
    }
};

module.exports = {
    obtenerImagenes,
    obtenerImagenPorId,
    crearImagen,
    actualizarImagen,
    eliminarImagen,
};