var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Redirect = ReactRouter.Redirect;
var Link = ReactRouter.Link;


var Navbar = React.createClass({
    render: function () {
        return (
            <h1>Navbar</h1>
        )
    }
});


var Index = React.createClass({
    render: function () {
        return (
            <h1>Index</h1>
        )
    }
});

var Basic = React.createClass({
    render: function () {
        return (
            <h1>Basic</h1>
        )
    }
});

var Message = React.createClass({
    render: function () {
        return (
            <div>
                {
                    [1, 2, 3].map(function (item) {
                        return <div><Link key={item} to="message-detail" params={{id:item}}>{item}</Link></div>
                    })
                }
            </div>
        )
    }
});

var MessageDetail = React.createClass({
    render: function () {
        return (
            <h1>New Message {this.props.params.id}</h1>
        )
    }
});

var Default = React.createClass({
    render: function () {
        return (
            <h1>DefaultRoute</h1>
        )
    }
});

var NotFound = React.createClass({
    render: function () {
        return (
            <h1>NotFoundRoute</h1>
        )
    }
});

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
    <Route paht="/" handler={App}>
        <Route path="index" handler={Index}>
            <Route path="basic" handler={Basic}/>
        </Route>
    </Route>
);


ReactRouter.run(routes, ReactRouter.HashLocation, function (Root) {
    React.render(<Root/>, document.body);
});

