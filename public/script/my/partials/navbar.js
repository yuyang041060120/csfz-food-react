var Link = ReactRouter.Link;

var Navbar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="index">React Router</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="index">Index</Link></li>
                            <li><Link to="store">Store</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="login">Login</Link></li>
                            <li><a href="{{url 'logout'}}">ÍË³ö</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});