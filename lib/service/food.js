/**
 * Created by yuyangyang on 2015/5/19.
 */
var foodDao = require('../dao/food');
var Constants = require('../utils/constants');
var _ = require('underscore');

module.exports = {
    addFood: function (params) {
        return foodDao.createFood(params);
    },
    queryFoodByStore: function (params) {
        return foodDao.findFoodByStore(params);
    },
    queryFood: function (params) {
        return foodDao.findFood(params);
    },
    queryFoodById: function (params) {
        return new Promise(function (resolve, reject) {
            foodDao.findFoodById(params, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    updateFood: function (condition, params) {
        _.extend(params, {updateTime: new Date()});
        return foodDao.updateFood(condition, params);
    },
    deleteFood: function (condition) {
        return foodDao.deleteFood(condition);
    },
    checkFood: function (params) {
        var errors = [];

        return this.queryFood({name: params.name, store: params.storeId}).then(function (food) {
            if (food) {
                errors.push('套餐名称已存在');
            } else {

                if (!params.name || params.name.length === 0) {
                    errors.push('请输入套餐名称');
                } else if (params.name.length > 20) {
                    errors.push('套餐名称过长');
                }

                if (!params.price || params.price.length === 0) {
                    errors.push('请输入套餐价格');
                } else if (!Constants.regexp.PRICE.test(params.price)) {
                    errors.push('套餐价格格式错误');
                }
            }

            return errors;
        })

    },
    checkUpdateFood: function (params) {
        return this.queryFood({name: params.name, _id: {$ne: params.id}, store: params.storeId}).then(function (food) {
            var errors = [];

            if (food) {
                errors.push('套餐名称已存在');
            } else {

                if (!params.name || params.name.length === 0) {
                    errors.push('请输入套餐名称');
                } else if (params.name.length > 20) {
                    errors.push('套餐名称过长');
                }

                if (!params.price || params.price.length === 0) {
                    errors.push('请输入套餐价格');
                } else if (!Constants.regexp.PRICE.test(params.price)) {
                    errors.push('套餐价格格式错误');
                }
            }

            return errors;
        });

    }
};