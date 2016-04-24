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
	  $scope.textToAnalyse = '';

	  $scope.analyseText = function(){

		  $scope.wordStats = textAnalyserService.getWordsOccurence($scope.textToAnalyse, 2);

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



	  var isValidInputText = function(){
		  return $scope.textToAnalyse.$valid;
	  }

  }]).constant('_', window._);