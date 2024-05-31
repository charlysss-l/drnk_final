//used in /routes/shop.js
//use shop.js from Controllers folder to create a new route for the shop page
//create a new route for the shop page
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getHomePage = (req, res, next) => {
    const prodId = 'some-product-id';
    res.render('client/home_client', { name: "Drnk-SHOP", prods: [], path: '/', pageTitle: 'Home', prodId: prodId });
}

exports.getAboutPage = (req, res, next) => {
    const prodId = 'some-product-id';
    res.render('client/about', { name: "Drnk-SHOP", prods: [], path: '/', pageTitle: 'Home', prodId: prodId });
}




// / => GET used for rendering the shop page
exports.getAllProducts = (req, res, next) => {
    //use findAll() method from Product class to get all the products in products.js
    const products = Product.findAll();
    //render the shop page and pass the products array
    res.render('index', { name: "Drnk-SHOP", prods: products, path: '/', pageTitle: 'Home' });
}

exports.getAllProductsAdmin = (req, res, next) => {
    //use findAll() method from Product class to get all the products in products.js
    const products = Product.findAll();
    //render the shop page and pass the products array
    res.render('index_admin', { name: "Drnk-SHOP", prods: products, path: '/', pageTitle: 'Home' });
}

exports.getProductDetails = (req, res, next) => {
    const products = Product.findById(req.params.prodId);
    console.log(products);
    if (products.length === 0) {
        // Render the index view with a message
        res.render('index', { message: 'Product not found', name: "Drnk-SHOP", prods: [], path: '/', pageTitle: 'Home' });
    } else {
        res.render('product-detail', { prod: products[0], pageTitle: 'Product Detail', path: '/', name: 'Charlize' });
    }
}

exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.id)[0];

    Cart.save(addedProduct);
    res.redirect('client/cart');
    //console to show addedProduct in the console
    //console.log(addedProduct);
}

exports.getCart = (req, res, next) => {
    http: //localhost:3000/client/cart
    res.render('client/cart', { cart: Cart.getCart(), pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Charlize' });
    //console to show the cart in the console
    //console.log(Cart.getCart());
}

exports.deleteInCart = (req, res, next) => {
    console.log(req.body.prodId);
    Cart.delete(req.body.prodId);
    res.redirect('client/cart');
}