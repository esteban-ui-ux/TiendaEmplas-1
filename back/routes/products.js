const express=require("express")
const router=express.Router();

const{getProducts, newProduct, getProductById}=require("../controllers/productsController")

router.route('/productos').get(getProducts)//Se establece: ruta del get
router.route('/producto/nuevo').post(newProduct)//Se establece: la ruta- producto nuevo creado
router.route('/producto/:id').get(getProductById)//Ruta destinada a consultar producto por id

module.exports=router;
