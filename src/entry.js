var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  render: function() {
    var nameStyle = {
      color: 'red'
    };
    return <h1>Hello, <span style={nameStyle}>World</span>, from React!</h1>;
  }
});

ReactDom.render(<App/>, document.getElementById('react-root'));
