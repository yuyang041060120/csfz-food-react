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
    onCreateItem(item, index){
        $.post('/vo/manage/' + storeId + '/food/new', item, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index] = response.data;
                this.trigger(this.items);
            }
        }.bind(this));
    },
    onUpdateItem(id, item, index, callback){
        $.post('/vo/manage/' + storeId + '/food/update', _.extend(item, {id: id}), function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.items[index] = response.data;
                this.trigger(this.items);
                callback();
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
                <h3>Food List
                    <button className="btn btn-primary pull-right" onClick={this.handleClick}>
                        Add New Food
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
                <col width="8%"/>
                <col width="20%"/>
                <col width="10%"/>
                <col width="10%"/>
                <col width="10%"/>
                <col width="10%"/>
                <col width="35%"/>
                <thead>
                <tr>
                    <th>Food Name</th>
                    <th>Food Price</th>
                    <th>Store Name</th>
                    <th>Add Time</th>
                    <th>Adder</th>
                    <th>Update Time</th>
                    <th>Updater</th>
                    <th>Operations</th>
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

ManageFood.ItemShow = React.createClass({
    handleEdit: function () {
        this.props.toggleEdit(true);
    },
    handleDelete: function (id, index) {
        Alert.show({
            title: 'Ensure Delete This Food?',
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
                                onClick={this.handleEdit}>Edit
                        </button>
                        <button type="button" className="btn btn-danger"
                                onClick={this.handleDelete.bind(this,food._id,index)}>Delete
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
});

ManageFood.ItemNew = React.createClass({
    handleCreate: function (index) {
        FoodListActions.createItem({
            name: this.refs.name.getDOMNode().value,
            price: this.refs.price.getDOMNode().value
        }, index);
    },
    handleCancel: function (index) {
        FoodListActions.removeItem(index);
    },
    render: function () {
        var index = this.props.index;
        return (
            <tr>
                <td><input type="text" className="form-control input-sm" maxLength="20" ref="name"/></td>
                <td><input type="text" className="form-control input-sm" maxLength="10" ref="price"/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-primary"
                                onClick={this.handleCreate.bind(this,index)}>Create
                        </button>
                        <button type="button" className="btn btn-default"
                                onClick={this.handleCancel.bind(this,index)}>Cancel
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
});

ManageFood.ItemEdit = React.createClass({
    handleSave: function (id, index) {
        FoodListActions.updateItem(id, {
            name: this.refs.name.getDOMNode().value,
            price: this.refs.price.getDOMNode().value
        }, index, function () {
            this.props.toggleEdit(false);
        }.bind(this));
    },
    handleCancel: function () {
        this.props.toggleEdit(false);
    },
    render: function () {
        var food = this.props.data;
        var index = this.props.index;
        return (
            <tr>
                <td><input type="text" className="form-control input-sm" defaultValue={food.name} ref="name"/></td>
                <td><input type="text" className="form-control input-sm" defaultValue={food.price} ref="price"/></td>
                <td>{food.store.name}</td>
                <td>{moment(food.addTime).format('YYYY-MM-DD')}</td>
                <td>{food.creater.realname}</td>
                <td>{moment(food.updateTime).format('YYYY-MM-DD')}</td>
                <td>{food.updater.realname}</td>
                <td>
                    <div className="btn-group btn-group-xs">
                        <button type="button" className="btn btn-info"
                                onClick={this.handleSave.bind(this,food._id,index)}>Save
                        </button>
                        <button type="button" className="btn btn-default"
                                onClick={this.handleCancel}>Cancel
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
});