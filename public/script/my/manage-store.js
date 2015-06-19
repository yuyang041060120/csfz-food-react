var ManageStore = React.createClass({
    render: function () {
        return (
            <div className="container">
                <ManageStore.New />
                <ManageStore.List />
            </div>
        )
    }
});

var StoreListActions = Reflux.createActions([
    'getAll',
    'addItem',
    'removeItem',
    'createItem',
    'updateItem',
    'deleteItem'
]);

var StoreListStore = Reflux.createStore({
    items: [],
    listenables: StoreListActions,
    onAddItem(){
        if (this.items.length === 0 || this.items[0]._id) {
            this.items.unshift({
                name: '',
                mainProduct: '',
                telephone: '',
                address: ''
            });
            this.trigger(this.items);
        }
    },
    onRemoveItem(index){
        this.items.splice(index, 1);
        this.trigger(this.items);
    },
    onGetAll(){
        $.get('/vo/manage/store/list', function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items = response.data;
                this.trigger(this.items);
            } else {
                ui.tip({content: response.errors});
            }
        }.bind(this));
    },
    onCreateItem(item, index){
        $.post('/vo/manage/store/new', item, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index] = response.data;
                this.trigger(this.items);
            } else {
                console.log({content: response.errors});
            }

        }.bind(this));
    },
    onUpdateItem(id, item, index, callback){
        $.post('/vo/manage/store/update', _.extend(item, {id: id}), function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index] = response.data;
                this.trigger(this.items);
                callback();
            }
        }.bind(this));
    },
    onDeleteItem(id, index, callback){
        $.post('/vo/manage/store/delete', {id: id}, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items.splice(index, 1);
                this.trigger(this.items);
                callback();
            }
        }.bind(this));
    }
});

ManageStore.New = React.createClass({
    handleClick: function () {
        StoreListActions.addItem();
    },
    render: function () {
        return (
            <div className="page-header">
                <h3>店铺列表
                    <button className="btn btn-primary pull-right" onClick={this.handleClick}>
                        新增店铺
                    </button>
                </h3>
            </div>
        )
    }
});

ManageStore.List = React.createClass({
    mixins: [Reflux.connect(StoreListStore, 'list')],
    getInitialState: function () {
        return {list: []};
    },
    componentDidMount: function () {
        StoreListActions.getAll();
    },
    render: function () {
        return (
            <table className="table table-hover manage-table">
                <col width="20%"/>
                <col width="12%"/>
                <col width="12%"/>
                <col width="20%"/>
                <col width="8%"/>
                <col width="8%"/>
                <col width="35%"/>
                <thead>
                <tr>
                    <th>店铺名称</th>
                    <th>主营产品</th>
                    <th>电话</th>
                    <th>地址</th>
                    <th>添加时间</th>
                    <th>添加人</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {this.state.list.map(function (item, index) {
                    return <ManageStore.Item data={item} key={index} index={index}/>
                })}
                </tbody>
            </table>
        )
    }
});

ManageStore.Item = React.createClass({
    getInitialState: function () {
        return {isEdit: false};
    },
    toggleEdit: function (flag) {
        this.setState({isEdit: flag});
    },
    render: function () {
        var store = this.props.data;
        var index = this.props.index;
        var render;

        if (store._id) {
            if (this.state.isEdit) {
                render = <ManageStore.ItemEdit index={index} data={store} toggleEdit={this.toggleEdit}/>;
            } else {
                render = <ManageStore.ItemShow index={index} data={store} toggleEdit={this.toggleEdit}/>;
            }
        } else {
            render = <ManageStore.ItemNew data={store} index={index}/>;
        }

        return render;
    }
});

ManageStore.ItemShow = React.createClass({
    handleEdit: function () {
        this.props.toggleEdit(true);
    },
    handleDelete: function (id, index) {
        Alert.show({
            title: '确定删除该店铺？',
            onCertain: function () {
                StoreListActions.deleteItem(id, index, function () {
                    Alert.close();
                });
            }
        });

    },
    render: function () {
        var store = this.props.data;
        var index = this.props.index;
        return (
            <tr>
                <td>{store.name}</td>
                <td>{store.mainProduct}</td>
                <td>{store.telephone}</td>
                <td>{store.address}</td>
                <td>{moment(store.addTime).format('YYYY-MM-DD')}</td>
                <td>{store.creater.realname}</td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-primary"
                                onClick={this.handleEdit}>修改
                        </button>
                        <button type="button" className="btn btn-danger"
                                onClick={this.handleDelete.bind(this,store._id,index)}>删除
                        </button>
                        <Link to="manage-food"className="btn btn-info" params={{storeId:store._id}}>套餐管理</Link>
                    </div>
                </td>
            </tr>
        )
    }
});

ManageStore.ItemNew = React.createClass({
    handleCreate: function (index) {
        StoreListActions.createItem({
            name: this.refs.name.getDOMNode().value,
            mainProduct: this.refs.mainProduct.getDOMNode().value,
            telephone: this.refs.telephone.getDOMNode().value,
            address: this.refs.address.getDOMNode().value
        }, index);
    },
    handleCancel: function (index) {
        StoreListActions.removeItem(index);
    },
    render: function () {
        var index = this.props.index;
        return (
            <tr className="active">
                <td>
                    <div className="tip-hd">
                        <div className="tooltip top" role="tooltip">
                            <div className="tooltip-arrow"></div>
                            <div className="tooltip-inner">
                                Tooltip on the left
                            </div>
                        </div>
                        <input type="text" className="form-control input-sm" maxLength="20" ref="name"/>
                    </div>

                </td>
                <td><input type="text" className="form-control input-sm" maxLength="20" ref="mainProduct"/></td>
                <td><input type="text" className="form-control input-sm" maxLength="20" ref="telephone"/></td>
                <td><input type="text" className="form-control input-sm" maxLength="20" ref="address"/></td>
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

ManageStore.ItemEdit = React.createClass({
    handleSave: function (id, index) {
        StoreListActions.updateItem(id, {
            name: this.refs.name.getDOMNode().value,
            mainProduct: this.refs.mainProduct.getDOMNode().value,
            telephone: this.refs.telephone.getDOMNode().value,
            address: this.refs.address.getDOMNode().value
        }, index, function () {
            this.props.toggleEdit(false);
        }.bind(this));
    },
    handleCancel: function () {
        this.props.toggleEdit(false);
    },
    render: function () {
        var store = this.props.data;
        var index = this.props.index;
        return (
            <tr className="active">
                <td><input type="text" className="form-control input-sm" defaultValue={store.name} ref="name"/></td>
                <td><input type="text" className="form-control input-sm" defaultValue={store.mainProduct}
                           ref="mainProduct"/></td>
                <td><input type="text" className="form-control input-sm" defaultValue={store.telephone}
                           ref="telephone"/></td>
                <td><input type="text" className="form-control input-sm" defaultValue={store.address} ref="address"/>
                </td>
                <td>{moment(store.addTime).format('YYYY-MM-DD')}</td>
                <td>{store.creater.realname}</td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-info"
                                onClick={this.handleSave.bind(this,store._id,index)}>保存
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