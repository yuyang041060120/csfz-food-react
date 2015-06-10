/**
 * Created by yuyangyang on 2015/4/16.
 */
var _ = require('underscore');

var constants = require('../utils/constants');
var userService = require('../service/user');

module.exports = {
    mapping: '/vo/manage',
    get: {
        /**
         * 首页
         */
        '/user/list': function (req, res) {
            userService.queryUserList()
                .then(function (users) {
                    res.render('user/index', {
                        users: users
                    });
                })
                .catch(function (err) {
                    throw err;
                });

        }
    },
    post: {
        '/set': function (req, res) {
            userService.updateUser({_id: req.body.userId,},{manage:true})
                .then(function (flag) {
                    if (flag) {
                        res.json({
                            code: constants.resCode.COMMON
                        });
                    } else {
                        res.json({
                            code: constants.resCode.EXCEPTION,
                            errors: '添加失败，请稍后再试'
                        });
                    }
                });
        },
        '/cancel': function (req, res) {
            userService.updateUser({_id: req.body.userId},{manage:false})
                .then(function (flag) {
                    if (flag) {
                        res.json({
                            code: constants.resCode.COMMON
                        });
                    } else {
                        res.json({
                            code: constants.resCode.EXCEPTION,
                            errors: '取消失败，请稍后再试'
                        });
                    }
                });
        }
    }
};