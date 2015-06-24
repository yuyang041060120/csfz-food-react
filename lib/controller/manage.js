/**
 * Created by yuyangyang on 2015/4/16.
 */
var _ = require('underscore');
var constants = require('../utils/constants');
var foodService = require('../service/food');
var storeService = require('../service/store');
var userService = require('../service/user');

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
        },
        /**
         * 套餐列表
         */
        '/:storeId/food/list': function (req, res) {
            var storeId = req.params.storeId;
            foodService.queryFoodByStore({store: storeId})
                .then(function (foods) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: foods
                    });
                })
                .end(function (err) {
                    throw err;
                });
        },
        /**
         * 用户列表
         */
        '/user/list': function (req, res) {
            userService.queryUserList()
                .then(function (users) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: users
                    });
                })
                .end(function (err) {
                    throw err;
                });

        }
    },
    post: {
        /**
         * 新增店铺
         */
        '/store/new': function (req, res) {
            storeService.checkCreateStore(req.body)
                .then(function (errors) {
                    if (Object.keys(errors).length > 0) {
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
                    if (Object.keys(errors).length > 0) {
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
        },
        /**
         * 新增套餐
         */
        '/:storeId/food/new': function (req, res) {
            var storeId = req.params.storeId;

            foodService.checkCreateFood(_.extend({storeId: storeId}, req.body))
                .then(function (errors) {
                    if (Object.keys(errors).length > 0) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: errors
                        });
                    } else {
                        foodService.addFood(_.extend(req.body, {
                            creater: req.session.user._id,
                            updater: req.session.user._id,
                            store: storeId
                        })).then(function (food) {
                            res.json({
                                code: constants.resCode.COMMON,
                                data: food
                            });
                        });
                    }
                })
                .end(function (err) {
                    throw err;
                });
        },
        /**
         * 更新套餐
         */
        '/:storeId/food/update': function (req, res) {
            var storeId = req.params.storeId;
            var foodId = req.body.id;

            foodService.checkUpdateFood(_.extend({storeId: storeId}, req.body))
                .then(function (errors) {
                    if (Object.keys(errors).length > 0) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: errors
                        });
                    } else {
                        delete req.body.id;

                        foodService.updateFood(foodId, _.extend(req.body, {
                            updater: req.session.user._id
                        })).then(function (food) {
                            res.json({
                                code: constants.resCode.COMMON,
                                data: food
                            });
                        });

                    }
                })
                .end(function (err) {
                    throw err;
                });
        },
        /**
         * 删除套餐
         */
        '/:storeId/food/delete': function (req, res) {
            var storeId = req.params.storeId;
            foodService.deleteFood({_id: req.body.id, store: storeId})
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
        },
        '/user/new': function (req, res) {
            var data = _.extend({
                creater: req.session.user._id,
                updater: req.session.user._id,
                password: constants.defaultPassword
            }, req.body);

            userService.checkCreateUser(data)
                .then(function (errors) {
                    if (Object.keys(errors).length > 0) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: errors
                        });
                    } else {
                        userService.addUser(data)
                            .then(function (user) {
                                res.json({
                                    code: constants.resCode.COMMON,
                                    data: user
                                });
                            });
                    }
                })
                .end(function (err) {
                    throw err;
                });
        },
        '/user/update': function (req, res) {
            var userId = req.body.id;

            var data = _.extend({
                updater: req.session.user._id
            }, req.body);

            userService.checkUpdateUser(data)
                .then(function (errors) {
                    if (Object.keys(errors).length > 0) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: errors
                        });
                    } else {
                        delete data.id;

                        userService.updateUser(userId, data)
                            .then(function (user) {
                                res.json({
                                    code: constants.resCode.COMMON,
                                    data: user
                                });
                            });
                    }
                })
                .end(function (err) {
                    throw err;
                });
        },
        '/user/delete': function (req, res) {
            userService.deleteUser({_id: req.body.id})
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
        },
        '/user/manage': function (req, res) {
            userService.updateUser({_id: req.body.id}, {manage: req.body.manage, updater: req.session.user._id})
                .then(function (user) {
                    if (user) {
                        res.json({
                            code: constants.resCode.COMMON
                        });
                    } else {
                        res.json({
                            code: constants.resCode.EXCEPTION,
                            errors: ['设置失败']
                        });
                    }
                });
        }
    }
};
