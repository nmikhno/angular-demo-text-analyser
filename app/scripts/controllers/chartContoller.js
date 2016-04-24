'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', 'textAnalyserService', function ($scope, textAnalyserService) {
	  // by default input is empty
	  $scope.textToAnalyse = '';

	  $scope.analyseText = function(){

		  $scope.wordStats = textAnalyserService.getWordsOccurence($scope.textToAnalyse, 2);

		  // Display message in case the input
		  // is too short to show chart
		  if (_.size($scope.wordStats) == 0) {
			  $scope.bar = {
				  labels: ['The text is to short'],
				  data: [['foo']]
			  };


		  }else if(_.size($scope.wordStats) > 0) {
			  $scope.bar = {
				  labels: Object.keys($scope.wordStats),
				  data: [_.values($scope.wordStats)]
			  };
		  }

	  };

	// Lodash dependency injection.
	// It is quite possible not use this library here
	// and it is a quick way to iterate over an object.
	// Core version takes extra 14 kb but makes much more profit
  }]).constant('_', window._);