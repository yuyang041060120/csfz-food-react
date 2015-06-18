var cx = React.addons.classSet;

var SignIn = React.createClass({
    mixins: [ReactRouter.Navigation],
    getInitialState: function () {
        return {
            isSubmitting: false,
            errors: []
        };
    },
    getDefaultProps: function () {
        return {
            validations: {
                type: 'keyup',
                rules: {
                    email: {
                        required: true
                    },
                    password: {
                        required: true
                    }
                },
                messages: {
                    email: {
                        required: 'please enter email'
                    },
                    password: {
                        required: 'please enter password'
                    }
                }
            }
        }
    },
    statics:{
        willTransitionTo: auth.handle
    },
    handleSubmit: function (model, e) {
        e.preventDefault();
        this.setState({isSubmitting: true});
        $.post('/vo/signin', model, function (response) {
            if (response.code === constants.resCode.COMMON) {
                auth.signin(JSON.stringify(response.user));
                this.transitionTo('index');
            } else {
                this.setState({errors: response.errors, isSubmitting: false});
            }
        }.bind(this));
    },
    render: function () {
        var btnText = this.state.isSubmitting ? 'Submit...' : 'Submit';
        return (
            <Validator.Form className="form-container form-horizontal" handleSubmit={this.handleSubmit}
                            validations={this.props.validations}>
                <div className="page-header">
                    <h2>Sign In</h2>
                </div>
                <div className="alert alert-danger" style={{display:this.state.errors.length>0?'block':'none'}}>
                    {this.state.errors.map(function (error, index) {
                        return <p key={index}>{error}</p>
                    })}
                </div>
                <LoginInput name="email" placeholder="Email" type="text" key="email"/>
                <LoginInput name="password" placeholder="Password" type="password" key="password"/>

                <div className="form-group">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary btn-block"
                                disabled={this.state.isSubmitting}>{btnText}</button>
                    </div>
                </div>
            </Validator.Form>
        )
    }
});

var LoginInput = React.createClass({
    mixins: [Validator.Mixin],
    handleChange: function (e) {
        this.setValue(e.currentTarget.value);
    },
    render: function () {
        var errorMsg = this.isValid() ? '' : this.getErrorMsg();
        var classes = cx({
            'form-group': true,
            'has-error': this.isInvalid()
        });
        return (
            <div className={classes}>
                <div className="col-sm-12">
                    <input name={this.props.name} className="form-control" type={this.props.type}
                           placeholder={this.props.placeholder}
                           onChange={this.handleChange}/>

                    <p className="form-error">{errorMsg}</p>
                </div>
            </div>
        )
    }
});