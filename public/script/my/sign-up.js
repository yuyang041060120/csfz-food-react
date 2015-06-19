var cx = React.addons.classSet;

var SignUp = React.createClass({
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
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        pattern: /^[0-9a-zA-Z_]{6,15}$/
                    },
                    confirmPassword: {
                        equalTo: 'password'
                    },
                    realname: {
                        pattern: /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/
                    }
                },
                messages: {
                    email: {
                        required: 'please enter email',
                        email: 'wrong email'
                    },
                    password: {
                        required: 'please enter password',
                        pattern: 'wrong password'
                    },
                    confirmPassword: {
                        equalTo: 'two password inconsistencies'
                    },
                    realname: {
                        pattern: 'please enter chinese name'
                    }
                }
            }
        }
    },
    statics: {
        willTransitionTo: auth.handle
    },
    handleSubmit: function (model, e) {
        e.preventDefault();
        this.setState({isSubmitting: true});

        $.post('/vo/signup', model, function (response) {
            if (response.code === constants.resCode.COMMON) {
                auth.signin(JSON.stringify(response.data));
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
                    <h2>Sign Up</h2>
                </div>
                <div className="alert alert-danger" style={{display:this.state.errors.length>0?'block':'none'}}>
                    {this.state.errors.map(function (error, index) {
                        return <p key={index}>{error}</p>
                    })}
                </div>
                <SignupInput name="email" placeholder="Email" type="text" key="email"/>
                <SignupInput name="password" placeholder="Password" type="password" key="password"/>
                <SignupInput name="confirmPassword" placeholder="Confirm Password" type="password"
                             key="confirmPassword"/>
                <SignupInput name="realname" placeholder="Chinese Name" type="text" key="realname"/>

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

var SignupInput = React.createClass({
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