'use strict';

angular.module('musicDB.catalog',['ui.bootstrap']).controller('musicCatalogCtrl',['$scope','$http','musicService', function($scope,$http,musicService){
	$scope.pageTitle='Music Gallery';
	$scope.pageSize=4;
	musicService.getMusicList().success(function(data){
		$scope.musicList = data;
	});
	
	musicService.getGenreList().success(function(data){
		$scope.genreList=data;
	});
	
}])