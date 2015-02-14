'use strict';

angular.module('musicService.mod',[]).factory('musicService',['$http',function($http){
	var musicAPI = {};
	musicAPI.getMusicList = function(){
		return $http.get("musicList");
	}
	
	musicAPI.getGenreList = function(){
		return $http.get("genreList");
	}
	return musicAPI;
}]);