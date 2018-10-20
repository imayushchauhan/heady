const ProductBLManager = require('./bl-manager');

class ProductController {
    async addProduct(req) {
        const productBLManager = new ProductBLManager();
        return await productBLManager.addProduct(req.body);
    }

    async getProductList(req) {
        const productBLManager = new ProductBLManager();
        return await productBLManager.getProductList(req.params.id);
    }

    async updateProduct(req) {
        const productBLManager = new ProductBLManager();
        return await productBLManager.updateProduct(req.params.id, req.body);
    }
}

module.exports = ProductController;