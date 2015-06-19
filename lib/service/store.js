var storeDao = require('../dao/store');
var Constants = require('../utils/constants');
var _ = require('underscore');

module.exports = {
    addStore: function (params) {
        return storeDao.createStore(params);
    },
    queryStoreList: function () {
        return storeDao.findStoreList();
    },
    queryStore: function (params) {
        return storeDao.findStore(params);
    },
    queryStoreById: function (params) {
        return storeDao.findStoreById(params);

    },
    updateStore: function (condition, params) {
        _.extend(params, {updateTime: new Date()});
        return storeDao.updateStore(condition, params);
    },
    deleteStore: function (condition) {
        return storeDao.deleteStore(condition);
    },
    checkStore: function (params) {
        var errors = [];
        var self = this;
        return self.queryStore({name: params.name})
            .then(function (store) {
                if (store) {
                    errors.push('店铺名称已存在');
                } else {

                    if (!params.name || params.name.length === 0) {
                        errors.push('请输入店铺名称');
                    } else if (params.name.length > 20) {
                        errors.push('店铺名称过长');
                    }

                    if (!params.mainProduct || params.mainProduct.length === 0) {
                        errors.push('请输入主营产品');
                    } else if (params.mainProduct.length > 20) {
                        errors.push('主营产品过长');
                    }

                    if (!params.telephone || params.telephone.length === 0) {
                        errors.push('请输入联系电话');
                    } else if (!Constants.regexp.TELEPHONE.test(params.telephone)) {
                        errors.push('联系电话格式错误');
                    }

                    if (!params.address || params.address.email === 0) {
                        errors.push('请输入店铺地址');
                    } else if (params.address.length > 20) {
                        errors.push('店铺地址过长');
                    }
                }

                return errors;
            });
    },
    checkUpdateStore: function (params) {
        var errors = [];
        var self = this;

        return self.queryStore({name: params.name, _id: {$ne: params.id}})
            .then(function (store) {
                if (store) {
                    errors.push('店铺名称已存在');
                } else {

                    if (!params.name || params.name.length === 0) {
                        errors.push('请输入店铺名称');
                    } else if (params.name.length > 20) {
                        errors.push('店铺名称过长');
                    }

                    if (!params.mainProduct || params.mainProduct.length === 0) {
                        errors.push('请输入主营产品');
                    } else if (params.mainProduct.length > 20) {
                        errors.push('主营产品过长');
                    }

                    if (!params.telephone || params.telephone.length === 0) {
                        errors.push('请输入联系电话');
                    } else if (!Constants.regexp.TELEPHONE.test(params.telephone)) {
                        errors.push('联系电话格式错误');
                    }

                    if (!params.address || params.address.email === 0) {
                        errors.push('请输入店铺地址');
                    } else if (params.address.length > 20) {
                        errors.push('店铺地址过长');
                    }

                }
                return errors;
            });

    }
};
