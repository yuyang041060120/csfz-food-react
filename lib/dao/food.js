/**
 * Created by yuyangyang on 2015/5/19.
 */
var foodModel = require('../model/food');

module.exports = {
    createFood: function (params) {
        var self = this;
        return foodModel.create(params).then(function (food) {
            return self.findFoodById(food._id);
        });
    },
    findFoodByStore: function (params) {
        return foodModel.find(params)
            .populate('store')
            .populate('creater')
            .populate('updater')
            .sort({'addTime': 'desc'})
            .exec();
    },
    findFood: function (params) {
        return foodModel.findOne(params)
            .populate('store')
            .populate('creater')
            .populate('updater')
            .exec();
    },
    findFoodById: function (params) {
        return foodModel.findById(params)
            .populate('store')
            .populate('creater')
            .populate('updater')
            .exec();
    },
    updateFood: function (condition, params) {
        return foodModel.findByIdAndUpdate(condition, params)
            .populate('store')
            .populate('creater')
            .populate('updater')
            .exec();
    },
    deleteFood: function (condition) {
        return foodModel.remove(condition).exec();
    }
};