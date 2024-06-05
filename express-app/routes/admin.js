const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/admin', adminController.getHomePage);
router.get('/add-product', adminController.getProductForm);
router.post('/add-product', adminController.postProduct);
router.get('/edit-product/:prodId', adminController.editProductPage);
router.post('/edit-product', adminController.editProductPost);
router.post('/delete-product', adminController.deleteProduct);

// SALES routes
router.get('/admin-sales', adminController.getSalesPage);
router.get('/add-sales', adminController.getSalesForm);
router.post('/add-sales', adminController.postSales);
router.get('/edit-sales/:salesId', adminController.editSalesPage);
router.post('/edit-sales/:salesId', adminController.editSalesPost);
router.post('/delete-sales', adminController.deleteSales);

module.exports = router;
