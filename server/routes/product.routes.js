import express from 'express'
import productCtrl from '../controllers/product.controller.js' 
const router = express.Router()
router.route('/api/products').get(productCtrl.list)
router.route('/api/products/:productsId').get(productCtrl.read)
router.route('/api/products').post(productCtrl.create)
router.route('/api/products/:productsId').put(productCtrl.update)
router.route('/api/products/:productsId').delete(productCtrl.remove)
router.route('/api/products').delete(productCtrl.remove)
router.param('/api/products').get( productCtrl.findProductsByName)
 export default router

