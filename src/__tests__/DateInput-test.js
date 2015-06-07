'use strict';
/*global describe, it, jest, expect*/

jest.dontMock('moment');
jest.dontMock('../DateInput');

var React = require('react/addons');
var DateInput = require('../DateInput');
var TestUtils = React.addons.TestUtils;

describe('DateInput test', function() {

	// TODO: Add Tests

    // Render an instance of the component
    var instance = TestUtils.renderIntoDocument(
        <DateInput />
    );

	var inputElement = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

	it('should be rendered', function() {
		expect(inputElement.getDOMNode().parentNode.className).toEqual('DateInput');
	});

});
