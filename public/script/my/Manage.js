import React  from 'react';
import Router from 'react-router';
import auth   from './auth';

var RouteHandler = Router.RouteHandler;

var Manage = React.createClass({
    statics: {
        willTransitionTo: auth.handle
    },
    render: function () {
        return <RouteHandler />
    }
});

export default Manage;