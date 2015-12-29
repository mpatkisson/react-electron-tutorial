var React = require('react');
var ReactDom = require('react-dom');

require('../styles/main.scss');

var App = React.createClass({
  render: function() {
    var nameStyle = {
      color: 'red'
    };
    return <h1 className="test">Hello, <span style={nameStyle}>World</span>, from React!</h1>;
  }
});

ReactDom.render(<App/>, document.getElementById('react-root'));
