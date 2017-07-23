angular.module("appServices", [])
.factory('homeFactory', ['$http', '$location', '$sce', function($http, $location, $sce) {
    var homeServices = {};
    
    homeServices.getSideBarData = function(cb) {
        $http({
            url: 'jsonData/sidebarContentData.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    
    homeServices.getTrainingData = function(a, cb) {
        $http({
            url: 'trainingPageData/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    homeServices.getTrainingCourses = function(cb) {
        $http({
            url: 'jsonData/trainingCourses.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    homeServices.getCountries = function(cb) {
        var url = 'jsonData/countries.json';
        var trustedUrl = $sce.trustAsResourceUrl(url);
        
        $http({
            url: url,
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
        
    }
    
    
    return homeServices;
    
}]);
