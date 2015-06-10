var userDao = require('../dao/user');
var Constants = require('../utils/constants');
var _ = require('underscore');

module.exports = {
    addUser: function (params, callback) {
        userDao.createUser(params, callback);
    },
    queryUser: function (params, callback) {
        userDao.findUser(params, callback);
    },
    queryUserList: function () {
        return new Promise(function (resolve, reject) {
            userDao.findUserList(function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    queryUserById: function (params) {
        return new Promise(function (resolve, reject) {
            userDao.findUserById(params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });

    },
    updateUser: function (condition, params) {
        return new Promise(function (resolve, reject) {
            _.extend(params, {updateTime: new Date()});
            userDao.updateUserById(condition, params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    checkUpdateUser: function (params) {
        var errors = [];


        if (!params.realname || params.realname.length === 0) {
            errors.push('请输入中文姓名');
        } else if (params.realname.length > 10) {
            errors.push('真实姓名长度过长');
        } else if (!Constants.regexp.REALNAME.test(params.realname)) {
            errors.push('姓名格式错误');
        }

        if (params.mobile.length > 0 && !Constants.regexp.MOBILE.test(params.mobile)) {
            errors.push('手机号码格式错误');
        }

        return errors;
    },
    checkRegisterUser: function (params) {
        var errors = [];
        var self = this;
        return new Promise(function (resolve, reject) {

            self.queryUser({email: params.email}, function (err, user) {
                if (err) reject(err);
                if (user) {
                    errors.push('邮箱已存在');
                    resolve(errors);
                } else {
                    if (!params.email || params.email.length === 0) {
                        errors.push('请输入邮箱');
                    } else if (!Constants.regexp.EMAIL.test(params.email)) {
                        errors.push('邮箱格式错误');
                    }

                    if (!params.password || params.password.length === 0) {
                        errors.push('请输入密码');
                    } else if (!Constants.regexp.PASSWORD.test(params.password)) {
                        errors.push('密码格式错误');
                    } else if (params.password !== params.confirmPassword) {
                        errors.push('两次密码输入不一致');
                    }

                    if (!params.realname || params.realname.length === 0) {
                        errors.push('请输入中文姓名');
                    } else if (params.realname.length > 10) {
                        errors.push('真实姓名长度过长');
                    } else if (!Constants.regexp.REALNAME.test(params.realname)) {
                        errors.push('姓名格式错误');
                    }

                    resolve(errors);
                }
            });

        });
    }
};