/**
 * Created by yuyangyang on 2015/5/19.
 */
var orderModel = require('../model/order');

module.exports = {
    createOrder: function (params, callback) {
        new orderModel(params).save(callback);
    },
    findOrder: function (params, callback) {
        orderModel.findOne(params, callback);
    },
    findOrderList: function (params, callback) {
        orderModel.find(params)
            .populate('creater')
            .populate('food')
            .populate('store')
            .exec(callback);
    },
    findOrderById: function (params, callback) {
        orderModel.findById(params, callback);
    },
    updateOrder: function (condition, params, callback) {
        orderModel.update(condition, params, {safe: false, multi: true}, callback);
    },
    deleteOrder: function (condition, callback) {
        orderModel.remove(condition, callback);
    }
};