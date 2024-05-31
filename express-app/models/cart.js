let cart = null;

module.exports = class Cart {

    static save(product) {

        if (cart === null) {
            cart = { products: [], totalPrice: 0 };
        }

        const existingProductIndex = cart.products.findIndex(p => p.id == product.id); // to check product is existing in cart
        if (existingProductIndex >= 0) { // exist in cart already
            const existingProduct = cart.products[existingProductIndex];
            existingProduct.qty += 1;
        } else { //not exist
            product.qty = 1;
            cart.products.push(product);
        }

        cart.totalPrice += product.price;
    }

    static getCart() {
        return cart;
    }

    static delete(productId) {
        const isExisting = cart.products.findIndex(p => p.id == productId);
        //console to show in terminal how many products are in the cart
        //console.log('isExisting:', isExisting);
        if (isExisting >= 0) {
            const deletedProduct = cart.products[isExisting];
            cart.totalPrice -= deletedProduct.price * deletedProduct.qty;
            cart.products.splice(isExisting, 1);
        }
        //console to show in terminal the products in cart
        //console.log(cart);
    }
}