import React       from 'react';
import Router      from 'react-router';
import Index       from './index';
import Navbar      from './partials/navbar';
import Store       from './store';
import StoreDetail from './store-detail';
import SignIn      from './sign-in';
import SignOut     from './sign-out';
import Manage      from './manage';
import ManageStore from './manage-store';
import ManageFood  from './manage-food';
import ManageUser  from './manage-user';

import Vo          from './vo.js';
import VoMyOrder   from './vo-myorder';
import VoHisOrder  from './vo-hisorder';
import VoMessage   from './vo-message';

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;


var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navbar />
                <RouteHandler />
            </div>

        )
    }
});

var routes = (
    <Route handler={App}>
        <DefaultRoute name="index" handler={Index}/>
        <Route name="store" path="store" handler={Store}/>
        <Route name="store-detail" path="store/:storeId" handler={StoreDetail}/>
        <Route name="sign-in" path="signin" handler={SignIn}/>
        <Route name="sign-out" path="signout" handler={SignOut}/>
        <Route name="manage" path="manage" handler={Manage}>
            <Route name="manage-store" path="store" handler={ManageStore}/>
            <Route name="manage-food" path=":storeId/food" handler={ManageFood}/>
            <Route name="user" path="user" handler={ManageUser}/>
        </Route>
        <Route name="vo" path="vo" handler={Vo}>
            <Route name="my-order" path="myorder" handler={VoMyOrder}/>
            <Route name="history-order" path="hisorder" handler={VoHisOrder}/>
            <Route name="message" path="message" handler={VoMessage}/>
        </Route>
    </Route>
);


Router.run(routes, Router.HashLocation, function (Root) {
    React.render(<Root/>, document.body);
});