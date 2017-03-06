define(['app'],function (app) {
	app.controller('serverInfoCtrl', ['$scope', function(scope){
		scope.data = [
			{url:'', val: '服务信息',active:true},
			{url:'', val: '商务信息'}
		];
	}])
});