/**
 * @author yuyangyang
 * @time 2015/2/3
 */
var domain = require('domain'),
    logger = require('./logger').getLogger('default');

module.exports = {
    domain: function (req, res, next) {
        var reqd = domain.create();
        reqd.add(req);
        reqd.add(res);

        reqd.on('error', function (err) {
            res.on('close', function () {
                logger.info('Disposing domain for url ' + req.url);
                reqd.dispose();
            });

            next(err);
        });

        reqd.run(next);
    },
    raise: function (error, req, res) {
        logger.error('Backend error: "' + req.url + '":' + error);
        res.status(500);
        res.render('errors/404', {
            title: '页面找不到了',
            error: error,
            seo: {
                title: '页面找不到了'
            }
        });
    },
    notFound: function (req, res) {
        var error = 'Page Not Found';
        logger.error('Request failed: "' + req.url + '":' + error);
        res.status(404);
        res.render('errors/404', {
            title: '页面找不到了',
            viewPath: 'errors/404',
            error: error,
            seo: {
                title: '页面找不到了'
            }
        });
    }
};