var userModel = require('../model/user');

module.exports = {
    createUser: function (params) {
        return userModel.create(params);
    },
    findUser: function (params) {
        return userModel.findOne(params).exec();
    },
    findUserList: function ( callback) {
        userModel.find(callback);
    },
    findUserById: function (params, callback) {
        userModel.findById(params, callback);
    },
    updateUserById: function (condition, params, callback) {
        userModel.update(condition, params, callback);
    }
};