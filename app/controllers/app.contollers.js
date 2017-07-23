angular.module("appController", [])
.controller('mainController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    
    homeFactory.getSideBarData(function(result) {
        $scope.sideBarData = result;
    });

}])
.controller('homeController', ['$scope', '$interval', function($scope, $interval) {
    
}])
.controller('trainingController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
    homeFactory.getTrainingCourses(function(result) {
       $scope.data = result;    
    });
    
}])
.controller('trainingDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
    var name = $stateParams.name;
    
    homeFactory.getTrainingData(name, function(result) {
       $scope.data = result;
    });
    
}])
.controller('enrollController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
    homeFactory.getCountries(function(result) {
       $scope.countries = result;
    });
    
    $scope.sendRequest = function() {
        alert('bik')
    }
    
}]);









