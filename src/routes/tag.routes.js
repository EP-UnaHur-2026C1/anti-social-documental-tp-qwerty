const express = require("express");
const router = express.Router();
const tagSchema = require("../schemas/tag.schema");
const Tag = require("../models/Tag");

const {
    obtenerTags,
    obtenerTagPorId,
    crearTag,
    actualizarTag,
    eliminarTag,
} = require("../controllers/tag.controller");

const validarEntidad = require("../middlewares/validarEntidad");
const validarEntidadId = require("../middlewares/validarEntidadId");
const validarObjectIds = require("../middlewares/validarObjectIds");

router.get("/", obtenerTags);
router.get("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Tag, "Tag", "id"),
    obtenerTagPorId);
router.post("/",
    validarEntidad(tagSchema),
    crearTag);
router.put("/:id", 
    validarObjectIds(["id"]),
    validarEntidadId(Tag, "Tag", "id"),
    validarEntidad(tagSchema),
    actualizarTag);
router.delete("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(Tag, "Tag", "id"),
    eliminarTag);

module.exports = router;