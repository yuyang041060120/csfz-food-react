import React  from '../lib/react';
import Router from '../lib/ReactRouter';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="inbox">Inbox</Link></li>
                        <li><Link to="calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>

                {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
});