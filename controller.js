exports.OLSKControllerRoutes = function() {
	return [
		{
			OLSKRouteSignature: 'OLSKInputWrapperStubRoute',
			OLSKRoutePath: '/stub/OLSKInputWrapper',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(require('path').join(__dirname, 'stub-view'));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		},
	];
};
