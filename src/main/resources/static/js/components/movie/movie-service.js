'use strict';

angular.module('movieDB.movie-service', [])
	.factory('movieAPIservice', ['$http', function($http){
		var movieAPI = {};

		movieAPI.getMovies = function() {
			return $http.get("js/json/movies.json");
		}

		movieAPI.getGenres = function() {
			return $http.get("js/json/genres.json");
		}

		return movieAPI;
	}]);