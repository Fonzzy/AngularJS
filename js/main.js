// var elements = ['reference', 'vehiculeType', 'pattern_height','pattern_width','pattern_thickness','other'];
// var initEve = ['click'];

// (function(){
// 	modis.inject('controller','add')();
// 	modis.inject('controller','save')();	
// })();

var imports = ['ngRoute'];

var modis = angular.module('modis', imports);

modis.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/tyres.tpl',
        controller: 'TyresController'
	});
}]);
