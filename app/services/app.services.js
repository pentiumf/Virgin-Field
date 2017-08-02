angular.module("appServices", [])
.factory('homeFactory', ['$http', '$location', '$sce', function($http, $location, $sce) {
    var homeServices = {};
    
    //Sidebar
    homeServices.getSideBarData = function(cb) {
        $http({
            url: 'jsonData/sidebarContentData.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
    }
    
    //Training 
    homeServices.getTrainingCategories = function(cb) {
        $http({
            url: 'jsonData/trainingData/trainingCategory.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
    }
    
    homeServices.getTrainingCourses = function(a, cb) {
        $http({
            url: 'jsonData/trainingData/trainings/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    
    homeServices.getTrainingDetails = function(a, cb) {
        $http({
            url: 'jsonData/trainingData/trainingDetails/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    //Country
    homeServices.getCountries = function(cb) {
        var url = 'jsonData/countries.json';
        var trustedUrl = $sce.trustAsResourceUrl(url);
        
        $http({
            url: url,
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
        
    }
    
    
    //Solution
    homeServices.getSolutionsDetail = function(a , cb) {
        $http({
            url: 'jsonData/solutionsData/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    //Partners
    homeServices.getPartners = function(cb) {
        $http({
            url: 'jsonData/partners.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
    }
    
    //Products Category
    homeServices.getProductsCategory = function(cb) {
        $http({
            url: 'jsonData/productsCat.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
    }
    
    //Producst
    homeServices.getProducts = function(a , cb) {
        $http({
            url: 'jsonData/productsData/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    
    
    return homeServices;
    
}]);















