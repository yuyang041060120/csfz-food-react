var VoMyOrder = React.createClass({
    render: function () {
        return (
            <div className="container">
                <VoMyOrder.Nav />
                <VoMyOrder.List />
            </div>
        )
    }
});

VoMyOrder.Nav = React.createClass({
    render: function () {
        return (
            <div className="col-lg-3 left-nav">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><Link to="my-order">当前订单</Link></li>
                    <li><Link to="history-order">历史订单</Link></li>
                    <li><Link to="message">用户信息</Link></li>
                </ul>
            </div>
        )
    }
});

VoMyOrder.List = React.createClass({
    getInitialState: function () {
        return {list: []};
    },
    componentDidMount: function () {
        $.get('/vo/order/current', function (response) {
            this.setState({list: response.data});
        }.bind(this));
    },
    handleDelete: function (id, index) {
        $.post('/vo/order/delete', {id: id}, function (response) {
            if (response.code === constants.resCode.COMMON) {
                this.state.list.splice(index, 1);
                this.forceUpdate();
                Tip.show({
                    content: '取消成功'
                });
            }

        }.bind(this));
    },
    render: function () {
        return (
            <div className="col-lg-9">
                { this.state.list.length > 0 ?
                    <table className="table table-hover manage-table">
                        <col width="25%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="25%"/>
                        <col width="20%"/>
                        <col width="10%"/>
                        <thead>
                        <tr>
                            <th>套餐</th>
                            <th>价格</th>
                            <th>份数</th>
                            <th>店铺</th>
                            <th>时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.list.map(function (item, index) {
                            return <VoMyOrder.Item data={item} key={index} handleDelete={this.handleDelete}/>
                        }.bind(this))}
                        </tbody>
                    </table>
                    :
                    <h4 className="text-center">暂无订单，马上<Link to="store">点餐</Link></h4>
                }
            </div>

        )
    }
});

VoMyOrder.Item = React.createClass({
    handleCancel: function () {
        this.props.handleDelete(this.props.data._id, this.props.index);
    },
    render: function () {
        var order = this.props.data;

        return (
            <tr>
                <td>{order.food.name}</td>
                <td>{order.food.price}</td>
                <td>{order.count}</td>
                <td>{order.store.name}</td>
                <td>{moment(order.addTime).format('YYYY-MM-DD HH:mm')}</td>
                <td>
                    <button type="button" className="btn btn-primary btn-xs" onClick={this.handleCancel}>取消
                    </button>
                </td>
            </tr>
        )
    }
});