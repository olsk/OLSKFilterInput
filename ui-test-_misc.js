const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKInputWrapper_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		return browser.fill('input', 'alfa');
	});
	
	describe('OLSKInputWrapperClearButton', function test_OLSKInputWrapperClearButton () {

		it('sets type', function () {
			browser.assert.attribute(OLSKInputWrapperClearButton, 'type', 'button');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OLSKInputWrapperClearButton, 'OLSKDecorTappable')
		});
		
		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OLSKInputWrapperClearButton, 'OLSKDecorButtonNoStyle')
		});
		
		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(OLSKInputWrapperClearButton, 'OLSKToolbarButton')
		});

		context('click', function () {

			before(function () {
				browser.assert.text('#TestOLSKInputWrapperDispatchClear', '0');
			});

			before(function () {
				return browser.pressButton(OLSKInputWrapperClearButton);
			});
			
			it('fires callback on click', async function() {
				browser.assert.text('#TestOLSKInputWrapperDispatchClear', '1');
			});
		
		});

	});
	
	describe('OLSKInputWrapperClearButtonImage', function test_OLSKInputWrapperClearButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OLSKInputWrapperClearButtonImage } #_OLSKInputClear`, 1);
		});

	});

});
