import React  from 'react';
import Router from 'react-router';
import $      from 'jquery';

var Link = Router.Link;

var Store = React.createClass({
    getInitialState: function () {
        return {list: []};
    },
    componentDidMount: function () {
        $.get('/store/list', function (data) {
            this.setState({list: data});
        }.bind(this));
    },
    render: function () {
        return (
            <div className="container">
                <div className="page-header">
                    <h3>店铺列表</h3>
                </div>
                <StoreList data={this.state.list}/>
            </div>
        )
    }
});


var StoreList = React.createClass({
    render: function () {
        return (
            <ul className="list-group">
                {this.props.data.map(function (item) {
                    return <StoreItem data={item} key={item._id}/>
                })}
            </ul>
        )
    }
});


var StoreItem = React.createClass({
    render: function () {
        var store = this.props.data;
        return (
            <li className="list-group-item store-item">
                <h3 className="list-group-item-heading">
                    <Link to="store-detail" params={{storeId:store._id}}>{store.name}</Link>
                </h3>

                <p>
                    <span className="glyphicon glyphicon-shopping-cart"></span>{store.mainProduct}
                    <span className="glyphicon glyphicon-phone"></span>{store.telephone}
                </p>
            </li>
        )
    }
});

export default Store;