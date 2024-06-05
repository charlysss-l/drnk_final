
const Product = require('../models/product');
const Sales = require('../models/sales');

exports.getHomePage = (req, res, next) => {
    const prodId = 'some-product-id';
    const products = Product.findAll();
    res.render('home_admin', { name: "Drnk-SHOP", prods: products, path: '/', pageTitle: 'Inventory', prodId: prodId });
}

exports.getProductForm = (req, res, next) => {
    res.render('add-product', { name: 'Liz', path: '/admin/add-product', pageTitle: 'Add Product' });
}



//store the product in the database
exports.postProduct = (req, res, next) => {
    const product = req.body.product;
    const price = req.body.price;
    const volume = req.body.volume;
    const brand = req.body.brand;
    const sku = req.body.sku;
    const imageURL = req.body.imageURL;

    //create a new product object and save it to the database
    const prod = new Product(null, product, price, volume, brand, sku, imageURL);
    prod.save();
    console.log(prod);
    //redirect to the home page
    res.redirect('/shop-admin');
}


exports.editProductPage = (req, res, next) => {
    const products = Product.findById(req.params.prodId);
    res.render('edit-product', { product: products[0], path: '/', pageTitle: 'Edit Product', name: 'Liz' });
}


exports.editProductPost = (req, res, next) => {
    const updatedProduct = new Product(
        req.body.id,
        req.body.product,
        req.body.price,
        req.body.volume,
        req.body.brand,
        req.body.sku,
        req.body.imageURL);
    updatedProduct.update();
    //res.redirect('/');
    res.redirect('/products/' + updatedProduct.id);
}

exports.deleteProduct = (req, res, next) => {
    Product.deleteById(req.body.id);
    res.redirect('/admin/admin');
}



//SALES

exports.getSalesPage = (req, res, next) => {
    const sales = Sales.findAll();
    res.render('sales_admin', { name: "Drnk-SHOP", sales: sales, pageTitle: 'Sales', path: req.path });
}

exports.getSalesForm = (req, res, next) => {
    res.render('add-sales', { name: 'Liz', path: '/admin/add-sales', pageTitle: 'Add Sales' });
}


//store the sales in the database
exports.postSales = (req, res, next) => {
    const product_name = req.body.product_name;
    const total_sales = req.body.total_sales;
    const date = req.body.date;

    //create a new product object and save it to the database
    const sale = new Sales(null, product_name, total_sales, date);
    sale.save();
    console.log(sale);
    //redirect to the home page
    res.redirect('/admin/admin-sales');
}

exports.editSalesPage = (req, res, next) => {
    const saleId = req.params.salesId;
    const sale = Sales.findById(saleId);
    res.render('edit-sales', { sale: sale[0], pageTitle: 'Edit Sales', path: req.path });
}

exports.editSalesPost = (req, res, next) => {
    const updatedSales = new Sales(
        req.body.id,
        req.body.product_name,
        req.body.total_sales,
        req.body.date);
    updatedSales.update();
    //res.redirect('/');
    res.redirect('/admin-sales');
}

exports.deleteSales = (req, res, next) => {
    Product.deleteById(req.body.id);
    res.redirect('/admin/admin-sales');
}




