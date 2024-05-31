// Import the products array
const products = [];
// Create a Product class with a constructor that takes in product, price, volume, brand, quantity, and imageURL
class Product {
    constructor(id, product, price, volume, brand, sku, imageURL) {
            this.id = id;
            this.product = product;
            this.price = new Number(price);
            this.volume = volume;
            this.brand = brand;
            this.sku = sku;
            this.imageURL = imageURL;
        }
        // Create a save method that pushes a new product to the products array
    save() {
            this.id = Math.floor(Math.random() * 100000);
            products.push(this);
        }
        // Create a static findAll method that returns all products
    static findAll() {
        return products;
    }
    static findById(prodId) {
        return products.filter(p => p.id == prodId);
    }
    update() {
        const editProductIndex = products.findIndex(p => p.id == this.id);
        products[editProductIndex] = this;
    }
    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }
}
// Export the Product class
module.exports = Product;