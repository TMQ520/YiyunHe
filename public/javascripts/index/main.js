
require.config({
	paths:{
		'angular': '/angular/angular.min',
		'bootstrap': '/bootstrap/dist/js/bootstrap.min', 
		'jquery': '/jquery/dist/jquery',
		'nav': '/javascripts/common/nav',
		'navCtrl': '/javascripts/common/navCtrl',
		'headCtrl': '/javascripts/common/headCtrl',
		'serverInfoCtrl': '/javascripts/common/serverInfoCtrl',
	},
	shim:{
		'bootstrap':{
			exports: "bootstrap",
			deps:[
				'jquery'
			]
		},
		'angular':{
			exports:'angular',
			deps:[
				'bootstrap'
			]
		}
	}
});

require([
			'bootstrap',
			'angular',
			'app',
			'nav',
			'headCtrl',
			'serverInfoCtrl',
			'navCtrl',
		], function (boot, angular) {
			angular.bootstrap(document, ["indexApp"]); 	//定义angular模块
});