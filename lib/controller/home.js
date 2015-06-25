/**
 * Created by yuyangyang on 2015/4/16.
 */
var _ = require('underscore');

var orderService = require('../service/order');
var historyService = require('../service/history');
var constants = require('../utils/constants');

module.exports = {
    get: {
        /**
         * 首页
         */
        '/current/list': function (req, res) {
            orderService.queryCurrentOrderList()
                .then(function (stores) {
                    res.json({
                        code: constants.resCode.COMMON,
                        data: stores
                    });
                })
                .end(function (err) {
                    throw err;
                });

        }
        ///**
        // * 删除历史订单
        // */
        //'/history/delete/:historyId': function (req, res) {
        //    historyService.deleteHistory({_id: req.params.historyId})
        //        .then(function (flag) {
        //            res.end('deleted');
        //        });
        //}
    }
};