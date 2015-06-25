import React from 'react';
import $     from 'jquery';

var TipComponent = React.createClass({
    render: function () {
        return (
            <div className="alert alert-success ui-tip">
                {this.props.content}
            </div>
        )
    }
});

var instant;
var timeout;


function tip(options) {
    clearTimeout(timeout);
    if (!instant) {
        instant = document.createElement('div');
        document.body.appendChild(instant);
    }

    React.render(<TipComponent content={options.content}/>, instant);
    calcuPosition();
    this.timeout = setTimeout(function () {
        React.unmountComponentAtNode(instant);
    }, 1500);
}

function calcuPosition() {
    var $tip = $(instant).find('.alert');
    var left = ($(window).width() - $tip.width()) / 2;

    $tip.css({
        left: left
    });
}

export default tip;