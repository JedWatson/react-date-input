'use strict';
/*global describe, it, jest, expect*/

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

	it('should be rendered', function() {
		expect(true).toEqual(true);
	});

});
