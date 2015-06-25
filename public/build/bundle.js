/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _partialsNavbar = __webpack_require__(11);

	var _partialsNavbar2 = _interopRequireDefault(_partialsNavbar);

	var _store = __webpack_require__(12);

	var _store2 = _interopRequireDefault(_store);

	var _storeDetail = __webpack_require__(13);

	var _storeDetail2 = _interopRequireDefault(_storeDetail);

	var _signIn = __webpack_require__(14);

	var _signIn2 = _interopRequireDefault(_signIn);

	var _signOut = __webpack_require__(16);

	var _signOut2 = _interopRequireDefault(_signOut);

	var _manage = __webpack_require__(1);

	var _manage2 = _interopRequireDefault(_manage);

	var _manageStore = __webpack_require__(17);

	var _manageStore2 = _interopRequireDefault(_manageStore);

	var _manageFood = __webpack_require__(19);

	var _manageFood2 = _interopRequireDefault(_manageFood);

	var _manageUser = __webpack_require__(20);

	var _manageUser2 = _interopRequireDefault(_manageUser);

	var _voJs = __webpack_require__(21);

	var _voJs2 = _interopRequireDefault(_voJs);

	var _voMyorder = __webpack_require__(22);

	var _voMyorder2 = _interopRequireDefault(_voMyorder);

	var _voHisorder = __webpack_require__(23);

	var _voHisorder2 = _interopRequireDefault(_voHisorder);

	var _voMessage = __webpack_require__(24);

	var _voMessage2 = _interopRequireDefault(_voMessage);

	var Route = _reactRouter2['default'].Route;
	var RouteHandler = _reactRouter2['default'].RouteHandler;
	var DefaultRoute = _reactRouter2['default'].DefaultRoute;

	var App = _react2['default'].createClass({
	    displayName: 'App',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(_partialsNavbar2['default'], null),
	            _react2['default'].createElement(RouteHandler, null)
	        );
	    }
	});

	var routes = _react2['default'].createElement(
	    Route,
	    { handler: App },
	    _react2['default'].createElement(DefaultRoute, { name: 'index', handler: _index2['default'] }),
	    _react2['default'].createElement(Route, { name: 'store', path: 'store', handler: _store2['default'] }),
	    _react2['default'].createElement(Route, { name: 'store-detail', path: 'store/:storeId', handler: _storeDetail2['default'] }),
	    _react2['default'].createElement(Route, { name: 'sign-in', path: 'signin', handler: _signIn2['default'] }),
	    _react2['default'].createElement(Route, { name: 'sign-out', path: 'signout', handler: _signOut2['default'] }),
	    _react2['default'].createElement(
	        Route,
	        { name: 'manage', path: 'manage', handler: _manage2['default'] },
	        _react2['default'].createElement(Route, { name: 'manage-store', path: 'store', handler: _manageStore2['default'] }),
	        _react2['default'].createElement(Route, { name: 'manage-food', path: ':storeId/food', handler: _manageFood2['default'] }),
	        _react2['default'].createElement(Route, { name: 'user', path: 'user', handler: _manageUser2['default'] })
	    ),
	    _react2['default'].createElement(
	        Route,
	        { name: 'vo', path: 'vo', handler: _voJs2['default'] },
	        _react2['default'].createElement(Route, { name: 'my-order', path: 'myorder', handler: _voMyorder2['default'] }),
	        _react2['default'].createElement(Route, { name: 'history-order', path: 'hisorder', handler: _voHisorder2['default'] }),
	        _react2['default'].createElement(Route, { name: 'message', path: 'message', handler: _voMessage2['default'] })
	    )
	);

	_reactRouter2['default'].run(routes, _reactRouter2['default'].HashLocation, function (Root) {
	    _react2['default'].render(_react2['default'].createElement(Root, null), document.body);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var RouteHandler = _reactRouter2['default'].RouteHandler;

	var Manage = _react2['default'].createClass({
	    displayName: 'Manage',

	    statics: {
	        willTransitionTo: _auth2['default'].handle
	    },
	    render: function render() {
	        return _react2['default'].createElement(RouteHandler, null);
	    }
	});

	exports['default'] = Manage;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var auth = {
	    signin: function signin(user) {
	        sessionStorage.setItem('user', user);
	    },
	    signout: function signout() {
	        sessionStorage.removeItem('user');
	    },
	    isLogin: function isLogin() {
	        return !!sessionStorage.getItem('user');
	    },
	    getUser: function getUser() {
	        return JSON.parse(sessionStorage.getItem('user'));
	    },
	    handle: function handle(transition, params, query, callback) {
	        function matchPattern(url, list) {
	            var match = false;
	            list.forEach(function (regex) {
	                if (regex.test(url)) {
	                    match = true;
	                }
	            });

	            return match;
	        }

	        var urlSign = [/^\/signin\/?.*$/, /^\/signup\/?.*$/];

	        var urlLogin = [/^\/manage\/?.*$/, /^\/vo\/?.*$/];

	        var url = transition.path;

	        if (!auth.isLogin() && matchPattern(url, urlLogin)) {
	            transition.redirect('sign-in', {}, { from: url });
	            callback();
	        }

	        if (auth.isLogin() && matchPattern(url, urlSign)) {
	            transition.redirect('index');
	            callback();
	        }
	        callback();
	    }
	};

	exports['default'] = auth;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var _componentUi = __webpack_require__(8);

	var _componentUi2 = _interopRequireDefault(_componentUi);

	var Link = _reactRouter2['default'].Link;
	var cx = _react2['default'].addons.classSet;

	var Index = _react2['default'].createClass({
	    displayName: 'Index',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(CurrentBox, null),
	            _react2['default'].createElement(HistoryBox, null)
	        );
	    }
	});

	var CurrentBox = _react2['default'].createClass({
	    displayName: 'CurrentBox',

	    getInitialState: function getInitialState() {
	        return { list: {} };
	    },
	    handleClick: function handleClick() {
	        _componentUi2['default'].alert({
	            title: '确定结束本次订餐？',
	            onCertain: function onCertain() {
	                _jquery2['default'].post('/vo/order/end', function (response) {
	                    if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                        location.reload();
	                    }
	                });
	            }
	        });
	    },
	    componentDidMount: function componentDidMount() {
	        _jquery2['default'].get('/current/list', (function (response) {
	            this.setState({ list: response.data });
	        }).bind(this));
	    },
	    render: function render() {
	        return Object.keys(this.state.list).length > 0 ? _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'h2',
	                null,
	                '当前订单',
	                _auth2['default'].isLogin() && _auth2['default'].getUser().manage ? _react2['default'].createElement(
	                    'button',
	                    { className: 'btn btn-danger pull-right', onClick: this.handleClick },
	                    '结束本次订单'
	                ) : ''
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'index-current' },
	                _react2['default'].createElement(StoreList, { data: this.state.list })
	            )
	        ) : _react2['default'].createElement('div', null);
	    }
	});

	var HistoryBox = _react2['default'].createClass({
	    displayName: 'HistoryBox',

	    getInitialState: function getInitialState() {
	        return { list: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        _jquery2['default'].get('/history/list', (function (data) {
	            this.setState({ list: data });
	        }).bind(this));
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'h2',
	                null,
	                '历史订单'
	            ),
	            _react2['default'].createElement(HistoryList, { data: this.state.list })
	        );
	    }
	});

	var HistoryList = _react2['default'].createClass({
	    displayName: 'HistoryList',

	    render: function render() {
	        return _react2['default'].createElement(
	            'ul',
	            { className: 'list-group' },
	            this.props.data.map(function (history, index) {
	                return _react2['default'].createElement(HistoryItem, { data: history, key: index });
	            })
	        );
	    }
	});

	var HistoryItem = _react2['default'].createClass({
	    displayName: 'HistoryItem',

	    getInitialState: function getInitialState() {
	        return { isShow: false };
	    },
	    handleClick: function handleClick() {
	        this.setState({ isShow: !this.state.isShow });
	    },
	    render: function render() {
	        var history = this.props.data;

	        var classes = cx({
	            'glyphicon pull-right': true,
	            'glyphicon-plus': !this.state.isShow,
	            'glyphicon-minus': this.state.isShow
	        });
	        return _react2['default'].createElement(
	            'li',
	            { className: 'list-group-item' },
	            _react2['default'].createElement(
	                'h5',
	                { onClick: this.handleClick },
	                moment(history.addTime).format('YYYY-MM-DD HH:mm'),
	                ' ',
	                history.creater ? history.creater.realname : '',
	                _react2['default'].createElement('span', { className: classes })
	            ),
	            this.state.isShow ? _react2['default'].createElement(StoreList, { data: JSON.parse(history.content) }) : ''
	        );
	    }
	});

	var StoreList = _react2['default'].createClass({
	    displayName: 'StoreList',

	    render: function render() {
	        var data = this.props.data;
	        return _react2['default'].createElement(
	            'div',
	            null,
	            Object.keys(data).map(function (key, index) {
	                return _react2['default'].createElement(StoreItem, { data: data[key], key: index });
	            })
	        );
	    }
	});

	var StoreItem = _react2['default'].createClass({
	    displayName: 'StoreItem',

	    render: function render() {
	        var data = this.props.data;
	        return _react2['default'].createElement(
	            'div',
	            { className: 'index-store-item' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'page-header' },
	                _react2['default'].createElement(
	                    'h4',
	                    null,
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'store-detail',
	                            params: { storeId: data.store._id } },
	                        data.store.name,
	                        '（',
	                        data.store.telephone,
	                        '）'
	                    ),
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'label label-primary mg-rt' },
	                        '总价格:',
	                        data.summary.total
	                    ),
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'label label-info' },
	                        '总份数:',
	                        data.summary.count
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'table',
	                { className: 'table table-hover table-condensed' },
	                _react2['default'].createElement('col', { width: '20%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement('col', { width: '40%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement(
	                    'thead',
	                    null,
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '套餐'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '份数'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '总价'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '订餐'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '单价'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'tbody',
	                    null,
	                    Object.keys(data.orders).map(function (key, index) {
	                        return _react2['default'].createElement(OrderItem, { data: data.orders[key], key: index });
	                    })
	                )
	            )
	        );
	    }
	});

	var OrderItem = _react2['default'].createClass({
	    displayName: 'OrderItem',

	    render: function render() {
	        var item = this.props.data;
	        var order = item.order;
	        return _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.food.name
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                item.count
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                item.total
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                item.list.map(function (i, index) {
	                    return _react2['default'].createElement(
	                        'p',
	                        { key: index },
	                        i.creater.realname,
	                        ' ',
	                        i.count,
	                        '份'
	                    );
	                })
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.food.price
	            )
	        );
	    }
	});

	exports['default'] = Index;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    resCode: {
	        COMMON: 0,
	        NOT_FOUND: 10000,
	        EXCEPTION: 10001,
	        VALIDATOR_ERROR: 10002
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _uiAlert = __webpack_require__(9);

	var _uiAlert2 = _interopRequireDefault(_uiAlert);

	var _uiTip = __webpack_require__(10);

	var _uiTip2 = _interopRequireDefault(_uiTip);

	exports['default'] = {
	    tip: _uiTip2['default'],
	    alert: _uiAlert2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var AlertComponent = _react2['default'].createClass({
	    displayName: 'AlertComponent',

	    handleClose: function handleClose() {
	        if (this.props.onClose) {
	            this.props.onClose(close);
	        } else {
	            close();
	        }
	    },
	    handleCertain: function handleCertain() {
	        if (this.props.onCertain) {
	            this.props.onCertain(close);
	        } else {
	            close();
	        }
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement('div', { className: 'alpha' }),
	            _react2['default'].createElement(
	                'div',
	                { className: 'dialog' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'modal-dialog' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'modal-content' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'modal-header' },
	                            _react2['default'].createElement(
	                                'button',
	                                { type: 'button', className: 'close', onClick: this.handleClose },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'x'
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'h4',
	                                { className: 'modal-title' },
	                                this.props.title
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'modal-footer' },
	                            _react2['default'].createElement(
	                                'button',
	                                { type: 'button', className: 'btn btn-primary btn-sm', onClick: this.handleCertain },
	                                '确定'
	                            ),
	                            _react2['default'].createElement(
	                                'button',
	                                { type: 'button', className: 'btn btn-default btn-sm', onClick: this.handleClose },
	                                '取消'
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var instant;

	function close() {
	    _react2['default'].unmountComponentAtNode(instant);
	}

	function alert(options) {
	    if (!instant) {
	        instant = document.createElement('div');
	        document.body.appendChild(instant);
	    }

	    _react2['default'].render(_react2['default'].createElement(AlertComponent, { onClose: options.onClose, onCertain: options.onCertain,
	        title: options.title }), instant);

	    calcuPosition();

	    (0, _jquery2['default'])(window).off('resize.alert').on('resize.alert', function () {
	        calcuPosition();
	    });
	}

	function calcuPosition() {
	    var $model = (0, _jquery2['default'])(instant).find('.dialog');
	    var left = ((0, _jquery2['default'])(window).width() - $model.width()) / 2;
	    var top = ((0, _jquery2['default'])(window).height() - $model.height()) / 2;

	    $model.css({
	        left: left,
	        top: top
	    });
	}

	exports['default'] = alert;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var TipComponent = _react2['default'].createClass({
	    displayName: 'TipComponent',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'alert alert-success ui-tip' },
	            this.props.content
	        );
	    }
	});

	var instant;
	var timeout;

	function tip(options) {
	    clearTimeout(timeout);
	    if (!instant) {
	        instant = document.createElement('div');
	        document.body.appendChild(instant);
	    }

	    _react2['default'].render(_react2['default'].createElement(TipComponent, { content: options.content }), instant);
	    calcuPosition();
	    this.timeout = setTimeout(function () {
	        _react2['default'].unmountComponentAtNode(instant);
	    }, 1500);
	}

	function calcuPosition() {
	    var $tip = (0, _jquery2['default'])(instant).find('.alert');
	    var left = ((0, _jquery2['default'])(window).width() - $tip.width()) / 2;

	    $tip.css({
	        left: left
	    });
	}

	exports['default'] = tip;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var Link = _reactRouter2['default'].Link;

	var Navbar = _react2['default'].createClass({
	    displayName: 'Navbar',

	    render: function render() {
	        return _react2['default'].createElement(
	            'nav',
	            { className: 'navbar navbar-default navbar-fixed-top' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'container-fluid' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'navbar-header' },
	                    _react2['default'].createElement(
	                        Link,
	                        { className: 'navbar-brand', to: 'index' },
	                        '内部订餐系统'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
	                    _react2['default'].createElement(
	                        'ul',
	                        { className: 'nav navbar-nav' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                Link,
	                                { to: 'index' },
	                                '首页'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                Link,
	                                { to: 'store' },
	                                '点餐'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                Link,
	                                { to: 'my-order' },
	                                '我的'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                Link,
	                                { to: 'manage-store' },
	                                '管理'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                Link,
	                                { to: 'user' },
	                                '通讯录'
	                            )
	                        )
	                    ),
	                    _auth2['default'].isLogin() ? _react2['default'].createElement(
	                        'ul',
	                        { className: 'nav navbar-nav navbar-right' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                'a',
	                                null,
	                                _auth2['default'].getUser().realname
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                Link,
	                                { to: 'sign-out' },
	                                '退出'
	                            )
	                        )
	                    ) : _react2['default'].createElement(
	                        'ul',
	                        { className: 'nav navbar-nav navbar-right' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                Link,
	                                { to: 'sign-in' },
	                                '登录'
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	exports['default'] = Navbar;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var Link = _reactRouter2['default'].Link;

	var Store = _react2['default'].createClass({
	    displayName: 'Store',

	    getInitialState: function getInitialState() {
	        return { list: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        _jquery2['default'].get('/store/list', (function (data) {
	            this.setState({ list: data });
	        }).bind(this));
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'page-header' },
	                _react2['default'].createElement(
	                    'h3',
	                    null,
	                    '店铺列表'
	                )
	            ),
	            _react2['default'].createElement(StoreList, { data: this.state.list })
	        );
	    }
	});

	var StoreList = _react2['default'].createClass({
	    displayName: 'StoreList',

	    render: function render() {
	        return _react2['default'].createElement(
	            'ul',
	            { className: 'list-group' },
	            this.props.data.map(function (item) {
	                return _react2['default'].createElement(StoreItem, { data: item, key: item._id });
	            })
	        );
	    }
	});

	var StoreItem = _react2['default'].createClass({
	    displayName: 'StoreItem',

	    render: function render() {
	        var store = this.props.data;
	        return _react2['default'].createElement(
	            'li',
	            { className: 'list-group-item store-item' },
	            _react2['default'].createElement(
	                'h3',
	                { className: 'list-group-item-heading' },
	                _react2['default'].createElement(
	                    Link,
	                    { to: 'store-detail', params: { storeId: store._id } },
	                    store.name
	                )
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                _react2['default'].createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
	                store.mainProduct,
	                _react2['default'].createElement('span', { className: 'glyphicon glyphicon-phone' }),
	                store.telephone
	            )
	        );
	    }
	});

	exports['default'] = Store;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var _componentUi = __webpack_require__(8);

	var _componentUi2 = _interopRequireDefault(_componentUi);

	var StoreDetail = _react2['default'].createClass({
	    displayName: 'StoreDetail',

	    getInitialState: function getInitialState() {
	        return { data: { store: {}, foods: [] } };
	    },
	    componentDidMount: function componentDidMount() {
	        _jquery2['default'].get('/store/detail/' + this.props.params.storeId, (function (data) {
	            this.setState({ data: data });
	        }).bind(this));
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'page-header' },
	                _react2['default'].createElement(
	                    'h3',
	                    null,
	                    '套餐列表'
	                )
	            ),
	            _react2['default'].createElement(FoodList, { data: this.state.data.foods })
	        );
	    }
	});

	var FoodList = _react2['default'].createClass({
	    displayName: 'FoodList',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'row' },
	            this.props.data.map(function (item, index) {
	                return _react2['default'].createElement(FoodItem, { data: item, key: index });
	            })
	        );
	    }
	});

	var FoodItem = _react2['default'].createClass({
	    displayName: 'FoodItem',

	    getInitialState: function getInitialState() {
	        return { showBtn: false };
	    },
	    handleOrder: function handleOrder() {
	        var food = this.props.data;

	        _jquery2['default'].post('/vo/order', {
	            food: food._id,
	            store: food.store._id,
	            count: 1
	        }, function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                _componentUi2['default'].tip({
	                    content: '点餐成功'
	                });
	            } else {
	                _componentUi2['default'].tip({
	                    content: '点餐失败'
	                });
	            }
	        });
	    },
	    render: function render() {
	        var food = this.props.data;
	        return _react2['default'].createElement(
	            'div',
	            { className: 'col-lg-3' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'thumbnail' },
	                _react2['default'].createElement('img', { src: 'image/demo.jpg' }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'caption' },
	                    _react2['default'].createElement(
	                        'h4',
	                        null,
	                        food.name
	                    ),
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'store-price' },
	                        '￥',
	                        food.price
	                    ),
	                    _auth2['default'].isLogin() ? _react2['default'].createElement(
	                        'p',
	                        null,
	                        _react2['default'].createElement(
	                            'button',
	                            { className: 'btn btn-primary btn-sm mg-rt', onClick: this.handleOrder },
	                            '订餐'
	                        )
	                    ) : ''
	                )
	            )
	        );
	    }
	});

	exports['default'] = StoreDetail;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var _componentReactValidator = __webpack_require__(15);

	var _componentReactValidator2 = _interopRequireDefault(_componentReactValidator);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var cx = _react2['default'].addons.classSet;

	var SignIn = _react2['default'].createClass({
	    displayName: 'SignIn',

	    mixins: [_reactRouter2['default'].Navigation],
	    getInitialState: function getInitialState() {
	        return {
	            isSubmitting: false,
	            errors: []
	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            validations: {
	                type: 'keyup',
	                rules: {
	                    email: {
	                        required: true
	                    },
	                    password: {
	                        required: true
	                    }
	                },
	                messages: {
	                    email: {
	                        required: 'please enter email'
	                    },
	                    password: {
	                        required: 'please enter password'
	                    }
	                }
	            }
	        };
	    },
	    statics: {
	        willTransitionTo: _auth2['default'].handle
	    },
	    handleSubmit: function handleSubmit(model, e) {
	        e.preventDefault();
	        this.setState({ isSubmitting: true });
	        _jquery2['default'].post('/vo/signin', model, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                _auth2['default'].signin(JSON.stringify(response.data));
	                this.transitionTo(this.props.query.from ? this.props.query.from : 'index');
	            } else {
	                this.setState({ errors: response.errors, isSubmitting: false });
	            }
	        }).bind(this));
	    },
	    render: function render() {
	        var btnText = this.state.isSubmitting ? 'Submit...' : 'Submit';
	        return _react2['default'].createElement(
	            _componentReactValidator2['default'].Form,
	            { className: 'form-container form-horizontal', handleSubmit: this.handleSubmit,
	                validations: this.props.validations },
	            _react2['default'].createElement(
	                'div',
	                { className: 'page-header' },
	                _react2['default'].createElement(
	                    'h2',
	                    null,
	                    'Sign In'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'alert alert-danger', style: { display: this.state.errors.length > 0 ? 'block' : 'none' } },
	                this.state.errors.map(function (error, index) {
	                    return _react2['default'].createElement(
	                        'p',
	                        { key: index },
	                        error
	                    );
	                })
	            ),
	            _react2['default'].createElement(SigninInput, { name: 'email', placeholder: 'Email', type: 'text', key: 'email' }),
	            _react2['default'].createElement(SigninInput, { name: 'password', placeholder: 'Password', type: 'password', key: 'password' }),
	            _react2['default'].createElement(
	                'div',
	                { className: 'form-group' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-12' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-primary btn-block',
	                            disabled: this.state.isSubmitting },
	                        btnText
	                    )
	                )
	            )
	        );
	    }
	});

	var SigninInput = _react2['default'].createClass({
	    displayName: 'SigninInput',

	    mixins: [_componentReactValidator2['default'].Mixin],
	    handleChange: function handleChange(e) {
	        this.setValue(e.currentTarget.value);
	    },
	    render: function render() {
	        var errorMsg = this.isValid() ? '' : this.getErrorMsg();
	        var classes = cx({
	            'form-group': true,
	            'has-error': this.isInvalid()
	        });
	        return _react2['default'].createElement(
	            'div',
	            { className: classes },
	            _react2['default'].createElement(
	                'div',
	                { className: 'col-sm-12' },
	                _react2['default'].createElement('input', { name: this.props.name, className: 'form-control', type: this.props.type,
	                    placeholder: this.props.placeholder,
	                    onChange: this.handleChange }),
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'form-error' },
	                    errorMsg
	                )
	            )
	        );
	    }
	});

	exports['default'] = SignIn;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Created by yuyangyang on 2015/4/25.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Validator = {};

	Validator.methods = {
	    required: function required(value, ruleValue) {
	        var isValid = value.length > 0;
	        return isValid;
	    },
	    maxlength: function maxlength(value, ruleValue) {
	        return value && value.length && value.length <= ruleValue;
	    },
	    minlength: function minlength(value, ruleValue) {
	        return value && value.length && value.length >= ruleValue;
	    },
	    email: function email(value, ruleValue) {
	        return !value || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
	    },
	    url: function url(value, ruleValue) {
	        return !value || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
	    },
	    date: function date(value, ruleValue) {
	        return !value || !/Invalid|NaN/.test(new Date(value).toString());
	    },
	    number: function number(value, ruleValue) {
	        return !value || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
	    },
	    pattern: function pattern(value, rulevalue) {
	        return rulevalue.test(value);
	    },
	    equalTo: function equalTo(value, rulevalue, component) {
	        return value === component.state._value;
	    }
	};

	Validator.Mixin = {
	    getInitialState: function getInitialState() {
	        return {
	            _value: this.props.value || '',
	            _validType: '',
	            _isValid: true
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        this.props.attachToForm(this);
	    },
	    setValue: function setValue(value) {
	        this.setState({ _value: value }, function () {
	            if (this.props.isTypeKeyup()) {
	                this.valid();
	            }
	        });
	    },
	    setValid: function setValid() {
	        this.setState({ _isValid: true });
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.props.detachFromForm(this);
	    },
	    getErrorMsg: function getErrorMsg() {
	        return this.props.getErrorMsg(this);
	    },
	    isValid: function isValid() {
	        return this.state._isValid;
	    },
	    isInvalid: function isInvalid() {
	        return !this.isValid();
	    },
	    valid: function valid() {
	        this.props.valid(this);
	    }
	};

	Validator.Form = React.createClass({
	    displayName: 'Form',

	    isTypeKeyup: function isTypeKeyup() {
	        return this.props.validations.type === 'keyup';
	    },
	    getRulesByName: function getRulesByName(name) {
	        return this.props.validations.rules[name];
	    },
	    getRuleValueByNameAndRule: function getRuleValueByNameAndRule(name, rule) {
	        return this.getRulesByName(name)[rule];
	    },
	    getErrorMsg: function getErrorMsg(component) {
	        var name = component.props.name;
	        var validType = component.state._validType;
	        return this.props.validations.messages[name][validType];
	    },
	    validForm: function validForm() {
	        var inputKeys = Object.keys(this.inputs);

	        var isValidArray = [];

	        inputKeys.forEach((function (key) {
	            isValidArray.push(this.valid(this.inputs[key]));
	        }).bind(this));

	        return isValidArray.every(function (isValid) {
	            return isValid;
	        });
	    },
	    valid: function valid(component) {
	        var value = component.state._value;
	        var name = component.props.name;
	        var isValid;
	        for (var rule in this.getRulesByName(name)) {
	            var ruleValue = this.getRuleValueByNameAndRule(name, rule);
	            isValid = Validator.methods[rule].bind(this)(value, ruleValue, this.inputs[ruleValue]);

	            if (!isValid) {
	                component.setState({ _isValid: false, _validType: rule });
	                return false;
	            }
	        }
	        component.setState({ _isValid: true });
	        return true;
	    },
	    componentWillMount: function componentWillMount() {
	        this.model = {};
	        this.inputs = {};
	    },
	    componentDidMount: function componentDidMount() {},
	    handleSubmit: function handleSubmit(e) {
	        if (this.validForm()) {
	            this.updateModel();

	            if (this.props.handleSubmit) {
	                this.props.handleSubmit(this.model, e);
	            }
	        } else {
	            e.preventDefault();
	        }
	    },
	    attachToForm: function attachToForm(component) {
	        this.inputs[component.props.name] = component;
	        this.model[component.props.name] = component.state._value;
	    },
	    detachFromForm: function detachFromForm(component) {
	        delete this.inputs[component.props.name];
	        delete this.model[component.props.name];
	    },
	    updateModel: function updateModel() {
	        Object.keys(this.inputs).forEach((function (name) {
	            var component = this.inputs[name];
	            this.model[name] = component.state._value;
	        }).bind(this));
	    },
	    registerInputs: function registerInputs(children) {
	        return children.map((function (child) {
	            if (child.props && child.props.name) {
	                return React.cloneElement(child, {
	                    attachToForm: this.attachToForm,
	                    getErrorMsg: this.getErrorMsg,
	                    detachFromForm: this.detachFromForm,
	                    valid: this.valid,
	                    isTypeKeyup: this.isTypeKeyup
	                });
	            } else {
	                return child;
	            }
	        }).bind(this));
	    },
	    render: function render() {
	        var method = this.props.method || 'POST';
	        var action = this.props.action;
	        var className = this.props.className;
	        return React.createElement('form', {
	            method: method,
	            action: action,
	            className: className,
	            onSubmit: this.handleSubmit
	        }, null, this.registerInputs(this.props.children));
	    }
	});

	exports['default'] = Validator;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var SignOut = _react2['default'].createClass({
	    displayName: 'SignOut',

	    mixins: [_reactRouter2['default'].Navigation],
	    componentDidMount: function componentDidMount() {
	        _auth2['default'].signout();
	        this.transitionTo('index');
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	                'h2',
	                null,
	                'SignOut...'
	            )
	        );
	    }
	});

	exports['default'] = SignOut;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reflux = __webpack_require__(18);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var _componentUi = __webpack_require__(8);

	var _componentUi2 = _interopRequireDefault(_componentUi);

	var Link = _reactRouter2['default'].Link;

	var ManageStore = _react2['default'].createClass({
	    displayName: 'ManageStore',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(New, null),
	            _react2['default'].createElement(List, null)
	        );
	    }
	});

	var ListActions = _reflux2['default'].createActions(['getAll', 'addItem', 'removeItem', 'createItem', 'updateItem', 'deleteItem']);

	var ListStore = _reflux2['default'].createStore({
	    items: [],
	    listenables: ListActions,
	    onAddItem: function onAddItem() {
	        if (this.items.length === 0 || this.items[0]._id) {
	            this.items.unshift({
	                name: '',
	                mainProduct: '',
	                telephone: '',
	                address: ''
	            });
	            this.trigger(this.items);
	        }
	    },
	    onRemoveItem: function onRemoveItem(index) {
	        this.items.splice(index, 1);
	        this.trigger(this.items);
	    },
	    onGetAll: function onGetAll() {
	        _jquery2['default'].get('/vo/manage/store/list', (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items = response.data;
	                this.trigger(this.items);
	            }
	        }).bind(this));
	    },
	    onCreateItem: function onCreateItem(item, index, callback) {
	        _jquery2['default'].post('/vo/manage/store/new', item, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items[index] = response.data;
	                this.trigger(this.items);
	            } else {
	                callback(response.errors);
	            }
	        }).bind(this));
	    },
	    onUpdateItem: function onUpdateItem(id, item, index, callback) {
	        _jquery2['default'].post('/vo/manage/store/update', _.extend(item, { id: id }), (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items[index] = response.data;
	                this.trigger(this.items);
	                callback();
	            } else {
	                callback(response.errors);
	            }
	        }).bind(this));
	    },
	    onDeleteItem: function onDeleteItem(id, index, callback) {
	        _jquery2['default'].post('/vo/manage/store/delete', { id: id }, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items.splice(index, 1);
	                this.trigger(this.items);
	                callback();
	            }
	        }).bind(this));
	    }
	});

	var New = _react2['default'].createClass({
	    displayName: 'New',

	    handleClick: function handleClick() {
	        ListActions.addItem();
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'page-header' },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                '店铺列表',
	                _auth2['default'].getUser().manage ? _react2['default'].createElement(
	                    'button',
	                    { className: 'btn btn-primary pull-right', onClick: this.handleClick },
	                    '新增店铺'
	                ) : ''
	            )
	        );
	    }
	});

	var List = _react2['default'].createClass({
	    displayName: 'List',

	    mixins: [_reflux2['default'].connect(ListStore, 'list')],
	    getInitialState: function getInitialState() {
	        return { list: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        ListActions.getAll();
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'table',
	            { className: 'table table-hover manage-table' },
	            _react2['default'].createElement('col', { width: '20%' }),
	            _react2['default'].createElement('col', { width: '12%' }),
	            _react2['default'].createElement('col', { width: '12%' }),
	            _react2['default'].createElement('col', { width: '20%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '35%' }),
	            _react2['default'].createElement(
	                'thead',
	                null,
	                _react2['default'].createElement(
	                    'tr',
	                    null,
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '店铺名称'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '主营产品'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '电话'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '地址'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '添加时间'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '添加人'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '操作'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'tbody',
	                null,
	                this.state.list.map(function (item, index) {
	                    return _react2['default'].createElement(Item, { data: item, key: index, index: index });
	                })
	            )
	        );
	    }
	});

	var Item = _react2['default'].createClass({
	    displayName: 'Item',

	    getInitialState: function getInitialState() {
	        return { isEdit: false };
	    },
	    toggleEdit: function toggleEdit(flag) {
	        this.setState({ isEdit: flag });
	    },
	    render: function render() {
	        var store = this.props.data;
	        var index = this.props.index;
	        var render;

	        if (store._id) {
	            if (this.state.isEdit) {
	                render = _react2['default'].createElement(ItemEdit, { index: index, data: store, toggleEdit: this.toggleEdit });
	            } else {
	                render = _react2['default'].createElement(ItemShow, { index: index, data: store, toggleEdit: this.toggleEdit });
	            }
	        } else {
	            render = _react2['default'].createElement(ItemNew, { data: store, index: index });
	        }

	        return render;
	    }
	});

	var ItemShow = _react2['default'].createClass({
	    displayName: 'ItemShow',

	    handleEdit: function handleEdit() {
	        this.props.toggleEdit(true);
	    },
	    handleDelete: function handleDelete(id, index) {
	        _componentUi2['default'].alert({
	            title: '确定删除该店铺？',
	            onCertain: function onCertain(close) {
	                ListActions.deleteItem(id, index, function () {
	                    close();
	                });
	            }
	        });
	    },
	    render: function render() {
	        var store = this.props.data;
	        var index = this.props.index;
	        return _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	                'td',
	                null,
	                store.name
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                store.mainProduct
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                store.telephone
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                store.address
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(store.addTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                store.creater ? store.creater.realname : ''
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _auth2['default'].getUser().manage ? _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary',
	                            onClick: this.handleEdit },
	                        '修改'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-danger',
	                            onClick: this.handleDelete.bind(this, store._id, index) },
	                        '删除'
	                    ),
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'manage-food', className: 'btn btn-info', params: { storeId: store._id } },
	                        '套餐管理'
	                    )
	                ) : '没有权限'
	            )
	        );
	    }
	});

	var ItemNew = _react2['default'].createClass({
	    displayName: 'ItemNew',

	    getInitialState: function getInitialState() {
	        return { errors: {} };
	    },
	    handleCreate: function handleCreate(index) {
	        var model = {
	            name: this.refs.name.getDOMNode().value.trim(),
	            mainProduct: this.refs.mainProduct.getDOMNode().value.trim(),
	            telephone: this.refs.telephone.getDOMNode().value.trim(),
	            address: this.refs.address.getDOMNode().value.trim()
	        };

	        ListActions.createItem(model, index, (function (errors) {
	            this.setState({ errors: errors });
	        }).bind(this));
	    },
	    handleCancel: function handleCancel(index) {
	        ListActions.removeItem(index);
	    },
	    handleFocus: function handleFocus(type) {
	        delete this.state.errors[type];
	        this.forceUpdate();
	    },
	    render: function render() {
	        var index = this.props.index;

	        var nameErr = this.state.errors.name;
	        var mainProductErr = this.state.errors.mainProduct;
	        var telephoneErr = this.state.errors.telephone;
	        var addressErr = this.state.errors.address;

	        return _react2['default'].createElement(
	            'tr',
	            { className: 'active' },
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    nameErr ? _react2['default'].createElement(Tip, { content: nameErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'name'),
	                        ref: 'name' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    mainProductErr ? _react2['default'].createElement(Tip, { content: mainProductErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'mainProduct'),
	                        ref: 'mainProduct' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    telephoneErr ? _react2['default'].createElement(Tip, { content: telephoneErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'telephone'),
	                        ref: 'telephone' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    addressErr ? _react2['default'].createElement(Tip, { content: addressErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'address'),
	                        ref: 'address' })
	                )
	            ),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary',
	                            onClick: this.handleCreate.bind(this, index) },
	                        '新增'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default',
	                            onClick: this.handleCancel.bind(this, index) },
	                        '取消'
	                    )
	                )
	            )
	        );
	    }
	});

	var Tip = _react2['default'].createClass({
	    displayName: 'Tip',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'tooltip top' },
	            _react2['default'].createElement('div', { className: 'tooltip-arrow' }),
	            _react2['default'].createElement(
	                'div',
	                { className: 'tooltip-inner' },
	                this.props.content
	            )
	        );
	    }
	});

	var ItemEdit = _react2['default'].createClass({
	    displayName: 'ItemEdit',

	    getInitialState: function getInitialState() {
	        return { errors: {} };
	    },
	    handleSave: function handleSave(id, index) {
	        var model = {
	            name: this.refs.name.getDOMNode().value.trim(),
	            mainProduct: this.refs.mainProduct.getDOMNode().value.trim(),
	            telephone: this.refs.telephone.getDOMNode().value.trim(),
	            address: this.refs.address.getDOMNode().value.trim()
	        };

	        ListActions.updateItem(id, model, index, (function (errors) {
	            errors ? this.setState({ errors: errors }) : this.props.toggleEdit(false);
	        }).bind(this));
	    },
	    handleCancel: function handleCancel() {
	        this.props.toggleEdit(false);
	    },
	    handleFocus: function handleFocus(type) {
	        delete this.state.errors[type];
	        this.forceUpdate();
	    },
	    render: function render() {
	        var store = this.props.data;
	        var index = this.props.index;

	        var nameErr = this.state.errors.name;
	        var mainProductErr = this.state.errors.mainProduct;
	        var telephoneErr = this.state.errors.telephone;
	        var addressErr = this.state.errors.address;

	        return _react2['default'].createElement(
	            'tr',
	            { className: 'active' },
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    nameErr ? _react2['default'].createElement(Tip, { content: nameErr }) : '',
	                    _react2['default'].createElement('input', { type: 'text',
	                        maxLength: '20',
	                        className: 'form-control input-sm',
	                        defaultValue: store.name,
	                        onFocus: this.handleFocus.bind(this, 'name'),
	                        ref: 'name' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    mainProductErr ? _react2['default'].createElement(Tip, { content: mainProductErr }) : '',
	                    _react2['default'].createElement('input', { type: 'text',
	                        maxLength: '20',
	                        className: 'form-control input-sm',
	                        defaultValue: store.mainProduct,
	                        onFocus: this.handleFocus.bind(this, 'mainProduct'),
	                        ref: 'mainProduct' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    telephoneErr ? _react2['default'].createElement(Tip, { content: telephoneErr }) : '',
	                    _react2['default'].createElement('input', { type: 'text',
	                        maxLength: '20',
	                        className: 'form-control input-sm',
	                        onFocus: this.handleFocus.bind(this, 'telephone'),
	                        defaultValue: store.telephone,
	                        ref: 'telephone' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    addressErr ? _react2['default'].createElement(Tip, { content: addressErr }) : '',
	                    _react2['default'].createElement('input', { type: 'text',
	                        maxLength: '20',
	                        className: 'form-control input-sm',
	                        onFocus: this.handleFocus.bind(this, 'address'),
	                        defaultValue: store.address,
	                        ref: 'address' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(store.addTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                store.creater ? store.creater.realname : ''
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-info',
	                            onClick: this.handleSave.bind(this, store._id, index) },
	                        '保存'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default',
	                            onClick: this.handleCancel },
	                        '取消'
	                    )
	                )
	            )
	        );
	    }
	});

	exports['default'] = ManageStore;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = Reflux;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reflux = __webpack_require__(18);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var _componentUi = __webpack_require__(8);

	var _componentUi2 = _interopRequireDefault(_componentUi);

	var storeId;

	var ListActions = _reflux2['default'].createActions(['getAll', 'addItem', 'removeItem', 'createItem', 'updateItem', 'deleteItem']);

	var ListStore = _reflux2['default'].createStore({
	    items: [],
	    listenables: ListActions,
	    onAddItem: function onAddItem() {
	        if (this.items.length === 0 || this.items[0]._id) {
	            this.items.unshift({
	                name: '',
	                mainProduct: '',
	                telephone: '',
	                address: ''
	            });
	            this.trigger(this.items);
	        }
	    },
	    onRemoveItem: function onRemoveItem(index) {
	        this.items.splice(index, 1);
	        this.trigger(this.items);
	    },
	    onGetAll: function onGetAll() {
	        _jquery2['default'].get('/vo/manage/' + storeId + '/food/list', (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items = response.data;
	                this.trigger(this.items);
	            }
	        }).bind(this));
	    },
	    onCreateItem: function onCreateItem(item, index, callback) {
	        _jquery2['default'].post('/vo/manage/' + storeId + '/food/new', item, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items[index] = response.data;
	                this.trigger(this.items);
	            } else {
	                callback(response.errors);
	            }
	        }).bind(this));
	    },
	    onUpdateItem: function onUpdateItem(id, item, index, callback) {
	        _jquery2['default'].post('/vo/manage/' + storeId + '/food/update', _.extend(item, { id: id }), (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items[index] = response.data;
	                this.trigger(this.items);
	                callback();
	            } else {
	                callback(response.errors);
	            }
	        }).bind(this));
	    },
	    onDeleteItem: function onDeleteItem(id, index, callback) {
	        _jquery2['default'].post('/vo/manage/' + storeId + '/food/delete', { id: id }, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items.splice(index, 1);
	                this.trigger(this.items);
	                callback();
	            }
	        }).bind(this));
	    }
	});

	var ManageFood = _react2['default'].createClass({
	    displayName: 'ManageFood',

	    componentWillMount: function componentWillMount() {
	        storeId = this.props.params.storeId;
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(New, null),
	            _react2['default'].createElement(List, null)
	        );
	    }
	});

	var New = _react2['default'].createClass({
	    displayName: 'New',

	    handleClick: function handleClick() {
	        ListActions.addItem();
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'page-header' },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                '套餐列表',
	                _auth2['default'].getUser().manage ? _react2['default'].createElement(
	                    'button',
	                    { className: 'btn btn-primary pull-right', onClick: this.handleClick },
	                    '新增套餐'
	                ) : ''
	            )
	        );
	    }
	});

	var List = _react2['default'].createClass({
	    displayName: 'List',

	    mixins: [_reflux2['default'].connect(ListStore, 'list')],
	    getInitialState: function getInitialState() {
	        return { list: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        ListActions.getAll();
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'table',
	            { className: 'table table-hover manage-table' },
	            _react2['default'].createElement('col', { width: '18%' }),
	            _react2['default'].createElement('col', { width: '15%' }),
	            _react2['default'].createElement('col', { width: '20%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '15%' }),
	            _react2['default'].createElement(
	                'thead',
	                null,
	                _react2['default'].createElement(
	                    'tr',
	                    null,
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '套餐名称'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '套餐价格'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '所属店铺'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '添加时间'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '添加人'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '更新时间'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '更新人'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '操作'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'tbody',
	                null,
	                this.state.list.map(function (item, index) {
	                    return _react2['default'].createElement(Item, { data: item, key: index, index: index });
	                })
	            )
	        );
	    }
	});

	var Item = _react2['default'].createClass({
	    displayName: 'Item',

	    getInitialState: function getInitialState() {
	        return { isEdit: false };
	    },
	    toggleEdit: function toggleEdit(flag) {
	        this.setState({ isEdit: flag });
	    },
	    render: function render() {
	        var food = this.props.data;
	        var index = this.props.index;
	        var render;

	        if (food._id) {
	            if (this.state.isEdit) {
	                render = _react2['default'].createElement(ItemEdit, { index: index, data: food, toggleEdit: this.toggleEdit });
	            } else {
	                render = _react2['default'].createElement(ItemShow, { index: index, data: food, toggleEdit: this.toggleEdit });
	            }
	        } else {
	            render = _react2['default'].createElement(ItemNew, { data: food, index: index });
	        }

	        return render;
	    }
	});

	var Tip = _react2['default'].createClass({
	    displayName: 'Tip',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'tooltip top' },
	            _react2['default'].createElement('div', { className: 'tooltip-arrow' }),
	            _react2['default'].createElement(
	                'div',
	                { className: 'tooltip-inner' },
	                this.props.content
	            )
	        );
	    }
	});

	var ItemShow = _react2['default'].createClass({
	    displayName: 'ItemShow',

	    handleEdit: function handleEdit() {
	        this.props.toggleEdit(true);
	    },
	    handleDelete: function handleDelete(id, index) {
	        _componentUi2['default'].alert({
	            title: '确定删除该套餐？',
	            onCertain: function onCertain(close) {
	                ListActions.deleteItem(id, index, function () {
	                    close();
	                });
	            }
	        });
	    },
	    render: function render() {
	        var food = this.props.data;
	        var index = this.props.index;
	        return _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.name
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.price
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.store.name
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(food.addTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.creater.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(food.updateTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.updater.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _auth2['default'].getUser().manage ? _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary',
	                            onClick: this.handleEdit },
	                        '修改'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-danger',
	                            onClick: this.handleDelete.bind(this, food._id, index) },
	                        '删除'
	                    )
	                ) : '没有权限'
	            )
	        );
	    }
	});

	var ItemNew = _react2['default'].createClass({
	    displayName: 'ItemNew',

	    getInitialState: function getInitialState() {
	        return { errors: {} };
	    },
	    handleCreate: function handleCreate(index) {
	        var model = {
	            name: this.refs.name.getDOMNode().value.trim(),
	            price: this.refs.price.getDOMNode().value.trim()
	        };

	        ListActions.createItem(model, index, (function (errors) {
	            this.setState({ errors: errors });
	        }).bind(this));
	    },
	    handleCancel: function handleCancel(index) {
	        ListActions.removeItem(index);
	    },
	    handleFocus: function handleFocus(type) {
	        delete this.state.errors[type];
	        this.forceUpdate();
	    },
	    render: function render() {
	        var index = this.props.index;

	        var nameErr = this.state.errors.name;
	        var priceErr = this.state.errors.price;

	        return _react2['default'].createElement(
	            'tr',
	            { className: 'active' },
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    nameErr ? _react2['default'].createElement(Tip, { content: nameErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'name'),
	                        ref: 'name' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    priceErr ? _react2['default'].createElement(Tip, { content: priceErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '10',
	                        onFocus: this.handleFocus.bind(this, 'price'),
	                        ref: 'price' })
	                )
	            ),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary',
	                            onClick: this.handleCreate.bind(this, index) },
	                        '新增'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default',
	                            onClick: this.handleCancel.bind(this, index) },
	                        '取消'
	                    )
	                )
	            )
	        );
	    }
	});

	var ItemEdit = _react2['default'].createClass({
	    displayName: 'ItemEdit',

	    getInitialState: function getInitialState() {
	        return { errors: {} };
	    },
	    handleSave: function handleSave(id, index) {
	        var model = {
	            name: this.refs.name.getDOMNode().value.trim(),
	            price: this.refs.price.getDOMNode().value.trim()
	        };

	        ListActions.updateItem(id, model, index, (function (errors) {
	            errors ? this.setState({ errors: errors }) : this.props.toggleEdit(false);
	        }).bind(this));
	    },
	    handleCancel: function handleCancel() {
	        this.props.toggleEdit(false);
	    },
	    handleFocus: function handleFocus(type) {
	        delete this.state.errors[type];
	        this.forceUpdate();
	    },
	    render: function render() {
	        var food = this.props.data;
	        var index = this.props.index;

	        var nameErr = this.state.errors.name;
	        var priceErr = this.state.errors.price;

	        return _react2['default'].createElement(
	            'tr',
	            { className: 'active' },
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    nameErr ? _react2['default'].createElement(Tip, { content: nameErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        defaultValue: food.name,
	                        onFocus: this.handleFocus.bind(this, 'name'),
	                        ref: 'name' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    priceErr ? _react2['default'].createElement(Tip, { content: priceErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        defaultValue: food.price,
	                        onFocus: this.handleFocus.bind(this, 'price'),
	                        ref: 'price' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.store.name
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(food.addTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.creater.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(food.updateTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                food.updater.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-info',
	                            onClick: this.handleSave.bind(this, food._id, index) },
	                        '保存'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default',
	                            onClick: this.handleCancel },
	                        '取消'
	                    )
	                )
	            )
	        );
	    }
	});

	exports['default'] = ManageFood;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reflux = __webpack_require__(18);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var _componentUi = __webpack_require__(8);

	var _componentUi2 = _interopRequireDefault(_componentUi);

	var ManageUser = _react2['default'].createClass({
	    displayName: 'ManageUser',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'user-container' },
	            _react2['default'].createElement(New, null),
	            _react2['default'].createElement(List, null)
	        );
	    }
	});

	var ListActions = _reflux2['default'].createActions(['getAll', 'addItem', 'removeItem', 'createItem', 'updateItem', 'deleteItem', 'toggleManage']);

	var ListStore = _reflux2['default'].createStore({
	    items: [],
	    listenables: ListActions,
	    onAddItem: function onAddItem() {
	        if (this.items.length === 0 || this.items[0]._id) {
	            this.items.unshift({
	                realname: '',
	                dept: '',
	                duty: '',
	                email: '',
	                telephone: '',
	                mobile: ''
	            });
	            this.trigger(this.items);
	        }
	    },
	    onRemoveItem: function onRemoveItem(index) {
	        this.items.splice(index, 1);
	        this.trigger(this.items);
	    },
	    onGetAll: function onGetAll() {
	        _jquery2['default'].get('vo/manage/user/list', (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items = response.data;
	                this.trigger(this.items);
	            }
	        }).bind(this));
	    },
	    onCreateItem: function onCreateItem(item, index, callback) {
	        _jquery2['default'].post('/vo/manage/user/new', item, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items[index] = response.data;
	                this.trigger(this.items);
	            } else {
	                callback(response.errors);
	            }
	        }).bind(this));
	    },
	    onUpdateItem: function onUpdateItem(id, item, index, callback) {
	        _jquery2['default'].post('/vo/manage/user/update', _.extend(item, { id: id }), (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items[index] = response.data;
	                this.trigger(this.items);
	                callback();
	            } else {
	                callback(response.errors);
	            }
	        }).bind(this));
	    },
	    onDeleteItem: function onDeleteItem(id, index, callback) {
	        _jquery2['default'].post('/vo/manage/user/delete', { id: id }, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items.splice(index, 1);
	                this.trigger(this.items);
	                callback();
	            }
	        }).bind(this));
	    },
	    onToggleManage: function onToggleManage(id, index, manage) {
	        _jquery2['default'].post('/vo/manage/user/manage', { id: id, manage: manage }, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.items[index].manage = !!manage;
	                this.trigger(this.items);
	            }
	        }).bind(this));
	    }
	});

	var New = _react2['default'].createClass({
	    displayName: 'New',

	    handleClick: function handleClick() {
	        ListActions.addItem();
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'page-header' },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                '通讯录',
	                _auth2['default'].getUser().manage ? _react2['default'].createElement(
	                    'button',
	                    { className: 'btn btn-primary pull-right', onClick: this.handleClick },
	                    '新增用户'
	                ) : ''
	            )
	        );
	    }
	});

	var List = _react2['default'].createClass({
	    displayName: 'List',

	    mixins: [_reflux2['default'].connect(ListStore, 'list')],
	    getInitialState: function getInitialState() {
	        return { list: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        ListActions.getAll();
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'table',
	            { className: 'table table-hover manage-table' },
	            _react2['default'].createElement('col', { width: '4%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '8%' }),
	            _react2['default'].createElement('col', { width: '15%' }),
	            _react2['default'].createElement('col', { width: '10%' }),
	            _react2['default'].createElement('col', { width: '10%' }),
	            _react2['default'].createElement('col', { width: '6%' }),
	            _react2['default'].createElement('col', { width: '7%' }),
	            _react2['default'].createElement('col', { width: '6%' }),
	            _react2['default'].createElement('col', { width: '7%' }),
	            _react2['default'].createElement('col', { width: '20%' }),
	            _react2['default'].createElement(
	                'thead',
	                null,
	                _react2['default'].createElement(
	                    'tr',
	                    null,
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '序号'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '姓名'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '部门'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '职位'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '邮箱'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '电话'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '手机'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '添加时间'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '添加人'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '更新时间'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '更新人'
	                    ),
	                    _react2['default'].createElement(
	                        'th',
	                        null,
	                        '操作'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'tbody',
	                null,
	                this.state.list.map(function (item, index) {
	                    return _react2['default'].createElement(Item, { data: item, key: index, index: index });
	                })
	            )
	        );
	    }
	});

	var Item = _react2['default'].createClass({
	    displayName: 'Item',

	    getInitialState: function getInitialState() {
	        return { isEdit: false };
	    },
	    toggleEdit: function toggleEdit(flag) {
	        this.setState({ isEdit: flag });
	    },
	    render: function render() {
	        var user = this.props.data;
	        var index = this.props.index;
	        var render;

	        if (user._id) {
	            if (this.state.isEdit) {
	                render = _react2['default'].createElement(ItemEdit, { index: index, data: user, toggleEdit: this.toggleEdit });
	            } else {
	                render = _react2['default'].createElement(ItemShow, { index: index, data: user, toggleEdit: this.toggleEdit });
	            }
	        } else {
	            render = _react2['default'].createElement(ItemNew, { data: user, index: index });
	        }

	        return render;
	    }
	});

	var Tip = _react2['default'].createClass({
	    displayName: 'Tip',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'tooltip top' },
	            _react2['default'].createElement('div', { className: 'tooltip-arrow' }),
	            _react2['default'].createElement(
	                'div',
	                { className: 'tooltip-inner' },
	                this.props.content
	            )
	        );
	    }
	});

	var ItemShow = _react2['default'].createClass({
	    displayName: 'ItemShow',

	    handleEdit: function handleEdit() {
	        this.props.toggleEdit(true);
	    },
	    handleDelete: function handleDelete(id, index) {
	        _componentUi2['default'].alert({
	            title: '确定删除该用户？',
	            onCertain: function onCertain(close) {
	                ListActions.deleteItem(id, index, function () {
	                    close();
	                });
	            }
	        });
	    },
	    handleManage: function handleManage(id, index, manage) {
	        ListActions.toggleManage(id, index, manage);
	    },
	    render: function render() {
	        var user = this.props.data;
	        var index = this.props.index;

	        return _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	                'td',
	                null,
	                index + 1
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.dept
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.duty
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.email
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.telephone
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.mobile
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(user.createTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.creater ? user.creater.realname : user.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(user.updateTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.updater ? user.updater.realname : user.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                !_auth2['default'].getUser().manage || _auth2['default'].getUser()._id === user._id ? '没有权限' : _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary',
	                            onClick: this.handleEdit },
	                        '修改'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-danger',
	                            onClick: this.handleDelete.bind(this, user._id, index) },
	                        '删除'
	                    ),
	                    user.manage ? _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-warning',
	                            onClick: this.handleManage.bind(this, user._id, index, false) },
	                        '取消管理'
	                    ) : _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-info',
	                            onClick: this.handleManage.bind(this, user._id, index, true) },
	                        '设为管理'
	                    )
	                )
	            )
	        );
	    }
	});

	var ItemNew = _react2['default'].createClass({
	    displayName: 'ItemNew',

	    getInitialState: function getInitialState() {
	        return { errors: {} };
	    },
	    handleCreate: function handleCreate(index) {
	        var model = {
	            realname: this.refs.realname.getDOMNode().value.trim(),
	            dept: this.refs.dept.getDOMNode().value.trim(),
	            duty: this.refs.duty.getDOMNode().value.trim(),
	            email: this.refs.email.getDOMNode().value.trim(),
	            telephone: this.refs.telephone.getDOMNode().value.trim(),
	            mobile: this.refs.mobile.getDOMNode().value.trim()
	        };

	        ListActions.createItem(model, index, (function (errors) {
	            this.setState({ errors: errors });
	        }).bind(this));
	    },
	    handleCancel: function handleCancel(index) {
	        ListActions.removeItem(index);
	    },
	    handleFocus: function handleFocus(type) {
	        delete this.state.errors[type];
	        this.forceUpdate();
	    },
	    render: function render() {
	        var index = this.props.index;

	        var realnameErr = this.state.errors.realname;
	        var deptErr = this.state.errors.dept;
	        var dutyErr = this.state.errors.duty;
	        var emailErr = this.state.errors.email;
	        var telephoneErr = this.state.errors.telephone;
	        var mobileErr = this.state.errors.mobile;

	        return _react2['default'].createElement(
	            'tr',
	            { className: 'active' },
	            _react2['default'].createElement(
	                'td',
	                null,
	                index + 1
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    realnameErr ? _react2['default'].createElement(Tip, { content: realnameErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '10',
	                        onFocus: this.handleFocus.bind(this, 'realname'),
	                        ref: 'realname' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    deptErr ? _react2['default'].createElement(Tip, { content: deptErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'dept'),
	                        ref: 'dept' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    dutyErr ? _react2['default'].createElement(Tip, { content: dutyErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'duty'),
	                        ref: 'duty' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    emailErr ? _react2['default'].createElement(Tip, { content: emailErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'email'),
	                        ref: 'email' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    telephoneErr ? _react2['default'].createElement(Tip, { content: telephoneErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'telephone'),
	                        ref: 'telephone' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    mobileErr ? _react2['default'].createElement(Tip, { content: mobileErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '11',
	                        onFocus: this.handleFocus.bind(this, 'mobile'),
	                        ref: 'mobile' })
	                )
	            ),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement('td', null),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary',
	                            onClick: this.handleCreate.bind(this, index) },
	                        '新增'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default',
	                            onClick: this.handleCancel.bind(this, index) },
	                        '取消'
	                    )
	                )
	            )
	        );
	    }
	});

	var ItemEdit = _react2['default'].createClass({
	    displayName: 'ItemEdit',

	    getInitialState: function getInitialState() {
	        return { errors: {} };
	    },
	    handleSave: function handleSave(id, index) {
	        var model = {
	            password: this.props.data.password,
	            realname: this.refs.realname.getDOMNode().value.trim(),
	            dept: this.refs.dept.getDOMNode().value.trim(),
	            duty: this.refs.duty.getDOMNode().value.trim(),
	            email: this.refs.email.getDOMNode().value.trim(),
	            telephone: this.refs.telephone.getDOMNode().value.trim(),
	            mobile: this.refs.mobile.getDOMNode().value.trim()
	        };

	        ListActions.updateItem(id, model, index, (function (errors) {
	            errors ? this.setState({ errors: errors }) : this.props.toggleEdit(false);
	        }).bind(this));
	    },
	    handleCancel: function handleCancel() {
	        this.props.toggleEdit(false);
	    },
	    handleFocus: function handleFocus(type) {
	        delete this.state.errors[type];
	        this.forceUpdate();
	    },
	    render: function render() {
	        var user = this.props.data;
	        var index = this.props.index;

	        var realnameErr = this.state.errors.realname;
	        var deptErr = this.state.errors.dept;
	        var dutyErr = this.state.errors.duty;
	        var emailErr = this.state.errors.email;
	        var telephoneErr = this.state.errors.telephone;
	        var mobileErr = this.state.errors.mobile;

	        return _react2['default'].createElement(
	            'tr',
	            { className: 'active' },
	            _react2['default'].createElement(
	                'td',
	                null,
	                index + 1
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    realnameErr ? _react2['default'].createElement(Tip, { content: realnameErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '10',
	                        onFocus: this.handleFocus.bind(this, 'realname'),
	                        defaultValue: user.realname,
	                        ref: 'realname' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    deptErr ? _react2['default'].createElement(Tip, { content: deptErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'dept'),
	                        defaultValue: user.dept,
	                        ref: 'dept' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    dutyErr ? _react2['default'].createElement(Tip, { content: dutyErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'duty'),
	                        defaultValue: user.duty,
	                        ref: 'duty' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    emailErr ? _react2['default'].createElement(Tip, { content: emailErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'email'),
	                        defaultValue: user.email,
	                        ref: 'email' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    telephoneErr ? _react2['default'].createElement(Tip, { content: telephoneErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '20',
	                        onFocus: this.handleFocus.bind(this, 'telephone'),
	                        defaultValue: user.telephone,
	                        ref: 'telephone' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tip-hd' },
	                    mobileErr ? _react2['default'].createElement(Tip, { content: mobileErr }) : '',
	                    _react2['default'].createElement('input', {
	                        type: 'text',
	                        className: 'form-control input-sm',
	                        maxLength: '11',
	                        onFocus: this.handleFocus.bind(this, 'mobile'),
	                        defaultValue: user.mobile,
	                        ref: 'mobile' })
	                )
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(user.createTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.creater ? user.creater.realname : user.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(user.updateTime).format('YYYY-MM-DD')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                user.updater ? user.updater.realname : user.realname
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'btn-group btn-group-xs' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-info',
	                            onClick: this.handleSave.bind(this, user._id, index) },
	                        '保存'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default',
	                            onClick: this.handleCancel },
	                        '取消'
	                    )
	                )
	            )
	        );
	    }
	});

	exports['default'] = ManageUser;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var RouteHandler = _reactRouter2['default'].RouteHandler;

	var Vo = _react2['default'].createClass({
	    displayName: 'Vo',

	    statics: {
	        willTransitionTo: _auth2['default'].handle
	    },
	    render: function render() {
	        return _react2['default'].createElement(RouteHandler, null);
	    }
	});

	exports['default'] = Vo;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var _componentUi = __webpack_require__(8);

	var _componentUi2 = _interopRequireDefault(_componentUi);

	var Link = _reactRouter2['default'].Link;

	var VoMyOrder = _react2['default'].createClass({
	    displayName: 'VoMyOrder',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(Nav, null),
	            _react2['default'].createElement(List, null)
	        );
	    }
	});

	var Nav = _react2['default'].createClass({
	    displayName: 'Nav',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'col-lg-3 left-nav' },
	            _react2['default'].createElement(
	                'ul',
	                { className: 'nav nav-pills nav-stacked' },
	                _react2['default'].createElement(
	                    'li',
	                    { className: 'active' },
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'my-order' },
	                        '当前订单'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'history-order' },
	                        '历史订单'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'message' },
	                        '用户信息'
	                    )
	                )
	            )
	        );
	    }
	});

	var List = _react2['default'].createClass({
	    displayName: 'List',

	    getInitialState: function getInitialState() {
	        return { list: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        _jquery2['default'].get('/vo/order/current', (function (response) {
	            this.setState({ list: response.data });
	        }).bind(this));
	    },
	    handleDelete: function handleDelete(id, index) {
	        _jquery2['default'].post('/vo/order/delete', { id: id }, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.state.list.splice(index, 1);
	                this.forceUpdate();
	                _componentUi2['default'].tip({
	                    content: '取消成功'
	                });
	            }
	        }).bind(this));
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'col-lg-9' },
	            this.state.list.length > 0 ? _react2['default'].createElement(
	                'table',
	                { className: 'table table-hover manage-table' },
	                _react2['default'].createElement('col', { width: '25%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement('col', { width: '25%' }),
	                _react2['default'].createElement('col', { width: '20%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement(
	                    'thead',
	                    null,
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '套餐'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '价格'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '份数'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '店铺'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '时间'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '操作'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'tbody',
	                    null,
	                    this.state.list.map((function (item, index) {
	                        return _react2['default'].createElement(Item, { data: item, key: index, handleDelete: this.handleDelete });
	                    }).bind(this))
	                )
	            ) : _react2['default'].createElement(
	                'h4',
	                { className: 'text-center' },
	                '暂无订单，马上',
	                _react2['default'].createElement(
	                    Link,
	                    { to: 'store' },
	                    '点餐'
	                )
	            )
	        );
	    }
	});

	var Item = _react2['default'].createClass({
	    displayName: 'Item',

	    handleCancel: function handleCancel() {
	        this.props.handleDelete(this.props.data._id, this.props.index);
	    },
	    render: function render() {
	        var order = this.props.data;

	        return _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.food.name
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.food.price
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.count
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.store.name
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(order.addTime).format('YYYY-MM-DD HH:mm')
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                _react2['default'].createElement(
	                    'button',
	                    { type: 'button', className: 'btn btn-primary btn-xs', onClick: this.handleCancel },
	                    '取消'
	                )
	            )
	        );
	    }
	});

	exports['default'] = VoMyOrder;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var Link = _reactRouter2['default'].Link;

	var VoHisOrder = _react2['default'].createClass({
	    displayName: 'VoHisOrder',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(Nav, null),
	            _react2['default'].createElement(List, null)
	        );
	    }
	});

	var Nav = _react2['default'].createClass({
	    displayName: 'Nav',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'col-lg-3 left-nav' },
	            _react2['default'].createElement(
	                'ul',
	                { className: 'nav nav-pills nav-stacked' },
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'my-order' },
	                        '当前订单'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'li',
	                    { className: 'active' },
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'history-order' },
	                        '历史订单'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'message' },
	                        '用户信息'
	                    )
	                )
	            )
	        );
	    }
	});

	var List = _react2['default'].createClass({
	    displayName: 'List',

	    getInitialState: function getInitialState() {
	        return { list: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        _jquery2['default'].get('/vo/order/history', (function (response) {
	            this.setState({ list: response.data });
	        }).bind(this));
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'col-lg-9' },
	            this.state.list.length > 0 ? _react2['default'].createElement(
	                'table',
	                { className: 'table table-hover manage-table' },
	                _react2['default'].createElement('col', { width: '25%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement('col', { width: '10%' }),
	                _react2['default'].createElement('col', { width: '25%' }),
	                _react2['default'].createElement('col', { width: '20%' }),
	                _react2['default'].createElement(
	                    'thead',
	                    null,
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '套餐'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '价格'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '份数'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '店铺'
	                        ),
	                        _react2['default'].createElement(
	                            'th',
	                            null,
	                            '时间'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'tbody',
	                    null,
	                    this.state.list.map((function (item, index) {
	                        return _react2['default'].createElement(Item, { data: item, key: index, handleDelete: this.handleDelete });
	                    }).bind(this))
	                )
	            ) : _react2['default'].createElement(
	                'h4',
	                { className: 'text-center' },
	                '暂无订单，马上',
	                _react2['default'].createElement(
	                    Link,
	                    { to: 'store' },
	                    '点餐'
	                )
	            )
	        );
	    }
	});

	var Item = _react2['default'].createClass({
	    displayName: 'Item',

	    render: function render() {
	        var order = this.props.data;

	        return _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.food ? order.food.name : ''
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.food ? order.food.price : ''
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.count
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                order.store ? order.store.name : ''
	            ),
	            _react2['default'].createElement(
	                'td',
	                null,
	                moment(order.addTime).format('YYYY-MM-DD HH:mm')
	            )
	        );
	    }
	});

	exports['default'] = VoHisOrder;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _componentConstants = __webpack_require__(7);

	var _componentConstants2 = _interopRequireDefault(_componentConstants);

	var Link = _reactRouter2['default'].Link;

	var VoMessage = _react2['default'].createClass({
	    displayName: 'VoMessage',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(Nav, null),
	            _react2['default'].createElement(Box, null)
	        );
	    }
	});

	var Nav = _react2['default'].createClass({
	    displayName: 'Nav',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'col-lg-3 left-nav' },
	            _react2['default'].createElement(
	                'ul',
	                { className: 'nav nav-pills nav-stacked' },
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'my-order' },
	                        '当前订单'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'history-order' },
	                        '历史订单'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'li',
	                    { className: 'active' },
	                    _react2['default'].createElement(
	                        Link,
	                        { to: 'message' },
	                        '用户信息'
	                    )
	                )
	            )
	        );
	    }
	});

	var Box = _react2['default'].createClass({
	    displayName: 'Box',

	    getInitialState: function getInitialState() {
	        return { user: null, isEdit: false };
	    },
	    componentDidMount: function componentDidMount() {
	        _jquery2['default'].get('/vo/message', (function (response) {
	            this.setState({ user: response.data });
	        }).bind(this));
	    },
	    handleEdit: function handleEdit(bool) {
	        this.setState({ isEdit: bool });
	    },
	    handleSave: function handleSave(model, callback) {
	        _jquery2['default'].post('/vo/message', model, (function (response) {
	            if (response.code === _componentConstants2['default'].resCode.COMMON) {
	                this.setState({ user: response.data });
	                callback();
	            } else {
	                callback(response.errors);
	            }
	        }).bind(this));
	    },
	    render: function render() {
	        var user = this.state.user;

	        return _react2['default'].createElement(
	            'div',
	            { className: 'col-lg-6' },
	            !this.state.user ? '' : this.state.isEdit ? _react2['default'].createElement(Edit, { data: user, toggleEdit: this.handleEdit, handleSave: this.handleSave }) : _react2['default'].createElement(Show, { data: user, toggleEdit: this.handleEdit })
	        );
	    }
	});

	var Show = _react2['default'].createClass({
	    displayName: 'Show',

	    render: function render() {
	        var user = this.props.data;

	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'table',
	                { className: 'table table-bordered' },
	                _react2['default'].createElement(
	                    'thead',
	                    null,
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '邮箱'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.email
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '密码'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '*******'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '真实姓名'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.realname
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '部门'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.dept
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '职位'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.duty
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '电话'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.telephone
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '手机'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.mobile
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'row' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-4' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default btn-block',
	                            onClick: this.props.toggleEdit },
	                        '修 改'
	                    )
	                )
	            )
	        );
	    }
	});

	var Edit = _react2['default'].createClass({
	    displayName: 'Edit',

	    getInitialState: function getInitialState() {
	        return { errors: {} };
	    },
	    handleCancel: function handleCancel() {
	        this.props.toggleEdit(false);
	    },
	    handleSave: function handleSave() {
	        var user = this.props.data;

	        var model = {
	            id: user._id,
	            email: user.email,
	            dept: user.dept,
	            duty: user.duty,
	            password: this.refs.password.getDOMNode().value.trim(),
	            realname: this.refs.realname.getDOMNode().value.trim(),
	            telephone: this.refs.telephone.getDOMNode().value.trim(),
	            mobile: this.refs.mobile.getDOMNode().value.trim()
	        };

	        this.props.handleSave(model, (function (errors) {
	            errors ? this.setState({ errors: errors }) : this.props.toggleEdit(false);;
	        }).bind(this));
	    },
	    handleFocus: function handleFocus(type) {
	        delete this.state.errors[type];
	        this.forceUpdate();
	    },
	    render: function render() {
	        var user = this.props.data;

	        var passwordErr = this.state.errors.password;
	        var realnameErr = this.state.errors.realname;
	        var telephoneErr = this.state.errors.telephone;
	        var mobileErr = this.state.errors.mobile;

	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'table',
	                { className: 'table table-bordered' },
	                _react2['default'].createElement(
	                    'thead',
	                    null,
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '邮箱'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.email
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '部门'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.dept
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '职位'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            user.duty
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '密码'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'tip-hd' },
	                                passwordErr ? _react2['default'].createElement(Tip, { content: passwordErr }) : '',
	                                _react2['default'].createElement('input', {
	                                    type: 'password',
	                                    className: 'form-control input-sm',
	                                    defaultValue: user.password,
	                                    ref: 'password',
	                                    onFocus: this.handleFocus.bind(this, 'password'),
	                                    maxLength: '20' })
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '真实姓名'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'tip-hd' },
	                                realnameErr ? _react2['default'].createElement(Tip, { content: realnameErr }) : '',
	                                _react2['default'].createElement('input', {
	                                    type: 'text',
	                                    className: 'form-control input-sm',
	                                    defaultValue: user.realname,
	                                    ref: 'realname',
	                                    onFocus: this.handleFocus.bind(this, 'realname'),
	                                    maxLength: '10' })
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '电话'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'tip-hd' },
	                                telephoneErr ? _react2['default'].createElement(Tip, { content: telephoneErr }) : '',
	                                _react2['default'].createElement('input', {
	                                    type: 'text',
	                                    className: 'form-control input-sm',
	                                    defaultValue: user.telephone,
	                                    ref: 'telephone',
	                                    onFocus: this.handleFocus.bind(this, 'telephone'),
	                                    maxLength: '20' })
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'tr',
	                        null,
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            '手机'
	                        ),
	                        _react2['default'].createElement(
	                            'td',
	                            null,
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'tip-hd' },
	                                mobileErr ? _react2['default'].createElement(Tip, { content: mobileErr }) : '',
	                                _react2['default'].createElement('input', {
	                                    type: 'text',
	                                    className: 'form-control input-sm',
	                                    defaultValue: user.mobile,
	                                    ref: 'mobile',
	                                    onFocus: this.handleFocus.bind(this, 'mobile'),
	                                    maxLength: '11' })
	                            )
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'row' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary btn-block',
	                            onClick: this.handleSave },
	                        '保 存'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-default btn-block',
	                            onClick: this.handleCancel },
	                        '取 消'
	                    )
	                )
	            )
	        );
	    }
	});

	var Tip = _react2['default'].createClass({
	    displayName: 'Tip',

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'tooltip top' },
	            _react2['default'].createElement('div', { className: 'tooltip-arrow' }),
	            _react2['default'].createElement(
	                'div',
	                { className: 'tooltip-inner' },
	                this.props.content
	            )
	        );
	    }
	});

	exports['default'] = VoMessage;
	module.exports = exports['default'];

/***/ }
/******/ ]);