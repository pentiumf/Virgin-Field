angular.module("appRoutes", [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
    .state('root', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeController'
    }).state('training', {
        url: '/training',
        templateUrl: 'views/training.html',
        controller: 'trainingController'
    })
    .state('trainingDetail', {
        url: '/training/:name',
        templateUrl: 'views/training-details.html',
        controller: 'trainingDetailsController'
    }).state('enroll', {
        url: '/enroll',
        templateUrl: 'views/enroll.html',
        controller: 'enrollController'
    }).state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
    });
    $urlRouterProvider.otherwise('/');
    //$locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
}]);

