var VoHisOrder = React.createClass({
    render: function () {
        return (
            <div className="container">
                <VoHisOrder.Nav />
                <VoHisOrder.List />
            </div>
        )
    }
});

VoHisOrder.Nav = React.createClass({
    render: function () {
        return (
            <div className="col-lg-3 left-nav">
                <ul className="nav nav-pills nav-stacked">
                    <li><Link to="my-order">当前订单</Link></li>
                    <li className="active"><Link to="history-order">历史订单</Link></li>
                    <li><Link to="message">用户信息</Link></li>
                </ul>
            </div>
        )
    }
});

VoHisOrder.List = React.createClass({
    getInitialState: function () {
        return {list: []};
    },
    componentDidMount: function () {
        $.get('/vo/order/history', function (response) {
            this.setState({list: response.data});
        }.bind(this));
    },
    render: function () {
        return (
            <div className="col-lg-9">
                <table className="table table-hover manage-table">
                    <col width="25%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="25%"/>
                    <col width="20%"/>
                    <thead>
                    <tr>
                        <th>套餐</th>
                        <th>价格</th>
                        <th>份数</th>
                        <th>店铺</th>
                        <th>时间</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map(function (item, index) {
                        return <VoHisOrder.Item data={item} key={index}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
});

VoHisOrder.Item = React.createClass({
    render: function () {
        var order = this.props.data;

        return (
            <tr>
                <td>{order.food.name}</td>
                <td>{order.food.price}</td>
                <td>{order.count}</td>
                <td>{order.store.name}</td>
                <td>{moment(order.addTime).format('YYYY-MM-DD HH:mm')}</td>
            </tr>
        )
    }
});