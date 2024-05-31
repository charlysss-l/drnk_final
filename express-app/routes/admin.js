//use admin.js from Controllers folder to create a new route for the admin page

const express = require('express');
const fs = require('fs');
const path = require('path');

const adminController = require('../controllers/admin');
const router = express.Router();


router.get('/admin', adminController.getHomePage);



router.get('/add-product', adminController.getProductForm);

// /admin/add-product => POST used for storing the product in the database
router.post('/add-product', adminController.postProduct);

router.get('/edit-product/:prodId', adminController.editProductPage);

router.post('/edit-product', adminController.editProductPost);

router.post('/delete-product', adminController.deleteProduct);


module.exports = router;