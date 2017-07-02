angular.module("appRoutes", [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('root', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .state('login', {
        url: '/login',
        template: '<h1>This is the login page</h1>'
    })
    .state('community', {
        url: '/community',
        template: '<h1>This is the community page</h1>'
    })
    .state('blog', {
        url: '/blog',
        template: '<h1>This is the blog page</h1>'
    }).state('market', {
        url: '/market',
        template: '<h1>This is the markert page</h1>'
    }).state('training', {
        url: '/training',
        template: '<h1>This is the training page</h1>'
    }).state('store', {
        url: '/store',
        template: '<h1>This is the store page</h1>'
    });
//    .state('noRoot', {
//        url: '*path',
//        template: '<h1>Route... not found</h1>'
//    });
    $urlRouterProvider.otherwise('/');
    //$locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
}]);

