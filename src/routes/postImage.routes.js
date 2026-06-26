const express = require("express");
const router = express.Router();
const postImageSchema = require("../schemas/postImage.schema");
const postImage = require("../models/PostImage");

const {
    obtenerImagenes,
    obtenerImagenPorId,
    crearImagen,
    actualizarImagen,
    eliminarImagen,
} = require("../controllers/postImage.controller");

const validarEntidad = require("../middlewares/validarEntidad");
const validarEntidadId = require("../middlewares/validarEntidadId");
const validarObjectIds = require("../middlewares/validarObjectIds");
const PostImage = require("../models/PostImage");

router.get("/",
    obtenerImagenes);
router.get("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(PostImage, "Imagen", "id"),
    obtenerImagenPorId);
router.post("/",
    validarEntidad(postImageSchema),
    crearImagen);
router.put("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(PostImage, "Imagen", "id"),
    validarEntidad(postImageSchema),
    actualizarImagen);
router.delete("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(PostImage, "Imagen", "id"),
    eliminarImagen);

module.exports = router;