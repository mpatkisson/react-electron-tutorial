'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');

window.$ = $;
window.jQuery = $;
require('bootstrap-sass');
require('../styles/main.scss');

var App = React.createClass({
  render: function() {
    var nameStyle = {
      color: 'red'
    };
    return <div className="alert alert-success">Hello, <span style={nameStyle}>Mike</span>, from React!</div>;
  }
});

ReactDom.render(<App/>, document.getElementById('react-root'));
