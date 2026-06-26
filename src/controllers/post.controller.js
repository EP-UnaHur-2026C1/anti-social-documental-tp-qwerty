const Post = require("../models/Post");

const obtenerPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        .populate("usuario", "nickName")
        .populate("imagenes", "url")
        .populate("tags", "nombre")
        .select("-createdAt -updatedAt -__v");
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los posts",
            error: error.message,
        });
    }
};

const obtenerPostPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        .populate("usuario", "nickName")
        .populate("imagenes", "url")
        .populate("tags", "nombre")
        .select("-createdAt -updatedAt -__v");

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el post",
            error: error.message,
        });
    }
    
};

const crearPost = async (req,res) => {
    try {
        await Post.create(req.body);
        res.status(201).json({message: "Post creado con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el post",
            error: error.message,
        });
    }
};

const actualizarPost = async (req,res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndUpdate(id, req.body, {
            runValidators: true,
        });

        res.status(200).json({message: "Post actualizado con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el post",
            error: error.message,
        });
    }
};

const eliminarPost = async (req,res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);

        res.status(200).json({message: "Post eliminado con exito"});
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el post",
            error: error.message,
        });
    }
};

const agregarImagen = async (req,res) => {
    try {
        const post = req.post;
        const imagenId = req.imagen._id;
        
        post.imagenes.addToSet(imagenId);
        await post.save();
        res.status(201).json({message: "Imagen agregada al post con exito!"});
    } catch (error) {
        res.status(500).json({
            message: "Error al agregar la imagen al post",
            error: error.message,
        });
    }
};

const eliminarImagen = async (req,res) => {
    try {
        const post = req.post;
        const imagenId = req.imagen._id;

        post.imagenes = post.imagenes.filter(
            (idImg) => idImg.toString() !== imagenId.toString(),
        );
        await post.save();
        res.status(200).json({message: "Imagen eliminada del post con exito!"});

    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar la imagen del post",
            error: error.message,
        });
    }
};

const agregarTag = async (req,res) => {
    try {
        const post = req.post;
        const tagId = req.tag._id;
        post.tags.addToSet(tagId);

        await post.save();
        res.status(201).json({message: "Tag agregado al post con exito!"});

    } catch (error) {
        res.status(500).json({
            message: "Error al agregar el tag al post",
            error: error.message,
        });
    }
};

const eliminarTag = async (req,res) => {
    try {
        const post = req.post;
        const tagId = req.tag._id;
        post.tags = post.tags.filter(
            (idTag) => idTag.toString() !== tagId.toString(),
        );

        await post.save();
        res.status(200).json({message: "Tag eliminado del post con exito!"});

    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el tag del post",
            error: error.message,
        });
    }
};

module.exports = {
    obtenerPosts,
    obtenerPostPorId,
    crearPost,
    actualizarPost,
    eliminarPost,
    agregarImagen,
    eliminarImagen,
    agregarTag,
    eliminarTag,
};