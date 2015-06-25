import React  from 'react';
import Router from 'react-router';
import auth   from './auth';

var SignOut = React.createClass({
    mixins: [Router.Navigation],
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

export default SignOut;
