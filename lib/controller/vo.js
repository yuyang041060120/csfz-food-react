var userService = require('../service/user');
var orderService = require('../service/order');

var constants = require('../utils/constants');

module.exports = {
    mapping: '/vo',
    get: {
        ///**
        // * 首页
        // */
        //'/': function (req, res) {
        //    orderService.queryOrderList({creater: req.session.user._id, active: true})
        //        .then(function (orders) {
        //            res.render('vo/index', {
        //                orders: orders
        //            });
        //        });
        //
        //},
        ///**
        // * 基本信息
        // */
        //'/message': function (req, res) {
        //    userService.queryUserById(req.session.user._id)
        //        .then(function (user) {
        //            res.render('vo/message', {
        //                user: user
        //            });
        //        });
        //
        //},
        ///**
        // * 历史订单
        // */
        //'/order/history': function (req, res) {
        //    orderService.queryOrderList({creater: req.session.user._id, active: false})
        //        .then(function (orders) {
        //            res.render('vo/order_history', {
        //                orders: orders
        //            });
        //        });
        //
        //},
        ///**
        // * 注册页面
        // */
        //'/register': function (req, res) {
        //    res.render('vo/register');
        //},
        ///**
        // * 登录页面
        // */
        //'/login': function (req, res) {
        //    res.render('vo/login');
        //},
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
            userService.checkRegisterUser(req.body)
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
        }
        ///**
        // * 基本信息
        // */
        //'/message': function (req, res) {
        //    var errors = userService.checkUpdateUser(req.body);
        //    if (errors.length > 0) {
        //        res.render('vo/message', {
        //            errors: errors,
        //            user: req.body
        //        });
        //    } else {
        //        userService.updateUser({_id: req.session.user._id}, req.body)
        //            .then(function (flag) {
        //                res.redirect('/vo/message');
        //            })
        //            .catch(function (err) {
        //                throw err;
        //            })
        //    }
        //
        //}
    }
};