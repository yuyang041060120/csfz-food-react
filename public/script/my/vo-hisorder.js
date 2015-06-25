import React  from 'react';
import Router from 'react-router';
import $      from 'jquery';

var Link = Router.Link;

var VoHisOrder = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Nav />
                <List />
            </div>
        )
    }
});

var Nav = React.createClass({
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

var List = React.createClass({
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
                { this.state.list.length > 0 ?
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
                            return <Item data={item} key={index} handleDelete={this.handleDelete}/>
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

var Item = React.createClass({
    render: function () {
        var order = this.props.data;

        return (
            <tr>
                <td>{order.food ? order.food.name : ''}</td>
                <td>{order.food ? order.food.price : ''}</td>
                <td>{order.count}</td>
                <td>{order.store?order.store.name:''}</td>
                <td>{moment(order.addTime).format('YYYY-MM-DD HH:mm')}</td>
            </tr>
        )
    }
});

export default VoHisOrder;