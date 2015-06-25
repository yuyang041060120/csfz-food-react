var userService = require('../service/user');
var orderService = require('../service/order');
var _ = require('underscore');
var constants = require('../utils/constants');

module.exports = {
    mapping: '/vo',
    get: {
        /**
         * 当前订单
         */
        '/order/current': function (req, res) {
            orderService.queryOrderList({creater: req.session.user._id, active: true})
                .then(function (orders) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: orders
                    });
                });

        },
        /**
         * 基本信息
         */
        '/message': function (req, res) {
            userService.queryUserById(req.session.user._id)
                .then(function (user) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: user
                    });
                });

        },
        /**
         * 历史订单
         */
        '/order/history': function (req, res) {
            orderService.queryOrderList({creater: req.session.user._id, active: false})
                .then(function (orders) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: orders
                    });
                });
        },
        /**
         * 注销
         */
        '/signout': function (req, res) {
            req.session.destory(function () {
                res.json({
                    code: constants.resCode.COMMON
                });
            });

        }
    },
    post: {
        /**
         * 注册
         */
        '/signup': function (req, res) {
            userService.checkCreateUser(req.body)
                .then(function (errors) {
                    if (errors.length > 0) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: errors
                        });
                    } else {
                        userService.addUser(req.body)
                            .then(function (user) {
                                req.session.user = user;
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
        /**
         * 登录
         */
        '/signin': function (req, res) {
            userService.queryUser(req.body)
                .then(function (user) {
                    var data = {};

                    if (user) {
                        req.session.user = user;
                        data = {
                            code: constants.resCode.COMMON,
                            data: user
                        };
                    } else {
                        data = {
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: ['邮箱或密码错误']
                        };
                    }

                    res.json(data);
                });
        },
        /**
         * 更新基本信息
         */
        '/message': function (req, res) {
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
        /**
         * 订餐
         */
        '/order': function (req, res) {
            orderService.addOrder(_.extend(req.body, {creater: req.session.user._id}))
                .then(function (order) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: order
                    });
                })
                .end(function (err) {
                    throw err;
                });
        },
        /**
         * 订餐
         */
        '/order/delete': function (req, res) {
            orderService.deleteOrder({_id: req.body.id})
                .then(function (flag) {
                    if(flag){
                        res.json({
                            code: constants.resCode.COMMON
                        });
                    }
                })
                .end(function (err) {
                    throw err;
                });
        }
    }
};