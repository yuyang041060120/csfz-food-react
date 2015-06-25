import React     from 'react';
import $         from 'jquery';
import auth      from './auth';
import constants from './component/constants';
import ui        from './component/ui';


var StoreDetail = React.createClass({
    getInitialState: function () {
        return {data: {store: {}, foods: []}};
    },
    componentDidMount: function () {
        $.get('/store/detail/' + this.props.params.storeId, function (data) {
            this.setState({data: data});
        }.bind(this));
    },
    render: function () {
        return (
            <div className="container">
                <div className="page-header">
                    <h3>套餐列表</h3>
                </div>
                <FoodList data={this.state.data.foods}/>
            </div>
        )
    }
});


var FoodList = React.createClass({
    render: function () {
        return (
            <div className="row">
                {this.props.data.map(function (item, index) {
                    return <FoodItem data={item} key={index}/>
                })}
            </div>
        )
    }
});

var FoodItem = React.createClass({
    getInitialState: function () {
        return {showBtn: false};
    },
    handleOrder: function () {
        var food = this.props.data;

        $.post('/vo/order', {
            food: food._id,
            store: food.store._id,
            count: 1
        }, function (response) {
            if (response.code === constants.resCode.COMMON) {
                ui.tip({
                    content: '点餐成功'
                });
            } else {
                ui.tip({
                    content: '点餐失败'
                });
            }
        });
    },
    render: function () {
        var food = this.props.data;
        return (
            <div className="col-lg-3">
                <div className="thumbnail">
                    <img src="image/demo.jpg"/>

                    <div className="caption">
                        <h4>{food.name}</h4>

                        <p className="store-price">￥{food.price}</p>

                        {auth.isLogin() ?
                            <p>

                                <button className="btn btn-primary btn-sm mg-rt" onClick={this.handleOrder}>订餐</button>
                            </p> : ''
                        }
                    </div>
                </div>
            </div>

        )
    }
});

export default StoreDetail;