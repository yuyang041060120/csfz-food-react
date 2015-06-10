var rules = require('./rewrite.json');
var query = require('../query');
var url = require('url');
var keys = Object.keys(rules);
var rewrites = {};

rewrites.inbound = (function() {
    return keys.map(function(key) {
        var rule = rules[key].in;
        return rule ? {
            regex: new RegExp(rule.from),
            replace: rule.to,
            last: rule.last
        } : undefined;
    });
})();

rewrites.outbound = (function() {
    return keys.map(function(key) {
        var rule = rules[key].out;
        return rule ? {
            regex: new RegExp(rule.from),
            replace: rule.to,
            last: rule.last
        } : undefined;
    });
})();

module.exports = {
    /**
     * 进站重写
     */
    inbound: function() {
        return function(req, res, next) {
            rewrites.inbound.some(function(rewrite) {
                var ret = false;
                var src = url.parse(req.url);

                if (rewrite && rewrite.regex.test(src.pathname)) {
                    req.url = src.pathname.replace(rewrite.regex, rewrite.replace);
                    var str = req.url.match(/(.*)(\?.*)/);
                    if (str) {
                        req.query = new query.QueryString(str[2]).params;
                    }
                    ret = true;
                }

                return ret;
            });
            next();
        };
    },
    /**
     * 出站重写
     *
     * @param src
     */
    outbound: function(src) {
        var ret = src;
        rewrites.outbound.some(function(rewrite) {
            if (rewrite && rewrite.regex.test(src)) {
                ret = src.replace(rewrite.regex, rewrite.replace);
                return rewrite.last;
            }
        });

        return ret;
    }
};
