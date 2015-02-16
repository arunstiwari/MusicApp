'use strict';

angular.module("genreDB.music",['ui.bootstrap'])
.controller('genreCtrl', ['$scope', 'musicService', '$routeParams', '$filter', function ($scope, musicService, $routeParams, $filter) {

	$scope.pageSize = 4;
	$scope.genreName = $routeParams.genreName;
	$scope.pageTitle = $scope.genreName + " music";

	musicService.getMusicList().success(function(data){
		$scope.musicList=$filter('filter')(data, function(music){
			return $filter('filter')(music.genres, {name: $scope.genreName}).length;
		});
	});

	musicService.getGenreList().success(function(data){
		$scope.genreList=data;
	});

}])