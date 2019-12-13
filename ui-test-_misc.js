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
			
			it('fires callback on click', async function() {
				browser.assert.text('#OLSKInputWrapperInputWrapperDispatchClear', '0');

				browser.fill('input', 'alfa');
				await browser.wait({ element: OLSKInputWrapperClearButton });

				browser.pressButton(OLSKInputWrapperClearButton);
				await browser.wait({ element: OLSKInputWrapperClearButton });

				browser.assert.text('#OLSKInputWrapperInputWrapperDispatchClear', '1');
			});
		
		});

	});
	
	describe('OLSKInputWrapperClearButtonImage', function testOLSKInputWrapperClearButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OLSKInputWrapperClearButtonImage } #_OLSKInputClear`, 1);
		});

	});

});
