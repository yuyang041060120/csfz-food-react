/**
 * Created by yuyangyang on 2015/5/19.
 */
var orderModel = require('../model/order');

module.exports = {
    createOrder: function (params) {
        return orderModel.create(params);
    },
    findOrder: function (params, callback) {
        orderModel.findOne(params, callback);
    },
    findOrderList: function (params) {
        return orderModel.find(params)
            .sort({'addTime': 'desc'})
            .populate('creater')
            .populate('food')
            .populate('store')
            .exec();
    },
    findOrderById: function (params, callback) {
        orderModel.findById(params, callback);
    },
    updateOrder: function (condition, params) {
        return orderModel.update(condition, params, {safe: false, multi: true})
            .exec();
    },
    deleteOrder: function (condition) {
        return orderModel.remove(condition)
            .exec();
    }
};