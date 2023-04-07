const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKInputWrapper_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		before(function () {
			return browser.fill('input', 'alfa');
		});
	
		it('localizes OLSKInputWrapperClearButton', function() {
			return browser.assert.attribute(OLSKInputWrapperClearButton, 'title', uLocalized('OLSKInputWrapperClearButtonText'));
		});
	
	});

});
