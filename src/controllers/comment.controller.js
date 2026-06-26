const Comment = require("../models/Comment");

const obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await Comment.find()
        .populate("usuario", "nickName")
        .populate("post", "descripcion")
        .select("-createdAt -updatedAt -__v");
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los comentarios",
            error: error.message,
        });
    }
};

const obtenerComentarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const comentario = await Comment.findById(id)
        .populate("usuario", "nickName")
        .populate("post", "descripcion")
        .select("-createdAt -updatedAt -__v");

        res.status(200).json(comentario);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el comentario",
            error: error.message,
        });
    }
};

const crearComentario = async (req,res) => {
    try {
        const nuevoComentario = await Comment.create(req.body);
        res.status(201).json({message: "Comentario creado con exito!"});

    } catch (error) {
        res.status(500).json({
            message: "Error al crear el comentario",
            error: error.message,
        });
    }
};

const actualizarComentario = async (req,res) => {
    try {
        const id = req.imagen._id;
        await Comment.findByIdAndUpdate(id, req.body, {
            runValidators: true,
        });
        res.status(200).json({message: "Comentario actualizado con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el comentario",
            error: error.message,
        });
    }
};

const eliminarComentario = async (req,res) => {
    try {
        const id = req.imagen._id;
        await Comment.findByIdAndDelete(id);

        res.status(200).json({message: "Comentario eliminado con exito"});
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el comentario",
            error: error.message,
        });
    }
};

module.exports = {
    obtenerComentarios,
    obtenerComentarioPorId,
    crearComentario,
    actualizarComentario,
    eliminarComentario,
};