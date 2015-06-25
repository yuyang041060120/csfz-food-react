var orderDao = require('../dao/order');
var _ = require('underscore');

module.exports = {
    addOrder: function (params) {
        return orderDao.createOrder(params);
    },
    queryOrder: function (params) {
        return new Promise(function (resolve, reject) {
            orderDao.findOrder(params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });

    },
    queryOrderList: function (params) {
        return orderDao.findOrderList(params);
    },
    queryOrderById: function (params) {
        return new Promise(function (resolve, reject) {
            orderDao.findOrderById(params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    updateOrder: function (condition, params) {
        return orderDao.updateOrder(condition, params);
    },
    deleteOrder: function (condition) {
        return orderDao.deleteOrder(condition);
    },
    queryCurrentOrderList: function () {
        return orderDao.findOrderList({active: true}).then(function (orders) {

            var stores = {};
            var orderCache = {};
            var summary = {};
            _.each(orders, function (order) {
                var store = orderCache[order.store.id]
                if (!store) {
                    store = orderCache[order.store.id] = {};
                }
                var orderItem = store[order.food.id];

                if (!orderItem) {
                    orderItem = store[order.food.id] = {list: [], order: order, total: 0, count: 0};
                }

                orderItem.list.push(order);
                var count = parseInt(order.count, 10);
                orderItem.count += count;
                orderItem.total += parseFloat(order.food.price, 10) * count;
            });

            _.each(orderCache, function (item, key) {
                if (!summary[key]) {
                    summary[key] = {total: 0, count: 0};
                }
                _.each(item, function (order) {
                    summary[key].total += order.total;
                    summary[key].count += order.count;
                });
            });

            _.each(orders, function (order) {
                if (!stores[order.store.id]) {
                    stores[order.store.id] = {
                        store: order.store,
                        orders: orderCache[order.store.id],
                        summary: summary[order.store.id]
                    };
                }
            });

            return stores;

        });

    }
};
