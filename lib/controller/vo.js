var userService = require('../service/user');
var orderService = require('../service/order');

module.exports = {
    mapping: '/vo',
    get: {
        /**
         * 首页
         */
        '/': function (req, res) {
            orderService.queryOrderList({creater: req.session.user._id, active: true})
                .then(function (orders) {
                    res.render('vo/index', {
                        orders: orders
                    });
                });

        },
        /**
         * 基本信息
         */
        '/message': function (req, res) {
            userService.queryUserById(req.session.user._id)
                .then(function (user) {
                    res.render('vo/message', {
                        user: user
                    });
                });

        },
        /**
         * 历史订单
         */
        '/order/history': function (req, res) {
            orderService.queryOrderList({creater: req.session.user._id, active: false})
                .then(function (orders) {
                    res.render('vo/order_history', {
                        orders: orders
                    });
                });

        },
        /**
         * 注册页面
         */
        '/register': function (req, res) {
            res.render('vo/register');
        },
        /**
         * 登录页面
         */
        '/login': function (req, res) {
            res.render('vo/login');
        },
        /**
         * 注销
         */
        '/logout': function (req, res) {
            delete req.session.user;
            res.redirect('/vo/login');
        }
    },
    post: {
        /**
         * 注册
         */
        '/register': function (req, res) {

            userService.checkRegisterUser(req.body)
                .then(function (errors) {
                    if (errors.length > 0) {
                        res.render('vo/register', {
                            errors: errors,
                            user: req.body
                        });
                    } else {
                        userService.addUser(req.body, function (err, user) {
                            if (err) throw err;
                            req.session.user = user;
                            res.redirect('/');
                        });

                    }
                })
                .catch(function (err) {
                    throw err;
                });
        },
        /**
         * 登录
         */
        '/login': function (req, res) {
            userService.queryUser({email: req.body.email, password: req.body.password}, function (err, user) {
                if (err) throw err;

                if (user) {
                    req.session.user = user;
                    res.redirect(req.body.from ? decodeURIComponent(req.body.from) : '/vo/');
                } else {
                    res.render('vo/login', {
                        error: '邮箱或密码错误',
                        user: req.body
                    });
                }
            });
        },
        /**
         * 基本信息
         */
        '/message': function (req, res) {
            var errors = userService.checkUpdateUser(req.body);
            if (errors.length > 0) {
                res.render('vo/message', {
                    errors: errors,
                    user: req.body
                });
            } else {
                userService.updateUser({_id: req.session.user._id}, req.body)
                    .then(function (flag) {
                        res.redirect('/vo/message');
                    })
                    .catch(function (err) {
                        throw err;
                    })
            }

        }
    }
};