angular.module("appRoutes", [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
    .state('root', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeController',
        ncyBreadcrumb: {
            label: 'Home page'
        }
    }).state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'contactController',
        ncyBreadcrumb: {
            label: 'Contact Page'
        }
    }).state('solutions', {
        url: '/solutions',
        templateUrl: 'views/solutions.html',
        controller: 'solutionsController',
        ncyBreadcrumb: {
            label: 'Solutions'
        }
    }).state('solutionnsDetail', {
        url: '/solutions/:name',
        templateUrl: 'views/solutionsDetails.html',
        controller: 'solutionsDetailsController',
        ncyBreadcrumb: {
            label: 'Solution Detail',
            parent: 'solutions'
        }
    }).state('trainingCategory', {
        url: '/training-categories',
        templateUrl: 'views/trainingCategories.html',
        controller: 'trainingCategoriesController',
        ncyBreadcrumb: {
            label: 'Training Category'
        }
    }).state('training/', {
        url: '/training/:name',
        templateUrl: 'views/training.html',
        controller: 'trainingController',
        ncyBreadcrumb: {
            label: 'Trainings',
            parent: 'trainingCategory'
        }
    })
    .state('trainingDetail', {
        url: '/training/courses/:name',
        templateUrl: 'views/training-details.html',
        controller: 'trainingDetailsController',
        ncyBreadcrumb: {
            label: 'Training Details'
        }
    }).state('enroll', {
        url: '/enroll',
        templateUrl: 'views/enroll.html',
        controller: 'enrollController',
        ncyBreadcrumb: {
            label: 'Enroll'
        }
    }).state('partners', {
        url: '/partners',
        templateUrl: 'views/partners.html',
        controller: 'partnersController',
        ncyBreadcrumb: {
            label: 'Partners'
        }
    }).state('products', {
        url: '/products',
        templateUrl: 'views/products.html',
        controller: 'productsController',
        ncyBreadcrumb: {
            label: 'Our Products'
        }
    }).state('productsListings', {
        url: '/products/:name',
        templateUrl: 'views/productsListings.html',
        controller: 'productsListingsController',
        ncyBreadcrumb: {
            label: 'Products Listings',
            parent: 'products'
        }
    }).state('comingSoon', {
        url: '/coming-soon',
        templateUrl: 'views/comingSoon.html',
        controller: 'comingSoonController',
        ncyBreadcrumb: {
            label: 'Content Coming Soon'
        }
    }).state('cloudServices', {
        url: '/cloud-service',
        templateUrl: 'views/cloudServices.html',
        controller: 'cloudServicesController',
        ncyBreadcrumb: {
            label: 'Cloud Services'
        }
    }).state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
    });
    $urlRouterProvider.otherwise('/');
    //$locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
}]);

