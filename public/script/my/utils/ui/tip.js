var TipComponent = React.createClass({
    render: function () {
        return (
            <div className="alert alert-success ui-tip">
                {this.props.content}
            </div>
        )
    }
});

var Tip = {
    instant: null,
    timeout: null,
    show: function (options) {
        clearTimeout(this.timeout);
        if (!this.instant) {
            this.instant = document.createElement('div');
            document.body.appendChild(this.instant);
        }

        React.render(<TipComponent content={options.content}/>, this.instant);
        this.calcuPosition();
        var self = this;
        this.timeout = setTimeout(function () {
            self.close();
        }, 1500);

    },
    close: function () {
        React.unmountComponentAtNode(this.instant);
    },
    calcuPosition: function () {
        var $tip = $(this.instant).find('.alert');
        var left = ($(window).width() - $tip.width()) / 2;

        $tip.css({
            left: left
        });
    }
};