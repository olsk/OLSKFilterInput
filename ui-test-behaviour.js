import { throws, deepEqual } from 'assert';

const browser = new OLSKBrowser();
const kDefaultRoutePath = '/modules/OLSKInputWrapper';
const OLSKInputWrapperClearButton = '.OLSKInputWrapperClearButton';

describe('OLSKInputWrapperDiscovery', function testOLSKInputWrapperDiscovery() {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('on startup', function() {
		browser.assert.elements(OLSKInputWrapperClearButton, 0);
	});

	context('OLSKInputWrapperClearButton', function() {

		it('shows if inputData', async function() {
			browser.fill('input', 'alfa');
			await browser.wait({ element: OLSKInputWrapperClearButton });

			browser.assert.elements(OLSKInputWrapperClearButton, 1);
		});

		it('hides if no inputData', async function() {
			browser.fill('input', '');
			await browser.wait({ element: OLSKInputWrapperClearButton });

			browser.assert.elements(OLSKInputWrapperClearButton, 0);
		});

	});

});

describe('OLSKInputWrapperLanguage', function testOLSKInputWrapperLanguage() {

	['en'].forEach(function (languageCode) {

		context(languageCode, function () {

			const uLocalized = function (inputData) {
				return OLSKTestingLocalized(inputData, languageCode);
			};

			before(function() {
				return browser.visit(kDefaultRoutePath);
			});

			it('if inputData', async function() { 
				browser.fill('input', 'alfa');
				await browser.wait({ element: OLSKInputWrapperClearButton });

				browser.assert.attribute(OLSKInputWrapperClearButton, 'title', uLocalized('OLSKInputWrapperClearButtonText'));
				deepEqual(browser.query(OLSKInputWrapperClearButton).textContent, '');
			});

		});
		
	});
});

describe('OLSKInputWrapperInteraction', function testOLSKInputWrapperInteraction() {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});

	context('OLSKInputWrapperClearButton', function() {

		it('fires callback on click', async function() {
			deepEqual(browser.query('#OLSKInputWrapperInputWrapperDispatchClear').textContent, '0');

			browser.fill('input', 'alfa');
			await browser.wait({ element: OLSKInputWrapperClearButton });

			browser.pressButton(OLSKInputWrapperClearButton);
			await browser.wait({ element: OLSKInputWrapperClearButton });

			deepEqual(browser.query('#OLSKInputWrapperInputWrapperDispatchClear').textContent, '1');
		});

	});

});
