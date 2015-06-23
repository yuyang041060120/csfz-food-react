var storeId;

var FoodListActions = Reflux.createActions([
    'getAll',
    'addItem',
    'removeItem',
    'createItem',
    'updateItem',
    'deleteItem'
]);

var FoodListStore = Reflux.createStore({
    items: [],
    listenables: FoodListActions,
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
        $.get('/vo/manage/' + storeId + '/food/list', function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items = response.data;
                this.trigger(this.items);
            }
        }.bind(this));
    },
    onCreateItem(item, index, callback){
        $.post('/vo/manage/' + storeId + '/food/new', item, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index] = response.data;
                this.trigger(this.items);
            } else {
                callback(response.errors);
            }
        }.bind(this));
    },
    onUpdateItem(id, item, index, callback){
        $.post('/vo/manage/' + storeId + '/food/update', _.extend(item, {id: id}), function (response) {
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
        $.post('/vo/manage/' + storeId + '/food/delete', {id: id}, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items.splice(index, 1);
                this.trigger(this.items);
                callback();
            }
        }.bind(this));
    }
});


var ManageFood = React.createClass({
    componentWillMount: function () {
        storeId = this.props.params.storeId;
    },
    render: function () {
        return (
            <div className="container">
                <ManageFood.New />
                <ManageFood.List/>
            </div>
        )
    }
});


ManageFood.New = React.createClass({
    handleClick: function () {
        FoodListActions.addItem();
    },
    render: function () {
        return (
            <div className="page-header">
                <h3>套餐列表
                    <button className="btn btn-primary pull-right" onClick={this.handleClick}>
                        新增套餐
                    </button>
                </h3>
            </div>
        )
    }
});

ManageFood.List = React.createClass({
    mixins: [Reflux.connect(FoodListStore, 'list')],
    getInitialState: function () {
        return {list: []};
    },
    componentDidMount: function () {
        FoodListActions.getAll();
    },
    render: function () {
        return (
            <table className="table table-hover manage-table">
                <col width="18%"/>
                <col width="15%"/>
                <col width="20%"/>
                <col width="8%"/>
                <col width="8%"/>
                <col width="8%"/>
                <col width="8%"/>
                <col width="15%"/>
                <thead>
                <tr>
                    <th>套餐名称</th>
                    <th>套餐价格</th>
                    <th>所属店铺</th>
                    <th>添加时间</th>
                    <th>添加人</th>
                    <th>更新时间</th>
                    <th>更新人</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {this.state.list.map(function (item, index) {
                    return <ManageFood.Item data={item} key={index} index={index}/>
                })}
                </tbody>
            </table>
        )
    }
});

ManageFood.Item = React.createClass({
    getInitialState: function () {
        return {isEdit: false};
    },
    toggleEdit: function (flag) {
        this.setState({isEdit: flag});
    },
    render: function () {
        var food = this.props.data;
        var index = this.props.index;
        var render;

        if (food._id) {
            if (this.state.isEdit) {
                render = <ManageFood.ItemEdit index={index} data={food} toggleEdit={this.toggleEdit}/>;
            } else {
                render = <ManageFood.ItemShow index={index} data={food} toggleEdit={this.toggleEdit}/>;
            }
        } else {
            render = <ManageFood.ItemNew data={food} index={index}/>;
        }

        return render;
    }
});


ManageFood.Tip = React.createClass({
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

ManageFood.ItemShow = React.createClass({
    handleEdit: function () {
        this.props.toggleEdit(true);
    },
    handleDelete: function (id, index) {
        Alert.show({
            title: '确定删除该套餐？',
            onCertain: function () {
                FoodListActions.deleteItem(id, index, function () {
                    Alert.close();
                });
            }
        });

    },
    render: function () {
        var food = this.props.data;
        var index = this.props.index;
        return (
            <tr>
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td>{food.store.name}</td>
                <td>{moment(food.addTime).format('YYYY-MM-DD')}</td>
                <td>{food.creater.realname}</td>
                <td>{moment(food.updateTime).format('YYYY-MM-DD')}</td>
                <td>{food.updater.realname}</td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-primary"
                                onClick={this.handleEdit}>修改
                        </button>
                        <button type="button" className="btn btn-danger"
                                onClick={this.handleDelete.bind(this,food._id,index)}>删除
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
});

ManageFood.ItemNew = React.createClass({
    getInitialState: function () {
        return {errors: {}};
    },
    handleCreate: function (index) {
        var model = {
            name: this.refs.name.getDOMNode().value.trim(),
            price: this.refs.price.getDOMNode().value.trim()
        };

        FoodListActions.createItem(model, index, function (errors) {
            this.setState({errors: errors});
        }.bind(this));
    },
    handleCancel: function (index) {
        FoodListActions.removeItem(index);
    },
    handleFocus: function (type) {
        delete this.state.errors[type];
        this.forceUpdate();
    },
    render: function () {
        var index = this.props.index;

        var nameErr = this.state.errors.name;
        var priceErr = this.state.errors.price;

        return (
            <tr className="active">
                <td>
                    <div className="tip-hd">
                        {nameErr ? <ManageStore.Tip content={nameErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="20"
                            onFocus={this.handleFocus.bind(this,'name')}
                            ref="name"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {priceErr ? <ManageStore.Tip content={priceErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            maxLength="10"
                            onFocus={this.handleFocus.bind(this,'price')}
                            ref="price"/>
                    </div>
                </td>
                <td></td>
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

ManageFood.ItemEdit = React.createClass({
    getInitialState: function () {
        return {errors: {}};
    },
    handleSave: function (id, index) {
        var model = {
            name: this.refs.name.getDOMNode().value.trim(),
            price: this.refs.price.getDOMNode().value.trim()
        };

        FoodListActions.updateItem(id, model, index, function (errors) {
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
        var food = this.props.data;
        var index = this.props.index;

        var nameErr = this.state.errors.name;
        var priceErr = this.state.errors.price;

        return (
            <tr className="active">
                <td>
                    <div className="tip-hd">
                        {nameErr ? <ManageStore.Tip content={nameErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            defaultValue={food.name}
                            onFocus={this.handleFocus.bind(this,'name')}
                            ref="name"/>
                    </div>
                </td>
                <td>
                    <div className="tip-hd">
                        {priceErr ? <ManageStore.Tip content={priceErr}/> : ''}
                        <input
                            type="text"
                            className="form-control input-sm"
                            defaultValue={food.price}
                            onFocus={this.handleFocus.bind(this,'price')}
                            ref="price"/>
                    </div>
                </td>
                <td>{food.store.name}</td>
                <td>{moment(food.addTime).format('YYYY-MM-DD')}</td>
                <td>{food.creater.realname}</td>
                <td>{moment(food.updateTime).format('YYYY-MM-DD')}</td>
                <td>{food.updater.realname}</td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-info"
                                onClick={this.handleSave.bind(this,food._id,index)}>保存
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