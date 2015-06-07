'use strict';

var moment = require('moment');
var React = require('react');

var DateSelect = React.createClass({
	displayName: 'DateSelect',

	propTypes: {
		value: React.PropTypes.any
	},
	getDefaultProps: function getDefaultProps() {
		return {
			value: null,
			format: 'YYYY-MM-DD'
		};
	},
	getInitialState: function getInitialState() {
		var inputValue = '';
		var dateValue = null;
		if (typeof this.props.value === 'string') {
			dateValue = moment(this.props.value, this.props.format);
		} else {
			dateValue = moment(this.props.value);
		}
		if (dateValue.isValid()) {
			inputValue = dateValue.format(this.props.format);
		}
		return {
			inputValue: inputValue
		};
	},
	handleInput: function handleInput(e) {
		this.setState({
			inputValue: e.target.value
		});
	},
	handleBlur: function handleBlur() {
		var value = moment(this.state.inputValue, this.props.format);
		this.props.onChange && this.props.onChange(value.isValid() ? value.toDate() : null);
	},
	render: function render() {
		return React.createElement(
			'span',
			{ className: 'DateInput' },
			React.createElement('input', { type: 'text', value: this.state.inputValue, onChange: this.handleInput, onBlur: this.handleBlur })
		);
	}
});

module.exports = DateSelect;