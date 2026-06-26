console.log("UnaHur - Anti-Social net");

const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const commentRoutes = require("./routes/comment.routes");
const postImageRoutes = require("./routes/postImage.routes");
const tagRoutes = require("./routes/tag.routes");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());


app.get("/", (req,res) => {
    res.send("Anti Social API funcionando");
})

app.use("/usuarios", userRoutes);
app.use("/comentarios", commentRoutes);
app.use("/posts", postRoutes);
app.use("/imagenes", postImageRoutes);
app.use("/tags", tagRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})