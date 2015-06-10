var cx=React.addons.classSet;

var Index = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Index.HistoryBox />
            </div>
        )
    }
});


Index.HistoryBox = React.createClass({
    getInitialState: function () {
        return {list: []};
    },
    componentDidMount: function () {
        $.get('/history/list', function (data) {
            this.setState({list: data});
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <h2>History Orders</h2>
                <Index.HistoryList data={this.state.list}/>
            </div>
        )
    }
});

Index.HistoryList = React.createClass({
    render: function () {
        return (
            <ul className="list-group">
                {
                    this.props.data.map(function (history) {
                        return <Index.HistoryItem data={history} key={history._id}/>
                    })
                }
            </ul>
        )

    }
});


Index.HistoryItem = React.createClass({
    getInitialState: function () {
        return {isShow: false};
    },
    handleClick: function () {
        this.setState({isShow: !this.state.isShow});
    },
    render: function () {
        var history = this.props.data;
        var classes=cx({
            'glyphicon pull-right':true,
            'glyphicon-plus':!this.state.isShow,
            'glyphicon-minus':this.state.isShow
        });
        return (
            <li className="list-group-item">
                <h5 onClick={this.handleClick}>
                    {moment(history.addTime).format('YYYY-MM-DD HH:mm')} {history.creater ? history.creater.realname : ''}
                    <span className={classes}></span>
                </h5>
                {this.state.isShow ? <Index.StoreList data={JSON.parse(history.content)}/> : ''}
            </li>
        )
    }
});


Index.StoreList = React.createClass({
    render: function () {
        var data = this.props.data;
        return (
            <div>
                {
                    Object.keys(data).map(function (key) {
                        return <Index.StoreItem data={data[key]} key={data[key]._id}/>
                    })
                }
            </div>
        )
    }
});



Index.StoreItem = React.createClass({
    render: function () {
        var data = this.props.data;
        return (
            <div className="index-store-item">
                <div className="page-header">
                    <h4>{data.store.name}（{data.store.telephone}）
                        <span>总价格:{data.summary.total}</span>
                        <span>总份数:{data.summary.count}</span>
                    </h4>
                </div>
                <table className="table table-hover table-condensed">
                    <col width="20%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="40%"/>
                    <col width="10%"/>
                    <thead>
                    <tr>
                        <th>套餐</th>
                        <th>份数</th>
                        <th>总价</th>
                        <th>订餐</th>
                        <th>单价</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(data.orders).map(function (key) {
                        return <Index.OrderItem data={data.orders[key]} key={key}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
});


Index.OrderItem = React.createClass({
    render: function () {
        var item = this.props.data;
        var order = item.order;
        return (
            <tr>
                <td>{order.food.name}</td>
                <td>{item.count}</td>
                <td>{item.total}</td>
                <td>
                    {item.list.map(function (i) {
                        return (
                            <p>{i.creater.realname} {i.count}份</p>
                        )
                    })}
                </td>
                <td>{order.food.price}</td>
            </tr>
        )
    }
});