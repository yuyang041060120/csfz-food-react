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
        if (auth.isLogin()) {
            transition.redirect('index');
            callback();
        }
        callback();
    }
};