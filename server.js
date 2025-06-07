const express = require("express");
const path = require("path");
const app = express();
const PORT = 1234;

// Ruta para servir el contenido WebGL
app.use("/", express.static(path.join(__dirname, "juego_Web")));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
