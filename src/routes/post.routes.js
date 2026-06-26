const express = require("express");
const router = express.Router();
const postSchema = require("../schemas/post.schema");
const Post = require("../models/Post");
const PostImage = require("../models/PostImage");
const Tag = require("../models/Tag");

const {
    obtenerPosts,
    obtenerPostPorId,
    crearPost,
    actualizarPost,
    eliminarPost,
    agregarImagen,
    eliminarImagen,
    agregarTag,
    eliminarTag,
} = require("../controllers/post.controller");

const validarEntidad = require("../middlewares/validarEntidad");
const validarEntidadId = require("../middlewares/validarEntidadId");
const validarObjectIds = require("../middlewares/validarObjectIds");

router.get("/", obtenerPosts);
router.get("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Post, "Post", "id"),
    obtenerPostPorId);
router.post("/",
    validarEntidad(postSchema),
    crearPost);
router.put("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Post, "Post", "id"),
    validarEntidad(postSchema),
    actualizarPost);
router.delete("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Post, "Post", "id"),
    eliminarPost);

router.post("/:id/imagenes/:imagenId",
    validarObjectIds(["id", "imagenId"]), 
    validarEntidadId(Post, "Post", "id"),
    validarEntidadId(PostImage, "Imagen", "imagenId"),
    agregarImagen);
router.delete("/:id/imagenes/:imagenId",
    validarObjectIds(["id", "imagenId"]),
    validarEntidadId(Post, "Post", "id"),
    validarEntidadId(PostImage, "Imagen", "imagenId"),
    eliminarImagen);
router.post("/:id/tags/:tagId",
    validarObjectIds(["id", "tagId"]),
    validarEntidadId(Post, "Post", "id"),
    validarEntidadId(Tag, "Tag", "tagId"),
    agregarTag);
router.delete("/:id/tags/:tagId",
    validarObjectIds(["id", "tagId"]),
    validarEntidadId(Post, "Post", "id"),
    validarEntidadId(Tag, "Tag", "tagId"),
    eliminarTag);

module.exports = router;