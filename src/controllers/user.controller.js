const User = require("../models/User");

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find().select("-createdAt -updatedAt -__v");
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los usuarios",
            error: error.message,
        });
    }
};

const obtenerUsuarioPorId = async (req, res) => {
    const usuario = req.usuario;
    res.status(200).json(usuario);
};

const crearUsuario = async (req,res) => {
    try {
        await User.create(req.body);
        res.status(201).json({message: "Usuario creado con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el usuario",
            error: error.message,
        });
    }
};

const actualizarUsuario = async (req,res) => {
    try {
        const id = req.usuario._Id;
        await User.findByIdAndUpdate(id, req.body, {
            runValidators: true,
        });
        res.status(200).json({message: "Usuario actualizado con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el usuario",
            error: error.message,
        });
    }
};

const eliminarUsuario = async (req,res) => {
    try {
        const id = req.usuario._Id;
        await User.findByIdAndDelete(id);
        
        res.status(200).json({message: "Usuario eliminado con exito"});
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el usuario",
            error: error.message,
        });
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
};