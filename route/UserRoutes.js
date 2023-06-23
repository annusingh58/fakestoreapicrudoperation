import express from  "express";
import { addproduct, deleteproduct, getProduct, register, updateuser } from "../controllers/UserControllers.js";
import { addproductcheck, checkgetuser, checksregister, deletecheck, upadtecheck } from "../middleware/authmiddleware.js";
  

const router =express.Router();


router.post('/register',checksregister,register);
router.post('/getProduct',checkgetuser,getProduct);
router.post('/addproduct',addproductcheck,addproduct);
router.post('/updateuser',upadtecheck,updateuser);
router.post('/deleteproduct',deletecheck,deleteproduct)



router.post('/checksregister',checksregister);
router.post('/checkgetuser',checkgetuser);
router.post('/addproductcheck',addproductcheck);
router.post('/upadtecheck',upadtecheck);
router.post('/deletecheck',deletecheck);

export default router;