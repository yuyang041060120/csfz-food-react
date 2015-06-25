import React     from 'react';
import Router    from 'react-router';
import $         from 'jquery';
import constants from './component/constants';
import ui        from './component/ui';

var Link = Router.Link;
var cx = React.addons.classSet;

var Index = React.createClass({
    render: function () {
        return (
            <div className="container">
                <CurrentBox />
                <HistoryBox />
            </div>
        )
    }
});

var CurrentBox = React.createClass({
    getInitialState: function () {
        return {list: {}};
    },
    handleClick: function () {
        ui.alert({
            title: '确定结束本次订餐？',
            onCertain: function () {
                $.post('/vo/order/end', function (response) {
                    if (response.code === constants.resCode.COMMON) {
                        location.reload();
                    }
                });
            }
        });
    },
    componentDidMount: function () {
        $.get('/current/list', function (response) {
            this.setState({list: response.data});
        }.bind(this));
    },
    render: function () {
        return Object.keys(this.state.list).length > 0 ?
            <div>
                <h2>当前订单
                    <button className="btn btn-danger pull-right" onClick={this.handleClick}>结束本次订单</button>
                </h2>

                <div className="index-current">
                    <StoreList data={this.state.list}/>
                </div>
            </div>
            :
            <div></div>;
    }
});

var HistoryBox = React.createClass({
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
                <h2>历史订单</h2>
                <HistoryList data={this.state.list}/>
            </div>
        )
    }
});

var HistoryList = React.createClass({
    render: function () {
        return (
            <ul className="list-group">
                {
                    this.props.data.map(function (history, index) {
                        return <HistoryItem data={history} key={index}/>
                    })
                }
            </ul>
        )

    }
});


var HistoryItem = React.createClass({
    getInitialState: function () {
        return {isShow: false};
    },
    handleClick: function () {
        this.setState({isShow: !this.state.isShow});
    },
    render: function () {
        var history = this.props.data;

        var classes = cx({
            'glyphicon pull-right': true,
            'glyphicon-plus': !this.state.isShow,
            'glyphicon-minus': this.state.isShow
        });
        return (
            <li className="list-group-item">
                <h5 onClick={this.handleClick}>
                    {moment(history.addTime).format('YYYY-MM-DD HH:mm')} {history.creater ? history.creater.realname : ''}
                    <span className={classes}></span>
                </h5>
                {this.state.isShow ? <StoreList data={JSON.parse(history.content)}/> : ''}
            </li>
        )
    }
});


var StoreList = React.createClass({
    render: function () {
        var data = this.props.data;
        return (
            <div>
                {
                    Object.keys(data).map(function (key, index) {
                        return <StoreItem data={data[key]} key={index}/>
                    })
                }
            </div>
        )
    }
});


var StoreItem = React.createClass({
    render: function () {
        var data = this.props.data;
        return (
            <div className="index-store-item">
                <div className="page-header">
                    <h4>
                        <Link to="store-detail"
                              params={{storeId:data.store._id}}>{data.store.name}（{data.store.telephone}）</Link>
                        <span className="label label-primary mg-rt">总价格:{data.summary.total}</span>
                        <span className="label label-info">总份数:{data.summary.count}</span>
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
                    {Object.keys(data.orders).map(function (key, index) {
                        return <OrderItem data={data.orders[key]} key={index}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
});


var OrderItem = React.createClass({
    render: function () {
        var item = this.props.data;
        var order = item.order;
        return (
            <tr>
                <td>{order.food.name}</td>
                <td>{item.count}</td>
                <td>{item.total}</td>
                <td>
                    {item.list.map(function (i, index) {
                        return (
                            <p key={index}>{i.creater.realname} {i.count}份</p>
                        )
                    })}
                </td>
                <td>{order.food.price}</td>
            </tr>
        )
    }
});


export default Index;