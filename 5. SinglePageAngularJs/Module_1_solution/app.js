(function () {
	/* body... */
	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		// body... 
		$scope.items = "";
		$scope.message = "";
		$scope.state = "";
		$scope.mesColor = "";
		$scope.itemNo = function () {
			/* body... */
			var number = numberofItems($scope.items);

			if (number === 0) {
			  $scope.message = 'Enter data first';
			  $scope.state = 'has-error';
			  $scope.mesColor = 'red';
			} else if (number> 3) {
			  $scope.message = 'Too much';
			  $scope.state = 'has-success';
			  $scope.mesColor = 'green';
			} else if (number <= 3) {
			  $scope.message = 'Enjoy!';
			  $scope.state = 'has-success'
			  $scope.mesColor = 'green';
				
			}
		};

		function numberofItems (items) {
			 if (items === "") {
			 	return 0;
			 } else {
			 	return items.trim().split(",").length;
			 }
		}
	}
})();