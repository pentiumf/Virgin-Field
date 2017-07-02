angular.module("appServices", [])
.factory('homeFactory', ['$http', '$location', function($http, $location) {
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
    
    return homeServices;
    
}]);