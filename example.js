require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var moment = require('moment');
var React = require('react/addons');
var DateInput = require('react-date-input');

var DateInputExamples = React.createClass({
	displayName: 'DateInputExamples',

	getInitialState: function getInitialState() {
		return {
			dateValue: new Date()
		};
	},
	onDateChange: function onDateChange(key, value) {
		this.setState({ dateValue: value });
		console.log('Date changed to: ' + value);
	},
	render: function render() {
		var value = moment(this.state.dateValue);
		return React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'Enter a date'
			),
			React.createElement(DateInput, { value: this.state.dateValue, onChange: this.onDateChange.bind(this, 'dateValue') }),
			React.createElement(
				'p',
				null,
				'Date is: ',
				value.isValid() ? value.format('Do MMM YYYY') : '(not set or invalid)'
			)
		);
	}
});

React.render(React.createElement(DateInputExamples, null), document.getElementById('example'));

},{"moment":undefined,"react-date-input":undefined,"react/addons":undefined}]},{},[1]);
