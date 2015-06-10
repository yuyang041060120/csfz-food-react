var _ = require('underscore');

var storeService = require('../service/store');
var foodService = require('../service/food');

module.exports = {
    mapping: '/food',
    get: {
        /**
         * 新增套餐
         */
        '/:storeId/new': function (req, res) {
            storeService.queryStoreById(req.params.storeId)
                .then(function (store) {
                    res.render('food/new', {
                        store: store
                    });
                });
        }
    },
    post: {
        /**
         * 新增套餐
         */
        '/:storeId/new': function (req, res) {
            foodService.checkFood(req.body)
                .then(function (errors) {
                    if (errors.length > 0) {
                        storeService.queryStoreById(req.params.storeId)
                            .then(function (store) {
                                res.render('food/new', {
                                    errors: errors,
                                    food: req.body,
                                    store: store
                                });
                            });

                    } else {
                        foodService.addFood(_.extend(req.body, {
                            creater: req.session.user._id,
                            store: req.params.storeId
                        }))
                            .then(function (food) {
                                res.redirect('/store/' + req.params.storeId);
                            });

                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
};