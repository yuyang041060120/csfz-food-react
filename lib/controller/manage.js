/**
 * Created by yuyangyang on 2015/4/16.
 */
var _ = require('underscore');
var constants = require('../utils/constants');
var foodService = require('../service/food');
var storeService = require('../service/store');

module.exports = {
    mapping: '/vo/manage',
    get: {
        /**
         * 店铺列表
         */
        '/store/list': function (req, res) {
            storeService.queryStoreList()
                .then(function (stores) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: stores
                    });
                });
        }
        ///**
        // * 新增店铺
        // */
        //'/store/new': function (req, res) {
        //    res.render('manage/store_new');
        //},
        ///**
        // * 修改店铺
        // */
        //'/store/edit/:storeId': function (req, res) {
        //    storeService.queryStoreById(req.params.storeId)
        //        .then(function (store) {
        //            res.render('manage/store_edit', {
        //                store: store
        //            });
        //        });
        //},
        ///**
        // * 套餐列表
        // */
        //'/food/:storeId/list': function (req, res) {
        //    var storeId = req.params.storeId;
        //    storeService.queryStoreById(storeId)
        //        .then(function (store) {
        //            res.put({store: store});
        //            return foodService.queryFoodByStore({store: storeId});
        //        })
        //        .then(function (foods) {
        //            res.put({foods: foods});
        //            res.render('manage/food');
        //        })
        //        .catch(function (err) {
        //            console.log(err);
        //        });
        //},
        ///**
        // * 新增套餐
        // */
        //'/food/:storeId/new': function (req, res) {
        //    var storeId = req.params.storeId;
        //    storeService.queryStoreById(storeId)
        //        .then(function (store) {
        //            res.render('manage/food_new', {store: store});
        //        });
        //},
        ///**
        // * 修改套餐
        // */
        //'/food/:storeId/edit/:foodId': function (req, res) {
        //    foodService.queryFoodById(req.params.foodId)
        //        .then(function (food) {
        //            res.put({food: food});
        //            return storeService.queryStoreById(req.params.storeId)
        //        })
        //        .then(function (store) {
        //            res.put({store: store});
        //            res.render('manage/food_edit');
        //        });
        //}
    },
    post: {
        /**
         * 新增店铺
         */
        '/store/new': function (req, res) {
            storeService.checkStore(req.body)
                .then(function (errors) {
                    if (errors.length > 0) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: errors
                        });
                    } else {
                        var userId = req.session.user._id;
                        storeService.addStore(_.extend(req.body, {
                            creater: userId,
                            updater: userId
                        })).then(function (store) {
                            res.json({
                                code: constants.resCode.COMMON,
                                data: store
                            });
                        });

                    }
                })
                .end(function (err) {
                    throw err;
                });
        },
        /**
         * 更新店铺
         */
        '/store/update': function (req, res) {
            var id = req.body.id;

            storeService.checkUpdateStore(req.body)
                .then(function (errors) {
                    if (errors.length > 0) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: errors
                        });
                    } else {
                        delete req.body.id;

                        storeService.updateStore(id, _.extend(req.body, {updater: req.session.user._id}))
                            .then(function (store) {
                                res.json({
                                    code: constants.resCode.COMMON,
                                    data: store
                                });
                            });

                    }
                })
                .end(function (err) {
                    throw err;
                });
        },
        /**
         * 删除店铺
         */
        '/store/delete': function (req, res) {
            storeService.deleteStore({_id: req.body.id})
                .then(function (flag) {
                    if (flag) {
                        res.json({
                            code: constants.resCode.COMMON
                        });
                    } else {
                        res.json({
                            code: constants.resCode.EXCEPTION,
                            errors: ['删除失败']
                        });
                    }
                });
        }
        //    /**
        //     * 新增套餐
        //     */
        //    '/food/:storeId/new': function (req, res) {
        //        var storeId = req.params.storeId;
        //
        //        foodService.checkFood(_.extend({storeId:storeId},req.body))
        //            .then(function (errors) {
        //                if (errors.length > 0) {
        //                    storeService.queryStoreById(storeId)
        //                        .then(function (store) {
        //                            res.render('manage/food_new', {
        //                                errors: errors,
        //                                food: req.body,
        //                                store: store
        //                            });
        //                        });
        //
        //                } else {
        //                    foodService.addFood(_.extend(req.body, {
        //                        creater: req.session.user._id,
        //                        updater: req.session.user._id,
        //                        store: storeId
        //                    }))
        //                        .then(function (food) {
        //                            res.redirect('/vo/manage/food/' + req.params.storeId + '/list');
        //                        });
        //
        //                }
        //            })
        //            .catch(function (err) {
        //                console.log(err);
        //            });
        //    },
        //    /**
        //     * 更新套餐
        //     */
        //    '/food/:storeId/update': function (req, res) {
        //        var storeId = req.params.storeId;
        //        var foodId = req.body.id;
        //        foodService.checkUpdateFood(_.extend({storeId:storeId},req.body))
        //            .then(function (errors) {
        //                if (errors.length > 0) {
        //                    storeService.queryStoreById(storeId)
        //                        .then(function (store) {
        //                            res.render('manage/food_edit', {
        //                                errors: errors,
        //                                food: _.extend({_id: foodId}, req.body),
        //                                store: store
        //                            });
        //                        });
        //
        //                } else {
        //                    delete req.body.id;
        //                    foodService.updateFood(foodId, _.extend(req.body, {
        //                        updater: req.session.user._id
        //                    }))
        //                        .then(function (food) {
        //                            res.redirect('/vo/manage/food/' + req.params.storeId + '/list');
        //                        });
        //
        //                }
        //            })
        //            .catch(function (err) {
        //                console.log(err);
        //            });
        //    },
        //    /**
        //     * 删除套餐
        //     */
        //    '/food/delete': function (req, res) {
        //        foodService.deleteFood({_id: req.body.foodId})
        //            .then(function (flag) {
        //                if (flag) {
        //                    res.json({
        //                        code: constants.resCode.COMMON
        //                    });
        //                } else {
        //                    res.json({
        //                        code: constants.resCode.EXCEPTION,
        //                        errors: '删除失败'
        //                    });
        //                }
        //            });
        //    }
    }
};
