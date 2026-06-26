const Tag = require("../models/Tag");

const obtenerTags = async (req, res) => {
    try {
        const tags = await Tag.find().select("-createdAt -updatedAt -__v");
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los tags",
            error: error.message,
        });
    }
};

const obtenerTagPorId = async (req, res) => {
    const tag = req.tag;
    res.status(200).json(tag);
};

const crearTag = async (req,res) => {
    try {
        await Tag.create(req.body);
        res.status(201).json({message: "Tag creado con exito!",});
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el tag",
            error: error.message,
        });
    }
};

const actualizarTag = async (req,res) => {
    try {
        const id = req.tag._id;
        await Tag.findByIdAndUpdate(id, req.body, {
            runValidators: true,
        });
        res.status(200).json({message: "Tag actualizado con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el tag",
            error: error.message,
        });
    }
};

const eliminarTag = async (req,res) => {
    try {
        const id = req.tag._id;
        await Tag.findByIdAndDelete(id);
        res.status(200).json({message: "Tag eliminado con exito"});
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el tag",
            error: error.message,
        });
    }
};

module.exports = {
    obtenerTags,
    obtenerTagPorId,
    crearTag,
    actualizarTag,
    eliminarTag,
};