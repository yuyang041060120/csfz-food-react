var historyDao = require('../dao/history');

module.exports = {
    addHistory: function (params, callback) {
        historyDao.createHistory(params, callback);
    },
    queryHistoryList: function () {
        return historyDao.findHistoryList();
    },
    deleteHistory: function (condition) {
        return new Promise(function (resolve, reject) {
            historyDao.deleteHistory(condition, function (err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    }
};