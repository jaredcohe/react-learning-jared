var React = require('react');
var ReactDOM = require('react-dom');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>h1 header</h1>
				<p>paragraph paragraph</p>
			</div>
		);
	}
});

module.exports = Home;
