const express = require("express");
const router = express.Router();
const commentSchema = require("../schemas/comment.schema");
const Comment = require("../models/Comment");

const {
    obtenerComentarios,
    obtenerComentarioPorId,
    crearComentario,
    actualizarComentario,
    eliminarComentario,
} = require("../controllers/comment.controller");

const validarEntidad = require("../middlewares/validarEntidad");
const validarEntidadId = require("../middlewares/validarEntidadId");
const validarObjectIds = require("../middlewares/validarObjectIds");

router.get("/",
    obtenerComentarios);
router.get("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Comment, "Comentario", "id"),
    obtenerComentarioPorId);
router.post("/",
    validarEntidad(commentSchema),
    crearComentario);
router.put("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Comment, "Comentario", "id"),
    validarEntidad(commentSchema),
    actualizarComentario);
router.delete("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Comment, "Comentario", "id"),
    eliminarComentario);

module.exports = router;