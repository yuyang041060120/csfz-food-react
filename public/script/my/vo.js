import React  from 'react';
import Router from 'react-router';
import $      from 'jquery';
import auth   from './auth';

var RouteHandler = Router.RouteHandler;

var Vo = React.createClass({
    statics: {
        willTransitionTo: auth.handle
    },
    render: function () {
        return <RouteHandler />
    }
});


export default Vo;