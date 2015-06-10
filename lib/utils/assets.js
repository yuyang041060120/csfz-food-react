/**
 * @author yuyangyang
 * @time 2015/2/3
 */
var fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    conf = require('../../config.json'),
    assets = require('../../assets.json');

module.exports = {
    /**
     * 获取script
     * @param module
     * @returns {string}
     */
    getScript: function (module) {
        if (conf.devMode) {
            var scriptExit = fs.existsSync(path.join(process.cwd(), 'public/build/', module + '.js'));
            return scriptExit ? '<script type="text/javascript" src="/build/' + module + '.js"></script>' : '';

        } else {
            return assets['script/' + module] ?
            '<script type="text/javascript" src="' + assets['script/' + module] + '"></script>' : '';
        }
    },
    /**
     * 获取css
     * @param module
     * @returns {string}
     */
    getCss: function (module) {
        if (conf.devMode) {
            var cssExit = fs.existsSync(path.join(process.cwd(), 'public/css/', module + '.css'));
            return cssExit ? '<link rel="stylesheet" href="/css/' + module + '.css"/>' : '';
        } else {
            return assets['css/' + module] ? '<link rel="stylesheet" href="/' + assets['css/' + module] + '"/>' : '';
        }
    },
    /**
     * 获取图片
     * @param path
     * @returns {*}
     */
    getImage: function (path) {
        return conf.devMode ? path : conf.cdn + path;
    }
};