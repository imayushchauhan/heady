const CategoryBLManager = require('./bl-manager');

class CategoryController {
    async addCategory(req) {
        const categoryBLManager = new CategoryBLManager();
        return await categoryBLManager.addCategory(req.body);
    }

    async getCategoryList() {
        const categoryBLManager = new CategoryBLManager();
        return await categoryBLManager.getCategoryList();
    }

    async updateCategory(req) {
        const categoryBLManager = new CategoryBLManager();
        return await categoryBLManager.updateCategory(req.params.id, req.body);
    }
}

module.exports = CategoryController;