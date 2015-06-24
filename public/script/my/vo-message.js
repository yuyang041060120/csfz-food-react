var VoMessage = React.createClass({
    render: function () {
        return (
            <div className="container">
                <VoMessage.Nav/>
                <VoMessage.Box/>
            </div>
        )
    }
});

VoMessage.Nav = React.createClass({
    render: function () {
        return (
            <div className="col-lg-3 left-nav">
                <ul className="nav nav-pills nav-stacked">
                    <li><Link to="my-order">当前订单</Link></li>
                    <li><Link to="history-order">历史订单</Link></li>
                    <li className="active"><Link to="message">用户信息</Link></li>
                </ul>
            </div>
        )
    }
});

VoMessage.Box = React.createClass({
    getInitialState: function () {
        return {user: {}};
    },
    componentDidMount: function () {
        $.get('/vo/message', function (response) {
            this.setState({user: response.data});
        }.bind(this));
    },
    render: function () {
        var user = this.state.user;
        return (
            <div className="col-lg-6">
                <Validator.Form className="form-horizontal">
                    <VoMessage.Input name="realname" type="text" key="realname" label="真实姓名" value={user.realname}/>
                    <VoMessage.Input name="email" type="text" key="email" label="邮箱" value={user.email}/>

                    <div className="form-group">
                        <div className="col-lg-10 col-lg-offset-2">
                            <button type="submit" className="btn btn-primary btn-block">保 存</button>
                        </div>
                    </div>
                </Validator.Form>
            </div>
        )
    }
});

VoMessage.Input = React.createClass({
    mixins: [Validator.Mixin],
    handleChange: function (e) {
        this.setValue(e.currentTarget.value);
    },
    render: function () {
        var errorMsg = this.isValid() ? '' : this.getErrorMsg();
        var classes = cx({
            'form-group': true,
            'has-error': this.isInvalid()
        });
        return (
            <div className={classes}>
                <label className="col-lg-2 control-label">{this.props.label}</label>

                <div className="col-sm-10">
                    <input name={this.props.name} className="form-control" type={this.props.type}
                           onChange={this.handleChange} defaultValue={this.props.value}/>

                    <p className="form-error">{errorMsg}</p>
                </div>
            </div>
        )
    }
});