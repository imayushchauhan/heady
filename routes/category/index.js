const CategoryController = require('../../app/modules/category');

class CategoryRoutes {
    attachRoutes(router) {
        router.post("/category", this.addCategory);
        router.get("/category/list", this.getCategoryList);
    }

    async addCategory(req, res) {
        const categoryController = new CategoryController();
        res.send(await categoryController.addCategory(req));
    }

    async getCategoryList(req, res) {
        const categoryController = new CategoryController();
        res.send(await categoryController.getCategoryList());
    }
}

module.exports = CategoryRoutes;