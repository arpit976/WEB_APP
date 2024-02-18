import express from 'express'
import productCtrl from '../controllers/product.controller.js' 
const router = express.Router()

router.get('/api/products/search', productCtrl.findProductsByNameKeyword);
router.get('/api/products/:id', productCtrl.findProductById);
router.put('/api/products/:id', productCtrl.updateProductById);
router.delete('/api/products/:id', productCtrl.removeProductById);
router.get('/api/products', productCtrl.getAllProducts);
router.post('/api/products', productCtrl.addNewProduct);
router.delete('/api/products', productCtrl.removeAllProducts);

 export default router

