var moment = require('moment');
var React = require('react');

var DateSelect = React.createClass({
	propTypes: {
		value: React.PropTypes.any
	},
	getDefaultProps () {
		return {
			value: null,
			format: 'YYYY-MM-DD'
		};
	},
	getInitialState () {
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
	handleInput (e) {
		this.setState({
			inputValue: e.target.value
		});
	},
	handleBlur () {
		var value = moment(this.state.inputValue, this.props.format);
		this.props.onChange && this.props.onChange(value.isValid() ? value.toDate() : null);
	},
	render () {
		return (
			<span className="DateInput">
				<input type="text" value={this.state.inputValue} onChange={this.handleInput} onBlur={this.handleBlur} />
			</span>
		);
	}
});

module.exports = DateSelect;
