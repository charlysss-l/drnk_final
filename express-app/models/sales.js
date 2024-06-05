// Import the sales array
const sales = [];

// Create a Sales class with a constructor that takes in id, product_name, total_sales, and date
class Sales {
    constructor(id, product_name, total_sales, date) {
        this.id = id;
        this.product_name = product_name;
        this.total_sales = total_sales;
        this.date = date;
    }

    // Create a save method that pushes a new sales entry to the sales array
    save() {
        this.id = Math.floor(Math.random() * 100000);
        sales.push(this);
    }

    // Create a static findAll method that returns all sales entries
    static findAll() {
        return sales;
    }

    // Create a static findById method that returns a sales entry by its id
    static findById(salesId) {
        return sales.filter(s => s.id == salesId);
    }

    // Create an update method that updates a sales entry in the sales array
    update() {
        const editSalesIndex = sales.findIndex(s => s.id == this.id);
        if (editSalesIndex !== -1) {
            sales[editSalesIndex] = this;
        }
    }

    // Create a static deleteById method that removes a sales entry by its id
    static deleteById(salesId) {
        const deleteSalesIndex = sales.findIndex(s => s.id == salesId);
        if (deleteSalesIndex !== -1) {
            sales.splice(deleteSalesIndex, 1);
        }
    }
}

// Export the Sales class
module.exports = Sales;
