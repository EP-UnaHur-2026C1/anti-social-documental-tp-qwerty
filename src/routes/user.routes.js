const express = require("express");
const router = express.Router();
const userSchema = require("../schemas/user.schema");
const User = require("../models/User");

const {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
} = require("../controllers/user.controller");

const validarEntidad = require("../middlewares/validarEntidad");
const validarEntidadId = require("../middlewares/validarEntidadId");
const validarObjectIds = require("../middlewares/validarObjectIds");

router.get("/", obtenerUsuarios);
router.get("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(User, "Usuario", "id"),
    obtenerUsuarioPorId);
router.post("/",
    validarEntidad(userSchema),
    crearUsuario);
router.put("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(User, "Usuario", "id"),
    validarEntidad(userSchema),
    actualizarUsuario);
router.delete("/:id",
    validarObjectIds(["id"]),
    validarEntidadId(User, "Usuario", "id"),
    eliminarUsuario);

module.exports = router;