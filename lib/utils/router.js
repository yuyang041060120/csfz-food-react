/**
 * @author yuyangyang
 * @time 2015/2/3
 * @description 读取文件生成route
 */
var walk = require('walk'),
    path = require('path'),
    _ = require('underscore'),
    router = require('express').Router(),
    logger = require('./logger').getLogger('default'),
    authority = require('./authority'),
    filter = require('./filter');

var files = [];


var walker = walk.walk('lib/controller', {followLinks: false});

walker.on('file', function (root, stat, next) {
    var extname = path.extname(stat.name),
        basename = path.basename(stat.name, extname);

    if (extname === '.js') {
        var route = require('../controller/' + basename);
        _.each(route, function (value, key) {
            if (key !== 'mapping') {
                _.each(value, function (handler, path) {
                    files.push({
                        path: route.mapping ? route.mapping + path : path,
                        method: key,
                        handler: handler
                    });
                });
            }
        });
    }

    next();
});

walker.on('end', function () {
    if (files.length === 0) {
        logger.error('No Routes Founded');
    } else {
        try {
            _.each(files, function (item) {
                router[item.method](item.path, filter.filter, authority.filter, item.handler);
                logger.debug(item.method.toUpperCase() + ':' + item.path);
            });
            logger.debug(files.length + ' Routes Has Registered');
        } catch (e) {
            logger.error(e);
        }
    }
});


module.exports = router;