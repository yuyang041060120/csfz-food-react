var RouteHandler = ReactRouter.RouteHandler;

var Manage = React.createClass({
    statics: {
        willTransitionTo: auth.handle
    },
    render: function () {
        return <RouteHandler />
    }
});