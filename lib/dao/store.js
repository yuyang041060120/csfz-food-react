var storeModel = require('../model/store');

module.exports = {
    createStore: function (params, callback) {
        new storeModel(params).save(function (err, store) {
            storeModel.findById(store.id)
                .populate('creater')
                .exec(callback);
        });
    },
    findStoreList: function () {
        return storeModel.find()
            .populate('creater')
            .populate('updater')
            .sort({'addTime': 'desc'})
            .exec();
    },
    findStore: function (params, callback) {
        storeModel.findOne(params, callback);
    },
    findStoreById: function (params) {
        return storeModel
            .findById(params)
            .exec();
    },
    updateStore: function (condition, params, callback) {
        storeModel.findByIdAndUpdate(condition, params)
            .populate('creater')
            .exec(callback);
    },
    deleteStore: function (condition, callback) {
        storeModel.remove(condition, callback);
    }
};