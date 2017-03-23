define(['app'], function (app) {
	 app.controller('navCtrl', ["$scope", function (scope) {
	 	scope.navdata = {
	 		left:[
	 			{url: '', val: '首页'},
	 			{url: '', val: '运河信息',active:true},
	 			{url: '', val: '专业定制'},
	 			{url: '', val: '商业服务'},
	 			{url: '', val: '智能服务'},
	 		],
	 		right:[
	 			{url: '/users', val: '登录'},
	 			{url: '', val: '注册'}
	 		]
	 	};
	}]);
});