const ProductController = require('../../app/modules/product');

class ProductRoutes {
    attachRoutes(router) {
        router.post("/product", this.addProduct);
        router.get("/category/:id/product/list", this.getProductList);
        router.put("/product/:id", this.updateProduct);
    }

    async addProduct(req, res) {
        const productController = new ProductController();
        res.send(await productController.addProduct(req));
    }

    async getProductList(req, res) {
        const productController = new ProductController();
        res.send(await productController.getProductList(req));
    }

    async updateProduct(req, res) {
        const productController = new ProductController();
        res.send(await productController.updateProduct(req));
    }
}

module.exports = ProductRoutes;