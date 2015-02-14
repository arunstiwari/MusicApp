'use strict';

angular.module('musicService.mod',[]).factory('musicService',['$http',function($http){
	var musicAPI = {};
	musicAPI.getMusicList = function(){
		return $http.get("musicList");
	}
	
	return musicAPI;
}]);