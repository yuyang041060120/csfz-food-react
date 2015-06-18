var SignOut = React.createClass({
    mixins: [ReactRouter.Navigation],
    componentDidMount: function () {
        auth.signout();
        this.transitionTo('index');
    },
    render: function () {
        return (
            <div className="container">
                <h2>SignOut...</h2>
            </div>
        )
    }
});
