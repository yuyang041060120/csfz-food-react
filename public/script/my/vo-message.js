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
        return {user: null, isEdit: false};
    },
    componentDidMount: function () {
        $.get('/vo/message', function (response) {
            this.setState({user: response.data});
        }.bind(this));
    },
    handleEdit: function (bool) {
        this.setState({isEdit: bool});
    },
    handleSave: function (model, callback) {
        $.post('/vo/message', model, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.setState({user: response.data});
                callback();
            } else {
                callback(response.errors);
            }
        }.bind(this));
    },
    render: function () {
        var user = this.state.user;

        return (
            <div className="col-lg-6">
                {!this.state.user ? '' : this.state.isEdit ?
                    <VoMessage.Edit data={user} toggleEdit={this.handleEdit} handleSave={this.handleSave}/>
                    :
                    <VoMessage.Show data={user} toggleEdit={this.handleEdit}/>}
            </div>
        )
    }
});

VoMessage.Show = React.createClass({
    render: function () {
        var user = this.props.data;

        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <td>邮箱</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>密码</td>
                        <td>*******</td>
                    </tr>
                    <tr>
                        <td>真实姓名</td>
                        <td>{user.realname}</td>
                    </tr>
                    <tr>
                        <td>部门</td>
                        <td>{user.dept}</td>
                    </tr>
                    <tr>
                        <td>职位</td>
                        <td>{user.duty}</td>
                    </tr>

                    <tr>
                        <td>电话</td>
                        <td>{user.telephone}</td>
                    </tr>
                    <tr>
                        <td>手机</td>
                        <td>{user.mobile}</td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                    <div className="col-lg-4">
                        <button type="button" className="btn btn-default btn-block"
                                onClick={this.props.toggleEdit}>修 改
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});


VoMessage.Edit = React.createClass({
    getInitialState: function () {
        return {errors: {}};
    },
    handleCancel: function () {
        this.props.toggleEdit(false);
    },
    handleSave: function () {
        var user = this.props.data;

        var model = {
            id: user._id,
            email: user.email,
            dept: user.dept,
            duty: user.duty,
            password: this.refs.password.getDOMNode().value.trim(),
            realname: this.refs.realname.getDOMNode().value.trim(),
            telephone: this.refs.telephone.getDOMNode().value.trim(),
            mobile: this.refs.mobile.getDOMNode().value.trim()
        };

        this.props.handleSave(model, function (errors) {
            errors ? this.setState({errors: errors}) : this.props.toggleEdit(false);;
        }.bind(this));
    },
    handleFocus: function (type) {
        delete this.state.errors[type];
        this.forceUpdate();
    },
    render: function () {
        var user = this.props.data;

        var passwordErr = this.state.errors.password;
        var realnameErr = this.state.errors.realname;
        var telephoneErr = this.state.errors.telephone;
        var mobileErr = this.state.errors.mobile;

        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <td>邮箱</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>部门</td>
                        <td>{user.dept}</td>
                    </tr>
                    <tr>
                        <td>职位</td>
                        <td>{user.duty}</td>
                    </tr>
                    <tr>
                        <td>密码</td>
                        <td>
                            <div className="tip-hd">
                                {passwordErr ? <VoMessage.Tip content={passwordErr}/> : ''}
                                <input
                                    type="password"
                                    className="form-control input-sm"
                                    defaultValue={user.password}
                                    ref="password"
                                    onFocus={this.handleFocus.bind(this,'password')}
                                    maxLength="20"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>真实姓名</td>
                        <td>
                            <div className="tip-hd">
                                {realnameErr ? <VoMessage.Tip content={realnameErr}/> : ''}
                                <input
                                    type="text"
                                    className="form-control input-sm"
                                    defaultValue={user.realname}
                                    ref="realname"
                                    onFocus={this.handleFocus.bind(this,'realname')}
                                    maxLength="10"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>电话</td>
                        <td>
                            <div className="tip-hd">
                                {telephoneErr ? <VoMessage.Tip content={telephoneErr}/> : ''}
                                <input
                                    type="text"
                                    className="form-control input-sm"
                                    defaultValue={user.telephone}
                                    ref="telephone"
                                    onFocus={this.handleFocus.bind(this,'telephone')}
                                    maxLength="20"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>手机</td>
                        <td>
                            <div className="tip-hd">
                                {mobileErr ? <VoMessage.Tip content={mobileErr}/> : ''}
                                <input
                                    type="text"
                                    className="form-control input-sm"
                                    defaultValue={user.mobile}
                                    ref="mobile"
                                    onFocus={this.handleFocus.bind(this,'mobile')}
                                    maxLength="11"/>
                            </div>
                        </td>
                    </tr>
                    </thead>
                </table>
                <div className="row">
                    <div className="col-lg-3">
                        <button type="button" className="btn btn-primary btn-block"
                                onClick={this.handleSave}>保 存
                        </button>
                    </div>
                    <div className="col-lg-3">
                        <button type="button" className="btn btn-default btn-block"
                                onClick={this.handleCancel}>取 消
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});

VoMessage.Input = React.createClass({
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
                    {this.props.value ?
                        <input name={this.props.name} className="form-control" type={this.props.type}
                               onChange={this.handleChange} defaultValue={this.props.value}/>
                        : ''}
                    <p className="form-error">{errorMsg}</p>
                </div>
            </div>
        )
    }
});

VoMessage.Tip = React.createClass({
    render: function () {
        return (
            <div className="tooltip top">
                <div className="tooltip-arrow"></div>
                <div className="tooltip-inner">
                    {this.props.content}
                </div>
            </div>
        )
    }
});