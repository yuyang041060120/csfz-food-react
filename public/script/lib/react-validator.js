/**
 * Created by yuyangyang on 2015/4/25.
 */
var Validator = {};

Validator.methods = {
    required: function (value, ruleValue) {
        var isValid = value.length > 0;
        return isValid;
    },
    maxlength: function (value, ruleValue) {
        return value && value.length && value.length <= ruleValue;
    },
    minlength: function (value, ruleValue) {
        return value && value.length && value.length >= ruleValue;
    },
    email: function (value, ruleValue) {
        return !value || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    },
    url: function (value, ruleValue) {
        return !value || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    },
    date: function (value, ruleValue) {
        return !value || !/Invalid|NaN/.test(new Date(value).toString());
    },
    number: function (value, ruleValue) {
        return !value || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    },
    pattern: function (value, rulevalue) {
        return rulevalue.test(value);
    },
    equalTo: function (value, rulevalue, component) {
        return value === component.state._value;
    }
};


Validator.Mixin = {
    getInitialState: function () {
        return {
            _value: this.props.value || '',
            _validType: '',
            _isValid: true
        };
    },
    componentWillMount: function () {
        this.props.attachToForm(this);
    },
    setValue: function (value) {
        this.setState({_value: value}, function () {
            if (this.props.isTypeKeyup()) {
                this.valid();
            }
        });
    },
    setValid: function () {
        this.setState({_isValid: true});
    },
    componentWillUnmount: function () {
        this.props.detachFromForm(this);
    },
    getErrorMsg: function () {
        return this.props.getErrorMsg(this);
    },
    isValid: function () {
        return this.state._isValid;
    },
    isInvalid: function () {
        return !this.isValid();
    },
    valid: function () {
        this.props.valid(this);
    }
};

Validator.Form = React.createClass({
    isTypeKeyup: function () {
        return this.props.validations.type === 'keyup';
    },
    getRulesByName: function (name) {
        return this.props.validations.rules[name];
    },
    getRuleValueByNameAndRule: function (name, rule) {
        return this.getRulesByName(name)[rule];
    },
    getErrorMsg: function (component) {
        var name = component.props.name;
        var validType = component.state._validType;
        return this.props.validations.messages[name][validType];
    },
    validForm: function () {
        var inputKeys = Object.keys(this.inputs);

        var isValidArray = [];

        inputKeys.forEach(function (key) {
            isValidArray.push(this.valid(this.inputs[key]));
        }.bind(this));

        return isValidArray.every(function (isValid) {
            return isValid;
        });
    },
    valid: function (component) {
        var value = component.state._value;
        var name = component.props.name;
        var isValid;
        for (var rule in this.getRulesByName(name)) {
            var ruleValue = this.getRuleValueByNameAndRule(name, rule);
            isValid = Validator.methods[rule].bind(this)(value, ruleValue, this.inputs[ruleValue]);

            if (!isValid) {
                component.setState({_isValid: false, _validType: rule});
                return false;
            }
        }
        component.setState({_isValid: true});
        return true;
    },
    componentWillMount: function () {
        this.model = {};
        this.inputs = {};
    },
    componentDidMount: function () {

    },
    handleSubmit: function (e) {
        if (this.validForm()) {
            this.updateModel();

            if (this.props.handleSubmit) {
                this.props.handleSubmit(this.model, e);
            }
        } else {
            e.preventDefault();
        }


    },
    attachToForm: function (component) {
        this.inputs[component.props.name] = component;
        this.model[component.props.name] = component.state._value;
    },
    detachFromForm: function (component) {
        delete this.inputs[component.props.name];
        delete this.model[component.props.name];
    },
    updateModel: function () {
        Object.keys(this.inputs).forEach(function (name) {
            var component = this.inputs[name];
            this.model[name] = component.state._value;
        }.bind(this));
    },
    registerInputs: function (children) {
        return children.map(function (child) {
            if (child.props && child.props.name) {
                return React.cloneElement(child, {
                    attachToForm: this.attachToForm,
                    getErrorMsg: this.getErrorMsg,
                    detachFromForm: this.detachFromForm,
                    valid: this.valid,
                    isTypeKeyup: this.isTypeKeyup
                });
            } else {
                return child;
            }
        }.bind(this));
    },
    render: function () {
        var method = this.props.method || 'POST';
        var action = this.props.action;
        var className = this.props.className;
        return React.createElement('form', {
            method: method,
            action: action,
            className: className,
            onSubmit: this.handleSubmit
        }, null, this.registerInputs(this.props.children));
    }
});