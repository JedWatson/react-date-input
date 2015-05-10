require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-date-input":[function(require,module,exports){
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
	handleBlur: function handleBlur(e) {
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

},{"moment":undefined,"react":undefined}]},{},[]);
