import { throws, deepEqual } from 'assert';

const browser = new OLSKBrowser();
const kDefaultRoutePath = '/modules/OLSKFilterInput';
const OLSKFilterInput = '.OLSKFilterInput';
const OLSKFilterInputClearButton = '.OLSKFilterInputClearButton';

describe('OLSKFilterInputDiscovery', function testOLSKFilterInputDiscovery() {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('on startup', function() {
		browser.assert.elements(OLSKFilterInput, 1);
		browser.assert.attribute(OLSKFilterInput, 'accesskey', 'f');

		browser.assert.elements(OLSKFilterInputClearButton, 0);
	});

	context('OLSKFilterInputClearButton', function() {

		it('shows if inputData', async function() {
			browser.pressButton('#OLSKFilterInputTestSetFilled');
			await browser.wait({ element: OLSKFilterInputClearButton });

			browser.assert.elements(OLSKFilterInputClearButton, 1);
		});

		it('hides if no inputData', async function() {
			browser.pressButton('#OLSKFilterInputTestSetBlank');
			await browser.wait({ element: OLSKFilterInputClearButton });

			browser.assert.elements(OLSKFilterInputClearButton, 0);
		});

	});

});

describe('OLSKFilterInputLanguage', function testOLSKFilterInputLanguage() {

	['en'].forEach(function (languageCode) {

		context(languageCode, function () {

			const uLocalized = function (inputData) {
				return OLSKTestingLocalized(inputData, languageCode);
			};

			before(function() {
				return browser.visit(kDefaultRoutePath);
			});

			it('on startup', function() {
				browser.assert.attribute(OLSKFilterInput, 'placeholder', uLocalized('OLSKFilterInputPlaceholderText'));
			});

			it('if inputData', async function() { 
				browser.pressButton('#OLSKFilterInputTestSetFilled');
				await browser.wait({ element: OLSKFilterInputClearButton });

				browser.assert.attribute(OLSKFilterInputClearButton, 'title', uLocalized('OLSKFilterInputClearButtonText'));
				deepEqual(browser.query(OLSKFilterInputClearButton).textContent, '');
			});

			it('on set FilterInputPlaceholder filled', async function() {
				browser.pressButton('#OLSKFilterInputTestSetFilterInputPlaceholderFilled');
				await browser.wait({ element: OLSKFilterInput });

				browser.assert.attribute(OLSKFilterInput, 'placeholder', 'alfa');
			});

			it('on set FilterInputPlaceholder blank', async function() {
				browser.pressButton('#OLSKFilterInputTestSetFilterInputPlaceholderBlank');
				await browser.wait({ element: OLSKFilterInput });

				browser.assert.attribute(OLSKFilterInput, 'placeholder', uLocalized('OLSKFilterInputPlaceholderText'));
			});

		});
		
	});
});

describe('OLSKFilterInputInteraction', function testOLSKFilterInputInteraction() {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});

	context('OLSKFilterInputClearButton', function() {

		it('fires callback on click', async function() {
			deepEqual(browser.query('#OLSKFilterInputTestRun').textContent, '0');

			browser.fill(OLSKFilterInput, 'alfa');
			await browser.wait({ element: OLSKFilterInputClearButton });

			browser.pressButton(OLSKFilterInputClearButton);
			await browser.wait({ element: OLSKFilterInputClearButton });

			deepEqual(browser.query('#OLSKFilterInputTestRun').textContent, '1');
		});

	});

});
