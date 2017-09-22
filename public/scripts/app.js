'use strict';

var app = {
    title: "Visibility Toggle"
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            { hidden: !visibility },
            'Lorem ipsum dolor sit amet!'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
