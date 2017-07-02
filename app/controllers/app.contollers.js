angular.module("appController", [])
.controller('mainController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    
    homeFactory.getSideBarData(function(result) {
        $scope.sideBarData = result;
    });

}])
.controller('homeController', ['$scope', '$interval', function($scope, $interval) {
    
}]);









