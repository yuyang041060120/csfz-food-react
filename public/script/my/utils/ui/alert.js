var AlertComponent = React.createClass({
    handleClose: function () {
        if (this.props.onClose) {
            this.props.onClose();
        } else {
            Alert.close();
        }
    },
    handleCertain: function () {
        if (this.props.onCertain) {
            this.props.onCertain();
        } else {
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
                                <button type="button" className="btn btn-primary btn-sm" onClick={this.handleCertain}>确定
                                </button>
                                <button type="button" className="btn btn-default btn-sm" onClick={this.handleClose}>取消
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

        this.calcuPosition();
        var self=this;
        $(window).off('resize.alert').on('resize.alert', function () {
            self.calcuPosition();
        });
    },
    close: function () {
        React.unmountComponentAtNode(this.instant);
    },
    calcuPosition: function () {
        var $model=$(this.instant).find('.dialog');
        var left = ($(window).width() - $model.width()) / 2;
        var top = ($(window).height() - $model.height()) / 2;

        $model.css({
            left: left,
            top: top
        });
    }
};