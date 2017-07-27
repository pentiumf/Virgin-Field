angular.module("appRoutes", [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
    .state('root', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeController'
    }).state('solutions', {
        url: '/solutions',
        templateUrl: 'views/solutions.html',
        controller: 'solutionsController'
    }).state('solutionnsDetail', {
        url: '/solutions/:name',
        templateUrl: 'views/solutionsDetails.html',
        controller: 'solutionsDetailsController'
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
    }).state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    }).state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
    });
    $urlRouterProvider.otherwise('/');
    //$locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
}]);

