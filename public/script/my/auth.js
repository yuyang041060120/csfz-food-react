var auth = {
    signin: function (user) {
        localStorage.setItem('user', user);
    },
    signout: function () {
        localStorage.removeItem('user');
    },
    isLogin: function () {
        return !!localStorage.getItem('user');
    },
    getUser: function () {
        return JSON.parse(localStorage.getItem('user'));
    },
    handle: function (transition, params, query, callback) {
        if (auth.isLogin()) {
            transition.redirect('index');
            callback();
        }
        callback();
    }
};