console.log("UnaHur - Anti-Social net");

//require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Anti Social API funcionando");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})