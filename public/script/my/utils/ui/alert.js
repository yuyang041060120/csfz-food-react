var AlertComponent = React.createClass({
    handleClose: function () {
        if (this.props.onClose) {
            this.props.onClose();
        }else{
            Alert.close();
        }
    },
    handleCertain: function () {
        if (this.props.onCertain) {
            this.props.onCertain();
        }else{
            Alert.close();
        }
    },
    render: function () {
        return (
            <div>
                <div className="alpha"></div>
                <div className="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.handleClose}>
                                    <span>x</span>
                                </button>
                                <h4 className="modal-title">{this.props.title}</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" onClick={this.handleClose}>Cancel
                                </button>
                                <button type="button" className="btn btn-primary" onClick={this.handleCertain}>Certain
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var Alert = {
    instant: null,
    show: function (options) {
        if (!this.instant) {
            this.instant = document.createElement('div');
            document.body.appendChild(this.instant);
        }

        React.render(<AlertComponent onClose={options.onClose} onCertain={options.onCertain}
                                     title={options.title}/>, this.instant);
    },
    close: function () {
        React.unmountComponentAtNode(this.instant);
    }
};