var _ = require('underscore');

var orderService = require('../service/order');
var historyService = require('../service/history');
var constants = require('../utils/constants');

module.exports = {
    mapping: '/history',
    get: {
        /**
         * 历史订单列表
         */
        '/list': function (req, res) {
            historyService.queryHistoryList()
                .then(function (historys) {
                    res.json(historys);
                })
                .end(function (err) {
                    throw err;
                });

        },
        /**
         * 删除历史订单
         */
        '/history/delete/:historyId': function (req, res) {
            historyService.deleteHistory({_id: req.params.historyId})
                .then(function (flag) {
                    res.end('deleted');
                });
        }
    },
    post: {
        /**
         * 结束本次订餐
         */
        '/order/end': function (req, res) {
            if (!req.session.user.manage) {
                res.json({
                    code: constants.resCode.VALIDATOR_ERROR,
                    errors: ['没有权限']
                });
                return;
            }
            orderService.queryCurrentOrderList()
                .then(function (stores) {
                    return historyService.addHistory({content: JSON.stringify(stores), creater: req.session.user._id})
                })
                .then(function (history) {
                    return orderService.updateOrder({active: true}, {active: false});
                })
                .then(function (err, order) {
                    if (err) {
                        res.json({
                            code: constants.resCode.VALIDATOR_ERROR,
                            errors: ['操作失败，请稍后再试']
                        });
                    } else {
                        res.json({
                            code: constants.resCode.COMMON
                        });
                    }
                })
                .catch(function (err) {
                    throw err;
                });
        }
    }
};