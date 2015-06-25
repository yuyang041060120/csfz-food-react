var historyModel = require('../model/history');

module.exports = {
    createHistory: function (params, callback) {
        return historyModel.create(params);
    },
    findHistoryList: function () {
        return historyModel.find()
            .populate('creater')
            .sort({'addTime': 'desc'})
            .exec();
    },
    deleteHistory: function (condition, callback) {
        historyModel.remove(condition, callback);
    }
};