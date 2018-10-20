const CategoryRoutes = require('./category');
const ProductRoutes = require('./product');

class AppRouter {
    constructor() {
        this.categoryRoutes = new CategoryRoutes();
        this.productRoutes = new ProductRoutes();
    }

    attachRoutes(router) {
        this.categoryRoutes.attachRoutes(router);
        this.productRoutes.attachRoutes(router);
    }
}

module.exports = AppRouter;