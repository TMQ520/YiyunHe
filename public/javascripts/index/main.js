
require.config({
	paths:{
		'angular': '/angular/angular.min',
		'bootstrap': '/bootstrap/dist/js/bootstrap.min', 
		'jquery': '/jquery/dist/jquery',
		'nav': '/javascripts/common/nav',
		'navCtrl': '/javascripts/common/navCtrl',
		'headCtrl': '/javascripts/common/headCtrl',
		'serverInfoCtrl': '/javascripts/common/serverInfoCtrl',
		'NewsCtrl': '/javascripts/common/NewsCtrl',
		'slide': '/javascripts/common/slide',
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
		},
		'slide': {
			exports: 'slide',
			deps: [
				'jquery'
			]
		}
	}
});

require([
			'bootstrap',
			'angular',
			'app',
			'nav',
			'NewsCtrl',
			'headCtrl',
			'serverInfoCtrl',
			'navCtrl',
			'slide'
		], function (boot, angular) {
			angular.bootstrap(document, ["indexApp"]); 	//定义angular模块
});