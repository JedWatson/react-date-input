var moment = require('moment');
var React = require('react/addons');
var DateInput = require('react-date-input');

var DateInputExamples = React.createClass({
	getInitialState() {
		return {
			dateValue: new Date()
		};
	},
	onDateChange(key, value) {
		this.setState({ dateValue: value });
		console.log('Date changed to: ' + value);
	},
	render() {
		var value = moment(this.state.dateValue);
		return (
			<div>
				<p>Enter a date</p>
				<DateInput value={this.state.dateValue} onChange={this.onDateChange.bind(this, 'dateValue')} />
				<p>Date is: {value.isValid() ? value.format('Do MMM YYYY') : '(not set or invalid)'}</p>
			</div>
		);
	}
});

React.render(
	<DateInputExamples />,
	document.getElementById('example')
);
