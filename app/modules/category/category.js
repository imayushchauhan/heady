const Mongoose = require('mongoose');

const CategorySchema = new Mongoose.Schema({
    name: {type: String, default: ''},
    categoryList: [{type: Mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    addedOn: {type: Number, default: 0},
    modifiedOn: {type: Number, default: 0},
    isActive: {type: Number, default: 1},
    isDeleted: {type: Number, default: 0},
});

CategorySchema.method({
    saveCategory: function () {
        return this.save();
    }
});

CategorySchema.static({
    getCategory: function (queryObj, selectionKey, offset, limit) {
        return this.find(queryObj, selectionKey).populate('categoryList').skip(parseInt(offset)).limit(parseInt(limit)).exec();
    }
});

/**
 * Register schema
 */
Mongoose.model('Category', CategorySchema);