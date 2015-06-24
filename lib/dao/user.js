var userModel = require('../model/user');

module.exports = {
    createUser: function (params) {
        var self = this;
        return userModel.create(params).then(function (user) {
            return self.findUserById(user._id);
        });
    },
    findUser: function (params) {
        return userModel.findOne(params).exec();
    },
    findUserList: function () {
        return userModel.find()
            .sort({'createTime': 'desc'})
            .populate('creater')
            .populate('updater')
            .exec();
    },
    findUserById: function (params) {
        return userModel.findById(params)
            .populate('creater')
            .populate('updater')
            .exec();
    },
    updateUserById: function (condition, params) {
        return userModel.findByIdAndUpdate(condition, params)
            .populate('creater')
            .populate('updater')
            .exec();
    },
    deleteUser: function (condition) {
        return userModel.remove(condition)
            .exec();
    }
};