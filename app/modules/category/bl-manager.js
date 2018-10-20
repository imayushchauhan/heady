const Mongoose = require('mongoose');
require('./category');
const Category = Mongoose.model('Category');
const Utility = require('../../libs/utils');
const Constants = require('../../libs/constants');

class CategoryBLManager {
    async addCategory(requestData) {
        const categoryObj = new Category(requestData);
        categoryObj.addedOn = new Date();
        categoryObj.modifiedOn = new Date();

        try {
            await categoryObj.saveCategory();
        } catch (err) {
            return Utility.getResponseObject(null, Constants.MSG.UNABLE_TO_SAVE_CATEGORY, Constants.CODE.ERROR_RESPONSE_CODE);
        }

        return Utility.getResponseObject(null, Constants.MSG.CATEGORY_SAVED_SUCCESSFULLY, Constants.CODE.SUCCESS_RESPONSE_CODE);
    }

    async getCategoryList() {
        const queryObj = {
            isActive: 1,
            isDeleted: 0
        };

        let getCategoryListResponse = [];
        try {
            getCategoryListResponse = await Category.getCategory(queryObj, "", 0, 0);
        } catch (err) {
            return Utility.getResponseObject(null, Constants.MSG.UNABLE_TO_GET_CATEGORY_LIST, Constants.CODE.ERROR_RESPONSE_CODE);
        }

        return Utility.getResponseObject(getCategoryListResponse, Constants.MSG.CATEGORY_LIST_FETCHED_SUCCESSFULLY, Constants.CODE.SUCCESS_RESPONSE_CODE);
    }
}

module.exports = CategoryBLManager;