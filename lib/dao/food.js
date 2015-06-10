/**
 * Created by yuyangyang on 2015/5/19.
 */
var foodModel = require('../model/food');

module.exports = {
    createFood: function (params, callback) {
        new foodModel(params).save(callback);
    },
    findFoodByStore: function (params) {
        return foodModel.find(params)
            .populate('creater')
            .populate('updater')
            .sort({'addTime': 'desc'})
            .exec();
    },
    findFood: function (params, callback) {
        foodModel.findOne(params, callback);
    },
    findFoodById: function (params, callback) {
        foodModel.findById(params, callback);
    },
    updateFood: function (condition, params, callback) {
        foodModel.findByIdAndUpdate(condition, params)
            .exec(callback);
    },
    deleteFood: function (condition, callback) {
        foodModel.remove(condition, callback);
    }
};