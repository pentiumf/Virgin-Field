angular.module("appController", [])
.controller('mainController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    
    homeFactory.getSideBarData(function(result) {
        $scope.sideBarData = result;
    });

}])
.controller('homeController', ['$scope', '$interval', function($scope, $interval) {
    
}])
.controller('solutionsController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    $scope.loader = true;
    
    homeFactory.getSideBarData(function(result) {
        $scope.data = result;
        $scope.solutionData = $scope.data[0].links;
        $scope.loader = false;
    });
    
}])
.controller('solutionsDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var param = $stateParams.name;
    
    homeFactory.getSolutionsDetail(param, function(result) {
       $scope.data = result;
        $scope.loader = false;
    });
    
}])
.controller('trainingCategoriesController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    $scope.loader = true;
    
    homeFactory.getTrainingCategories(function(result) {
       $scope.data  = result;
       $scope.loader = false;
    });
    
}])
.controller('trainingController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    var param = $stateParams.name;
    $scope.loader = true;
    
    homeFactory.getTrainingCourses(param, function(result) {
       $scope.data = result;
       $scope.loader = false;
            
    });
    
}])
.controller('trainingDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var name = $stateParams.name;

    
    homeFactory.getTrainingDetails(name, function(result) {
       $scope.data = result;
       $scope.loader = false;
    });
    
}])
.controller('enrollController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
    homeFactory.getCountries(function(result) {
       $scope.countries = result;
    });
    
    $scope.sendRequest = function() {
        alert('bik')
    }
    
}])
.controller('partnersController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    $scope.loader = true;
    homeFactory.getPartners(function(result) {
       $scope.partners = result;
        $scope.loader = false;
    });
    
}])
.controller('productsController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    $scope.loader = true;
    
    homeFactory.getProductsCategory(function(result) {
       $scope.productsCat = result;
        $scope.loader = false;
    });
    
}])
.controller('productsListingsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var param = $stateParams.name;
    
    homeFactory.getProducts(param, function(result) {
       $scope.data = result;
        $scope.loader = false;
    });
    
    
}])
.controller('contactController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
    console.log("contactus....")
    
}]);









