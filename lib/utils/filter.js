/**
 * @author yuyangyang
 * @time 2015/2/3
 * @description filter中间件
 */

var _ = require('underscore');


exports.filter = function (req, res, next) {

    /**
     * 给res添加put方法，可以再中间件中添加数据
     *
     * @param {Object} attributes
     */
    if (!res.locals) {
        res.locals = {};
    }

    res.put = function (attributes) {
        _.extend(res.locals, attributes);
    };


    /**
     * 重写res.render方法，将模板路径加入到数据中
     *
     * @param {String} view
     * @param {Object} options
     * @param {Function} fn
     */
    var render = res.render;

    res.render = function (view, options, fn) {
        _.extend(options || (options = {}), {viewPath: view});
        render.call(res, view, options, fn);
    };


    res.put({
        query: req.query,
        params: req.params,
        session: req.session
    });

    next();
};