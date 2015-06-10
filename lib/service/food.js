/**
 * Created by yuyangyang on 2015/5/19.
 */
var foodDao = require('../dao/food');
var Constants = require('../utils/constants');
var _ = require('underscore');

module.exports = {
    addFood: function (params, callback) {

        return new Promise(function (resolve, reject) {
            new foodDao.createFood(params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });

    },
    queryFoodByStore: function (params) {
        return foodDao.findFoodByStore(params);
    },
    queryFood: function (params, callback) {
        foodDao.findFood(params, callback);
    },
    queryFoodById: function (params) {
        return new Promise(function (resolve, reject) {
            foodDao.findFoodById(params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    updateFood: function (condition, params) {
        return new Promise(function (resolve, reject) {
            _.extend(params, {updateTime: new Date()});
            foodDao.updateFood(condition, params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    deleteFood: function (condition) {
        return new Promise(function (resolve, reject) {
            foodDao.deleteFood(condition, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    checkFood: function (params) {
        var errors = [];
        var self = this;
        return new Promise(function (resolve, reject) {

            self.queryFood({name: params.name, store: params.storeId}, function (err, store) {
                if (err) reject(err);
                if (store) {
                    errors.push('套餐名称已存在');
                    resolve(errors);
                } else {

                    if (!params.name || params.name.length === 0) {
                        errors.push('请输入套餐名称');
                    } else if (params.name.length > 50) {
                        errors.push('套餐名称过长');
                    }

                    if (!params.price || params.price.length === 0) {
                        errors.push('请输入套餐价格');
                    } else if (!Constants.regexp.PRICE.test(params.price)) {
                        errors.push('套餐价格格式错误');
                    }

                    resolve(errors);
                }
            });

        });
    },
    checkUpdateFood: function (params) {
        var errors = [];
        var self = this;
        return new Promise(function (resolve, reject) {

            self.queryFood({name: params.name, _id: {$ne: params.id}, store: params.storeId}, function (err, store) {
                if (err) reject(err);
                if (store) {
                    errors.push('套餐名称已存在');
                    resolve(errors);
                } else {

                    if (!params.name || params.name.length === 0) {
                        errors.push('请输入套餐名称');
                    } else if (params.name.length > 50) {
                        errors.push('套餐名称过长');
                    }

                    if (!params.price || params.price.length === 0) {
                        errors.push('请输入套餐价格');
                    } else if (!Constants.regexp.PRICE.test(params.price)) {
                        errors.push('套餐价格格式错误');
                    }

                    resolve(errors);
                }
            });

        });
    }
};