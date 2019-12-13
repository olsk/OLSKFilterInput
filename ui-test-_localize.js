const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, languageCode);
	};

	describe(`OLSKInputWrapper_Localize-${ languageCode }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
			});
		});

		before(function () {
			return browser.fill('input', 'alfa');
		});
	
		it('localizes OLSKInputWrapperClearButton', function() {
			browser.assert.attribute(OLSKInputWrapperClearButton, 'title', uLocalized('OLSKInputWrapperClearButtonText'));
		});
	
	});

});
