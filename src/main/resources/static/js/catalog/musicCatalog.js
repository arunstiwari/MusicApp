'use strict';

angular.module('musicDB.catalog',['ui.bootstrap']).controller('musicCatalogCtrl',['$scope','$http','musicService', function($scope,$http,musicService){
	$scope.pageTitle='Music Gallery';
	$scope.pageSize=6;
	musicService.getMusicList().success(function(data){
		$scope.musicList = data;
	});
	
}])