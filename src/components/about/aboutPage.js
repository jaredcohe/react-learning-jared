var React = require('react');
var ReactDOM = require('react-dom')

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>
          Paragraph I eat food.
        </p>
        <ul>
          <li>whatever</li>
          <li>whatever2</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
