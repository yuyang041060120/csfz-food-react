var ManageUser = React.createClass({
    render: function () {
        return (
            <div className="user-container">
                <ManageUser.New />
                <ManageUser.List />
            </div>
        )
    }
});


var UserListActions = Reflux.createActions([
    'getAll',
    'addItem',
    'removeItem',
    'createItem',
    'updateItem',
    'deleteItem',
    'toggleManage'
]);

var UserListStore = Reflux.createStore({
    items: [],
    listenables: UserListActions,
    onAddItem(){
        if (this.items.length === 0 || this.items[0]._id) {
            this.items.unshift({
                realname: '',
                dept: '',
                duty: '',
                email: '',
                telephone: '',
                mobile: ''
            });
            this.trigger(this.items);
        }
    },
    onRemoveItem(index){
        this.items.splice(index, 1);
        this.trigger(this.items);
    },
    onGetAll(){
        $.get('vo/manage/user/list', function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items = response.data;
                this.trigger(this.items);
            }
        }.bind(this));
    },
    onCreateItem(item, index, callback){
        $.post('/vo/manage/user/new', item, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index] = response.data;
                this.trigger(this.items);
            } else {
                callback(response.errors);
            }
        }.bind(this));
    },
    onUpdateItem(id, item, index, callback){
        $.post('/vo/manage/user/update', _.extend(item, {id: id}), function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index] = response.data;
                this.trigger(this.items);
                callback();
            } else {
                callback(response.errors);
            }
        }.bind(this));
    },
    onDeleteItem(id, index, callback){
        $.post('/vo/manage/user/delete', {id: id}, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items.splice(index, 1);
                this.trigger(this.items);
                callback();
            }
        }.bind(this));
    },
    onToggleManage: function (id, index, manage) {
        $.post('/vo/manage/user/manage', {id: id, manage: manage}, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index].manage = !!manage;
                this.trigger(this.items);
            }
        }.bind(this));
    }
});

ManageUser.New = React.createClass({
    handleClick: function () {
        UserListActions.addItem();
    },
    render: function () {
        return (
            <div className="page-header">
                <h3>通讯录
                    {auth.getUser().manage ?
                        <button className="btn btn-primary pull-right" onClick={this.handleClick}>
                            新增用户
                        </button> : ''}
                </h3>
            </div>
        )
    }
});

ManageUser.List = React.createClass({
    mixins: [Reflux.connect(UserListStore, 'list')],
    getInitialState: function () {
        return {list: []};
    },
    componentDidMount: function () {
        UserListActions.getAll();
    },
    render: function () {
        return (
            <table className="table table-hover manage-table">
                <col width="4%"/>
                <col width="8%"/>
                <col width="8%"/>
                <col width="8%"/>
                <col width="15%"/>
                <col width="10%"/>
                <col width="10%"/>
                <col width="6%"/>
                <col width="7%"/>
                <col width="6%"/>
                <col width="7%"/>
                <col width="20%"/>

                <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>部门</th>
                    <th>职位</th>
                    <th>邮箱</th>
                    <th>电话</th>
                    <th>手机</th>
                    <th>添加时间</th>
                    <th>添加人</th>
                    <th>更新时间</th>
                    <th>更新人</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {this.state.list.map(function (item, index) {
                    return <ManageUser.Item data={item} key={index} index={index}/>
                })}
                </tbody>
            </table>
        )
    }
});


ManageUser.Item = React.createClass({
    getInitialState: function () {
        return {isEdit: false};
    },
    toggleEdit: function (flag) {
        this.setState({isEdit: flag});
    },
    render: function () {
        var user = this.props.data;
        var index = this.props.index;
        var render;

        if (user._id) {
            if (this.state.isEdit) {
                render = <ManageUser.ItemEdit index={index} data={user} toggleEdit={this.toggleEdit}/>;
            } else {
                render = <ManageUser.ItemShow index={index} data={user} toggleEdit={this.toggleEdit}/>;
            }
        } else {
            render = <ManageUser.ItemNew data={user} index={index}/>;
        }

        return render;
    }
});


ManageUser.Tip = React.createClass({
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

ManageUser.ItemShow = React.createClass({
    handleEdit: function () {
        this.props.toggleEdit(true);
    },
    handleDelete: function (id, index) {
        Alert.show({
            title: '确定删除该用户？',
            onCertain: function () {
                UserListActions.deleteItem(id, index, function () {
                    Alert.close();
                });
            }
        });

    },
    handleManage: function (id, index, manage) {
        UserListActions.toggleManage(id, index, manage);
    },
    render: function () {
        var user = this.props.data;
        var index = this.props.index;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.realname}</td>
                <td>{user.dept}</td>
                <td>{user.duty}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>{user.mobile}</td>
                <td>{moment(user.createTime).format('YYYY-MM-DD')}</td>
                <td>{user.creater ? user.creater.realname : user.realname}</td>
                <td>{moment(user.updateTime).format('YYYY-MM-DD')}</td>
                <td>{user.updater ? user.updater.realname : user.realname}</td>
                <td>
                    {!auth.getUser().manage || auth.getUser()._id === user._id ? '没有权限' :
                        <div className="btn-group btn-group-xs">
                            <button type="button" className="btn btn-primary"
                                    onClick={this.handleEdit}>修改
                            </button>
                            <button type="button" className="btn btn-danger"
                                    onClick={this.handleDelete.bind(this,user._id,index)}>删除
                            </button>
                            {user.manage ?
                                <button type="button" className="btn btn-warning"
                                        onClick={this.handleManage.bind(this,user._id,index,false)}>取消管理</button> :
                                <button type="button" className="btn btn-info"
                                        onClick={this.handleManage.bind(this,user._id,index,true)}>设为管理</button>
                            }

                        </div>}
                </td>
            </tr>
        )
    }
});

ManageUser.ItemNew = React.createClass({
    getInitialState: function () {
        return {errors: {}};
    },
    handleCreate: function (index) {
        var model = {
            realname: this.refs.realname.getDOMNode().value.trim(),
            dept: this.refs.dept.getDOMNode().value.trim(),
            duty: this.refs.duty.getDOMNode().value.trim(),
            email: this.refs.email.getDOMNode().value.trim(),
            telephone: this.refs.telephone.getDOMNode().value.trim(),
            mobile: this.refs.mobile.getDOMNode().value.trim()
        };

        UserListActions.createItem(model, index, function (errors) {
            this.setState({errors: errors});
        }.bind(this));
    },
    handleCancel: function (index) {
        UserListActions.removeItem(index);
    },
    handleFocus: function (type) {
        delete this.state.errors[type];
        this.forceUpdate();
    },
    render: function () {
        var index = this.props.index;

        var realnameErr = this.state.errors.realname;
        var deptErr = this.state.errors.dept;
        var dutyErr = this.state.errors.duty;
        var emailErr = this.state.errors.email;
        var telephoneErr = this.state.errors.telephone;
        var mobileErr = this.state.errors.mobile;

        return (
            <tr className="active">
                <td>{index + 1}</td>
                <td>
                    <div className="tip-hd">
                        {realnameErr ? <ManageStore.Tip content={realnameErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="10"
                            onFocus={this.handleFocus.bind(this,'realname')}
                            ref="realname"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {deptErr ? <ManageStore.Tip content={deptErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'dept')}
                            ref="dept"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {dutyErr ? <ManageStore.Tip content={dutyErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'duty')}
                            ref="duty"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {emailErr ? <ManageStore.Tip content={emailErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'email')}
                            ref="email"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {telephoneErr ? <ManageStore.Tip content={telephoneErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'telephone')}
                            ref="telephone"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {mobileErr ? <ManageStore.Tip content={mobileErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="11"
                            onFocus={this.handleFocus.bind(this,'mobile')}
                            ref="mobile"/>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-primary"
                                onClick={this.handleCreate.bind(this,index)}>新增
                        </button>
                        <button type="button" className="btn btn-default"
                                onClick={this.handleCancel.bind(this,index)}>取消
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
});

ManageUser.ItemEdit = React.createClass({
    getInitialState: function () {
        return {errors: {}};
    },
    handleSave: function (id, index) {
        var model = {
            password: this.props.data.password,
            realname: this.refs.realname.getDOMNode().value.trim(),
            dept: this.refs.dept.getDOMNode().value.trim(),
            duty: this.refs.duty.getDOMNode().value.trim(),
            email: this.refs.email.getDOMNode().value.trim(),
            telephone: this.refs.telephone.getDOMNode().value.trim(),
            mobile: this.refs.mobile.getDOMNode().value.trim()
        };

        UserListActions.updateItem(id, model, index, function (errors) {
            errors ? this.setState({errors: errors}) : this.props.toggleEdit(false);
        }.bind(this));
    },
    handleCancel: function () {
        this.props.toggleEdit(false);
    },
    handleFocus: function (type) {
        delete this.state.errors[type];
        this.forceUpdate();
    },
    render: function () {
        var user = this.props.data;
        var index = this.props.index;

        var realnameErr = this.state.errors.realname;
        var deptErr = this.state.errors.dept;
        var dutyErr = this.state.errors.duty;
        var emailErr = this.state.errors.email;
        var telephoneErr = this.state.errors.telephone;
        var mobileErr = this.state.errors.mobile;

        return (
            <tr className="active">
                <td>{index + 1}</td>
                <td>
                    <div className="tip-hd">
                        {realnameErr ? <ManageStore.Tip content={realnameErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="10"
                            onFocus={this.handleFocus.bind(this,'realname')}
                            defaultValue={user.realname}
                            ref="realname"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {deptErr ? <ManageStore.Tip content={deptErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'dept')}
                            defaultValue={user.dept}
                            ref="dept"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {dutyErr ? <ManageStore.Tip content={dutyErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'duty')}
                            defaultValue={user.duty}
                            ref="duty"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {emailErr ? <ManageStore.Tip content={emailErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'email')}
                            defaultValue={user.email}
                            ref="email"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {telephoneErr ? <ManageStore.Tip content={telephoneErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'telephone')}
                            defaultValue={user.telephone}
                            ref="telephone"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {mobileErr ? <ManageStore.Tip content={mobileErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="11"
                            onFocus={this.handleFocus.bind(this,'mobile')}
                            defaultValue={user.mobile}
                            ref="mobile"/>
                    </div>
                </td>
                <td>{moment(user.createTime).format('YYYY-MM-DD')}</td>
                <td>{user.creater ? user.creater.realname : user.realname}</td>
                <td>{moment(user.updateTime).format('YYYY-MM-DD')}</td>
                <td>{user.updater ? user.updater.realname : user.realname}</td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-info"
                                onClick={this.handleSave.bind(this,user._id,index)}>保存
                        </button>
                        <button type="button" className="btn btn-default"
                                onClick={this.handleCancel}>取消
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
});