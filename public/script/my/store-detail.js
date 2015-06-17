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
                    <h3>Food List</h3>
                </div>
                <StoreDetail.FoodList data={this.state.data.foods}/>
            </div>
        )
    }
});


StoreDetail.FoodList = React.createClass({
    render: function () {
        return (
            <div className="list-group">
                {this.props.data.map(function (item, index) {
                    return <StoreDetail.FoodItem data={item} key={index}/>
                })}
            </div>
        )
    }
});

StoreDetail.FoodItem = React.createClass({
    getInitialState: function () {
        return {showBtn: false};
    },
    handleMouseEnter: function () {
        this.setState({showBtn: true});
    },
    handleMouseLeave: function () {
        this.setState({showBtn: false});
    },
    render: function () {
        var food = this.props.data;
        var style = this.state.showBtn ? 'block' : 'none';
        return (
            <a className="list-group-item store-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <h4 className="list-group-item-heading">
                    <span>{food.name}</span><span className="store-detail-price"> {food.price}元</span>
                    <div className="pull-right" style={{display:style}}>
                        <button className=" btn btn-primary btn-xs">点餐</button>
                    </div>

                </h4>
            </a>
        )
    }
});