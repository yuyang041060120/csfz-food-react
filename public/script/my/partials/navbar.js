var Link = ReactRouter.Link;

var Navbar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="index">内部订餐系统</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="index">首页</Link></li>
                            <li><Link to="store">点餐</Link></li>
                            <li><Link to="manage-store">管理</Link></li>
                            <li><Link to="user">通讯录</Link></li>
                        </ul>
                        {auth.isLogin() ?
                            <ul className="nav navbar-nav navbar-right">
                                <li><a>{auth.getUser().realname}</a></li>
                                <li><Link to="sign-out">退出</Link></li>
                            </ul> :
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="sign-in">登录</Link></li>
                            </ul>
                        }

                    </div>
                </div>
            </nav>
        )
    }
});