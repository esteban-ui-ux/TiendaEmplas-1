const express = require("express");
const router = express.Router();

const { getProducts } = require("../controllers/productsControllers.js"); //traemos el json desde el controlador

router.route("/productos").get(getProducts); //establecemos la ruta del get
module.exports = router;
