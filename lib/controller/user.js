/**
 * Created by yuyangyang on 2015/4/16.
 */
var _ = require('underscore');

var constants = require('../utils/constants');
var userService = require('../service/user');

module.exports = {
    mapping: '/user',
    get: {
        /**
         * 用户列表
         */
        '/list': function (req, res) {
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
        '/delete': function (req, res) {
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
        }
        //'/set': function (req, res) {
        //    userService.updateUser({_id: req.body.userId,},{manage:true})
        //        .then(function (flag) {
        //            if (flag) {
        //                res.json({
        //                    code: constants.resCode.COMMON
        //                });
        //            } else {
        //                res.json({
        //                    code: constants.resCode.EXCEPTION,
        //                    errors: '添加失败，请稍后再试'
        //                });
        //            }
        //        });
        //},
        //'/cancel': function (req, res) {
        //    userService.updateUser({_id: req.body.userId},{manage:false})
        //        .then(function (flag) {
        //            if (flag) {
        //                res.json({
        //                    code: constants.resCode.COMMON
        //                });
        //            } else {
        //                res.json({
        //                    code: constants.resCode.EXCEPTION,
        //                    errors: '取消失败，请稍后再试'
        //                });
        //            }
        //        });
        //}
    }
};