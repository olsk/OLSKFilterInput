const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKInputWrapperContainer: '.OLSKInputWrapperContainer',

	OLSKInputWrapperClearButton: '.OLSKInputWrapperClearButton',
	OLSKInputWrapperClearButtonImage: '.OLSKInputWrapperClearButtonImage',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKInputWrapper_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKInputWrapperContainer', function () {
		browser.assert.elements(OLSKInputWrapperContainer, 1);
	});

	it('hides OLSKInputWrapperClearButton', function () {
		browser.assert.elements(OLSKInputWrapperClearButton, 0);
	});

	context('input not empty', function () {
		
		before(function () {
			return browser.fill('input', 'alfa');
		});

		it('shows OLSKInputWrapperClearButton', function () {
			browser.assert.elements(OLSKInputWrapperClearButton, 1);
		});

		it('shows OLSKInputWrapperClearButtonImage', function () {
			browser.assert.elements(OLSKInputWrapperClearButtonImage, 1);
		});
	
	});

	context('input empty', function () {
		
		before(function () {
			return browser.fill('input', '');
		});

		it('hides OLSKInputWrapperClearButton', function () {
			browser.assert.elements(OLSKInputWrapperClearButton, 0);
		});
	
	});

});
