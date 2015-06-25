import React from 'react';
import $     from 'jquery';

var AlertComponent = React.createClass({
    handleClose: function () {
        if (this.props.onClose) {
            this.props.onClose(close);
        } else {
            close();
        }
    },
    handleCertain: function () {
        if (this.props.onCertain) {
            this.props.onCertain(close);
        } else {
            close();
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

var instant;

function close() {
    React.unmountComponentAtNode(instant);
}

function alert(options) {
    if (!instant) {
        instant = document.createElement('div');
        document.body.appendChild(instant);
    }

    React.render(<AlertComponent onClose={options.onClose} onCertain={options.onCertain}
                                 title={options.title}/>, instant);

    calcuPosition();

    $(window).off('resize.alert').on('resize.alert', function () {
        calcuPosition();
    });
}

function calcuPosition() {
    var $model = $(instant).find('.dialog');
    var left = ($(window).width() - $model.width()) / 2;
    var top = ($(window).height() - $model.height()) / 2;

    $model.css({
        left: left,
        top: top
    });
}

export default alert;