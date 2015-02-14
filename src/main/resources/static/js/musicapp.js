'use strict';

angular.module("musicGalleryApp", [
	'ngRoute',
	'musicDB.catalog',
	'musicService.mod',
	'movieDB.paginate-filter',
	'musicDB.music',
	'genreDB.music'
	
	]).
config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/", {templateUrl: "js/catalog/musicCatalog.html", controller: "musicCatalogCtrl"}).
		when("/music/:id", {templateUrl: "js/music/music.html", controller: "musicCtrl"}).
		when("/genre/:genreName",{templateUrl:"js/catalog/musicCatalog.html", controller: "genreCtrl"}).
		otherwise({redirectTo: "/"});
}]);