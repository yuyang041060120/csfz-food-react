var storeModel = require('../model/store');

module.exports = {
    createStore: function (params) {
        var self = this;
        return storeModel.create(params)
            .then(function (store) {
                return self.findStoreById(store._id);
            });
    },
    findStoreList: function () {
        return storeModel.find()
            .populate('creater')
            .populate('updater')
            .sort({'addTime': 'desc'})
            .exec();
    },
    findStore: function (params) {
        return storeModel.findOne(params).exec();
    },
    findStoreById: function (params) {
        return storeModel
            .findById(params)
            .populate('creater')
            .populate('updater')
            .exec();
    },
    updateStore: function (condition, params) {
        return storeModel.findByIdAndUpdate(condition, params)
            .populate('creater')
            .exec();
    },
    deleteStore: function (condition) {
        return storeModel.remove(condition).exec();
    }
};