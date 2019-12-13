const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKInputWrapper_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		return browser.fill('input', 'alfa');
	});
	
	describe('OLSKInputWrapperClearButton', function testOLSKInputWrapperClearButton () {

		it('classes OLSKLayoutElementTappable', function () {
			browser.assert.hasClass(OLSKInputWrapperClearButton, 'OLSKLayoutElementTappable')
		});
		
		it('classes OLSKLayoutButtonNoStyle', function () {
			browser.assert.hasClass(OLSKInputWrapperClearButton, 'OLSKLayoutButtonNoStyle')
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
	
	describe('OLSKInputWrapperClearButtonImage', function testOLSKInputWrapperClearButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OLSKInputWrapperClearButtonImage } #_OLSKInputClear`, 1);
		});

	});

});
