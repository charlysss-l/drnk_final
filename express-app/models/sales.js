const sales = [];

class Sales {
    constructor(id, product_name, total_sales, date) {
        this.id = id;
        this.product_name = product_name;
        this.total_sales = total_sales;
        this.date = date;
    }

    save() {
        this.id = Math.floor(Math.random() * 100000);
        sales.push(this);
    }

    static findAll() {
        return sales;
    }

    static findById(salesId) {
        return sales.filter(s => s.id == salesId);
    }

    update() {
        const editSalesIndex = sales.findIndex(s => s.id == this.id);
        if (editSalesIndex !== -1) {
            sales[editSalesIndex] = this;
        }
    }

    static deleteById(salesId) {
        const deleteSalesIndex = sales.findIndex(s => s.id == salesId);
        if (deleteSalesIndex !== -1) {
            sales.splice(deleteSalesIndex, 1);
        }
    }
}

module.exports = Sales;

