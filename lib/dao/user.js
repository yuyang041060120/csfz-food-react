var userModel = require('../model/user');

module.exports = {
    createUser: function (params, callback) {
        new userModel(params).save(callback);
    },
    findUser: function (params, callback) {
        userModel.findOne(params, callback);
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