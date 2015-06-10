/**
 * @author yuyangyang
 * @time 2015/2/3
 */
var handlebars = require('express-handlebars'),
    moment = require('moment'),
    assets = require('./assets'),
    rewriter = require('./rewriter'),
    url = require('./url');


var helpers = {
    /**
     * 获取script路径
     * @param module
     * @returns {*}
     */
    script: function (module) {
        return assets.getScript(module);
    },
    /**
     * 获取css路径
     * @param module
     * @returns {*}
     */
    css: function (module) {
        return assets.getCss(module);
    },
    /**
     * 获取url 同时做静态化处理
     * @param key
     * @param params
     * @returns {*}
     */
    url: function (key, params) {
        return typeof(url[key]) === 'function' ? rewriter.outbound(url[key](params.hash)) : url[key];
    },
    /**
     * 获取图片路径
     * @param path
     * @returns {*}
     */
    image: function (path) {
        return assets.getImage(path);
    },
    /**
     * 时间格式化
     * @param date
     * @param format
     * @returns {*}
     */
    moment: function (date, format) {
        return moment(date).format(format);
    },
    /**
     * 列表index加1
     * @param index
     * @returns {number}
     */
    index: function (index) {
        return ++index;
    }
};

module.exports = handlebars.create({
    helpers: helpers,
    defaultLayout: 'default',
    partialsDir: [
        'views/partials/'
    ]
});

