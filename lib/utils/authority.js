/**
 * 权限控制中间件
 */

var includes = [
    /^\/vo\/?.*$/
];

var manages = [
    /^\/vo\/manage\/?.*$/
];

var excludes = [
    /^\/vo\/login\/?.*$/,
    /^\/vo\/register\/?.*$/
];

function matchPattern(url, list) {
    var match = false;
    list.forEach(function (regex) {
        if (regex.test(url)) {
            match = true;
        }
    });

    return match;
}


module.exports = {
    filter: function (req, res, next) {
        var include = matchPattern(req.url, includes);
        var exclude = matchPattern(req.url, excludes);
        var manage = matchPattern(req.url, manages);
        var session = req.session;

        if (include && !exclude && (!session || !session.user)) {
            res.redirect('/vo/login/?from=' + encodeURIComponent(req.url));
            return;
        }

        if (manage && !req.session.user.manage) {
            res.redirect('/');
            return;
        }

        next();

    }
}

