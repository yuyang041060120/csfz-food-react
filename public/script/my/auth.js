var auth = {
    signin: function (user) {
        sessionStorage.setItem('user', user);
    },
    signout: function () {
        sessionStorage.removeItem('user');
    },
    isLogin: function () {
        return !!sessionStorage.getItem('user');
    },
    getUser: function () {
        return JSON.parse(sessionStorage.getItem('user'));
    },
    handle: function (transition, params, query, callback) {
        function matchPattern(url, list) {
            var match = false;
            list.forEach(function (regex) {
                if (regex.test(url)) {
                    match = true;
                }
            });

            return match;
        }

        var urlSign = [
            /^\/signin\/?.*$/,
            /^\/signup\/?.*$/
        ];

        var urlLogin = [
            /^\/manage\/?.*$/
        ];


        var url = transition.path;


        if (!auth.isLogin() && matchPattern(url, urlLogin)) {
            transition.redirect('sign-in', {}, {from: url});
            callback();
        }

        if (auth.isLogin() && matchPattern(url, urlSign)) {
            transition.redirect('index');
            callback();
        }
        callback();
    }
};