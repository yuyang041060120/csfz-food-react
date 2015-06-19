var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;


var App = React.createClass({
    componentDidMount: function () {

    },
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
        <Route name="sign-up" path="signup" handler={SignUp}/>
        <Route name="sign-out" path="signout" handler={SignOut}/>
        <Route name="manage" path="manage" handler={Manage}>
            <Route name="manage-store" path="store" handler={ManageStore}/>
        </Route>
    </Route>
);


ReactRouter.run(routes, ReactRouter.HashLocation, function (Root) {
    React.render(<Root/>, document.body);
});