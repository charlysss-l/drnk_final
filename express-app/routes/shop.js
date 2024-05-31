//used in shop.js from Controllers folder to create a new route for the shop page
const express = require('express');
const path = require('path');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/', shopController.getHomePage);

router.get('/about', shopController.getAboutPage);

router.get('/shop', shopController.getAllProducts);

router.get('/shop-admin', shopController.getAllProductsAdmin);

router.get('/products/:prodId', shopController.getProductDetails);

router.post('/add-to-cart', shopController.addToCart);

router.get('/client/cart', shopController.getCart);

router.post('/delete-cart', shopController.deleteInCart);


//throw error to test error handling
router.get('/error-demo', (req, res, next) => {
    throw new Error('This is text Error handling express');
});


module.exports = router;