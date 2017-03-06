define(['app'], function (app) {
	app.directive('navEcanal',function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {// {} = isolate, true = child, false/undefined = no change
				data: "=navdata"	//隔离作用域
			}, 
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: '/html/common/nav.html',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			/*link: function($scope, iElm, iAttrs, controller) {
				
			}*/
		};
	});
});