var _ = require('underscore');

var storeService = require('../service/store');
var foodService = require('../service/food');

module.exports = {
    mapping: '/store',
    get: {
        /**
         * 店铺列表页面
         */
        '/list': function (req, res) {
            storeService.queryStoreList()
                .then(function (stores) {
                    res.json(stores);
                });
        },
        /**
         * 店铺页面详情
         */
        '/detail/:storeId': function (req, res) {
            var data = {};
            storeService.queryStoreById(req.params.storeId)
                .then(function (store) {
                    data.store = store;
                    return foodService.queryFoodByStore({store: req.params.storeId});
                })
                .then(function (foods) {
                    data.foods = foods;
                    res.json(data);
                });
        }
    }
};