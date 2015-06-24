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
    /^\/vo\/signin\/?.*$/,
    /^\/vo\/signup\/?.*$/
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

        //if (include && !exclude && (!session || !session.user)) {
        //    res.json({
        //        name:'xxx'
        //    });
        //    return;
        //}

        //if (manage && !req.session.user.manage) {
        //    res.redirect('/');
        //    return;
        //}

        next();

    }
}

