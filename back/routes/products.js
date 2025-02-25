const express=require("express")
const router=express.Router();

const{getProducts, newProduct, getProductById, updateProduct, deleteProduct}=require("../controllers/productsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //establecemos la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);//Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); //Creacion de la ruta de eliminacion por id


module.exports=router;