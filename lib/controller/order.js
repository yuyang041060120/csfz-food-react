var _ = require('underscore');

var orderService = require('../service/order');
var foodService = require('../service/food');

module.exports = {
    mapping: '/order',
    get: {
        '/:storeId': function (req, res) {
            storeService.queryStoreById(req.params.storeId)
                .then(function (store) {
                    res.put({store: store});

                    return foodService.queryFoodByStore({store: req.params.storeId});
                })
                .then(function (foods) {
                    res.put({foods: foods});
                    res.render('store/detail');
                });


        }
    },
    post: {
        /**
         * 新增套餐
         */
        '/new': function (req, res) {
            orderService.addOrder(_.extend(req.body, {creater: req.session.user._id}))
                .then(function (order) {
                    res.json(order);
                })
                .catch(function (err) {
                    throw err;
                });
        },
        '/delete': function (req, res) {
            orderService.deleteOrder(req.body)
                .then(function (flag) {
                    res.json(flag);
                })
                .catch(function (err) {
                    throw err;
                });
        }
    }
};