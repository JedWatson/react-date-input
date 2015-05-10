(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DateInput = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var moment = (typeof window !== "undefined" ? window.moment : typeof global !== "undefined" ? global.moment : null);
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});