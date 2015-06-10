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
                <StoreDetail.FoodList data={this.state.data.foods}/>
            </div>
        )
    }
});


StoreDetail.FoodList = React.createClass({
    render: function () {
        return (
            <div>
                <div className="page-header">
                    <h3>Food List</h3>
                </div>
                <table className="table table-hover">
                    <col width="20%"/>
                    <col width="30%"/>
                    <col width="30%"/>
                    <col width="20%"/>
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>名称</th>
                        <th>价格</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(function (item, index) {
                        return <StoreDetail.FoodItem data={item} index={index}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
});

StoreDetail.FoodItem = React.createClass({
    render: function () {
        var food = this.props.data;
        var index = this.props.index;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{food.name}</td>
                <td>{food.price}元</td>
                <td>
                    <div>
                        <button type="button" className="btn btn-primary btn-xs js-order">订餐</button>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </td>
            </tr>
        )
    }
});