'use strict';

angular.module('musicDB.music', ['ui.bootstrap'])
	.controller('musicCtrl', ['$scope', '$filter', 'musicService', '$routeParams', function($scope, $filter, musicService, $routeParams){
		$scope.musicId = $routeParams.id;

		musicService.getMusicList().success(function(data){
			$scope.music = $filter('filter')(data, {id: parseInt($scope.musicId)}, true)[0];
		});
	}]);