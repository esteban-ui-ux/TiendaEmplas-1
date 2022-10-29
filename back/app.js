const express = require("express");
const app = express();

app.use(express.json());

const productos = require("./routes/products");

app.use("api", productos); //  Se indica que la 1ra  ruta es Productos

module.exports = app;
