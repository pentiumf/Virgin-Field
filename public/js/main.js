var app=angular.module("virginField",["ui.router","ncy-angular-breadcrumb","appController","appDirectives","appServices","appRoutes"]);angular.module("appRoutes",[]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,e,r){t.state("root",{url:"/",templateUrl:"views/home.html",controller:"homeController",ncyBreadcrumb:{label:"Home page"}}).state("contact",{url:"/contact",templateUrl:"views/contact.html",controller:"contactController",ncyBreadcrumb:{label:"Contact Page"}}).state("solutions",{url:"/solutions",templateUrl:"views/solutions.html",controller:"solutionsController",ncyBreadcrumb:{label:"Solutions"}}).state("solutionnsDetail",{url:"/solutions/:name",templateUrl:"views/solutionsDetails.html",controller:"solutionsDetailsController",ncyBreadcrumb:{label:"Solution Detail",parent:"solutions"}}).state("trainingCategory",{url:"/training-categories",templateUrl:"views/trainingCategories.html",controller:"trainingCategoriesController",ncyBreadcrumb:{label:"Training Category"}}).state("training/",{url:"/training/:name",templateUrl:"views/training.html",controller:"trainingController",ncyBreadcrumb:{label:"Trainings",parent:"trainingCategory"}}).state("trainingDetail",{url:"/training/courses/:name",templateUrl:"views/training-details.html",controller:"trainingDetailsController",ncyBreadcrumb:{label:"Training Details"}}).state("enroll",{url:"/enroll",templateUrl:"views/enroll.html",controller:"enrollController",ncyBreadcrumb:{label:"Enroll"}}).state("partners",{url:"/partners",templateUrl:"views/partners.html",controller:"partnersController",ncyBreadcrumb:{label:"Partners"}}).state("products",{url:"/products",templateUrl:"views/products.html",controller:"productsController",ncyBreadcrumb:{label:"Our Products"}}).state("productsListings",{url:"/products/:name",templateUrl:"views/productsListings.html",controller:"productsListingsController",ncyBreadcrumb:{label:"Products Listings",parent:"products"}}).state("comingSoon",{url:"/coming-soon",templateUrl:"views/comingSoon.html",controller:"comingSoonController",ncyBreadcrumb:{label:"Content Coming Soon"}}).state("404",{url:"/404",templateUrl:"views/404.html"}),e.otherwise("/")}]),angular.module("appController",[]).controller("mainController",["$scope","homeFactory",function(t,e){e.getSideBarData(function(e){t.sideBarData=e})}]).controller("homeController",["$scope","$interval",function(t,e){}]).controller("solutionsController",["$scope","homeFactory",function(t,e){t.loader=!0,e.getSideBarData(function(e){t.data=e,t.solutionData=t.data[0].links,t.loader=!1})}]).controller("solutionsDetailsController",["$scope","$stateParams","homeFactory",function(t,e,r){t.loader=!0;var n=e.name;r.getSolutionsDetail(n,function(e){t.data=e,t.loader=!1})}]).controller("trainingCategoriesController",["$scope","homeFactory",function(t,e){t.loader=!0,e.getTrainingCategories(function(e){t.data=e,t.loader=!1})}]).controller("trainingController",["$scope","$stateParams","homeFactory",function(t,e,r){var n=e.name;t.loader=!0,r.getTrainingCourses(n,function(e){t.data=e,t.loader=!1})}]).controller("trainingDetailsController",["$scope","$stateParams","homeFactory",function(t,e,r){t.loader=!0;var n=e.name;r.getTrainingDetails(n,function(e){t.data=e,t.loader=!1})}]).controller("enrollController",["$scope","$stateParams","homeFactory",function(t,e,r){r.getCountries(function(e){t.countries=e}),t.sendRequest=function(){alert("bik")}}]).controller("partnersController",["$scope","homeFactory",function(t,e){t.loader=!0,e.getPartners(function(e){t.partners=e,t.loader=!1})}]).controller("productsController",["$scope","homeFactory",function(t,e){t.loader=!0,e.getProductsCategory(function(e){t.productsCat=e,t.loader=!1})}]).controller("productsListingsController",["$scope","$stateParams","homeFactory",function(t,e,r){t.loader=!0;var n=e.name;r.getProducts(n,function(e){t.data=e,t.loader=!1})}]).controller("contactController",["$scope","$stateParams","homeFactory",function(t,e,r){}]).controller("comingSoonController",["$scope","homeFactory",function(t,e){}]),angular.module("appServices",[]).factory("homeFactory",["$http","$location","$sce",function(t,e,r){var n={};return n.getSideBarData=function(e){t({url:"jsonData/sidebarContentData.json",method:"GET"}).then(function(t){e(t.data)},function(t){})},n.getTrainingCategories=function(e){t({url:"jsonData/trainingData/trainingCategory.json",method:"GET"}).then(function(t){e(t.data)},function(t){})},n.getTrainingCourses=function(r,n){t({url:"jsonData/trainingData/trainings/"+r+".json",method:"GET"}).then(function(t){n(t.data)},function(t){e.url("/404")})},n.getTrainingDetails=function(r,n){t({url:"jsonData/trainingData/trainingDetails/"+r+".json",method:"GET"}).then(function(t){n(t.data)},function(t){e.url("/404")})},n.getCountries=function(e){var n="jsonData/countries.json";r.trustAsResourceUrl(n);t({url:n,method:"GET"}).then(function(t){e(t.data)},function(t){})},n.getSolutionsDetail=function(r,n){t({url:"jsonData/solutionsData/"+r+".json",method:"GET"}).then(function(t){n(t.data)},function(t){e.url("/404")})},n.getPartners=function(e){t({url:"jsonData/partners.json",method:"GET"}).then(function(t){e(t.data)},function(t){})},n.getProductsCategory=function(e){t({url:"jsonData/productsCat.json",method:"GET"}).then(function(t){e(t.data)},function(t){})},n.getProducts=function(r,n){t({url:"jsonData/productsData/"+r+".json",method:"GET"}).then(function(t){n(t.data)},function(t){e.url("/404")})},n}]),angular.module("appDirectives",[]).directive("navBar",function(){return{link:function(t,e,r){var n=e.find(".nav-links"),o=e.find("#settingsMenu"),a=e.find("#settingsMenuClose");o.click(function(){n.show(),$(this).hide(),a.show(),a.click(function(){n.hide(),$(this).hide(),o.show()})})},templateUrl:"directiveTemplates/navbar.html"}}).directive("sideBar",function(){return{link:function(t,e,r){$(window).resize(function(){$(window).width()<850&&($(".slide-link").removeAttr("style"),$(".slide-bar-wrapper").removeClass("current"),$(".close-slideBar").removeClass("current2"),$(".nav-settings-menu").removeAttr("style")),$(window).width()>850&&($(".slide-bar-wrapper").removeAttr("style"),$(".slide-bar-wrapper").removeClass("current3"),$(".sidebar-container").removeAttr("style"),$("#menuBar").removeAttr("style"),$("#menuBarClose").removeAttr("style"),$(".nav-search").removeAttr("style"),$("#settingsMenu").removeAttr("style"),$("#settingsMenuClose").removeAttr("style"),$(".nav-links").removeAttr("style"))}),$("#menuBar").click(function(){$(".nav-search").fadeOut(),$(".nav-settings-menu").fadeOut(),$(".sidebar-container").show(),$(this).hide(),$("#menuBarClose").show(),$("#menuBarClose").click(function(){$(".nav-search").fadeIn(),$(".nav-settings-menu").fadeIn(),$(".sidebar-container").hide(),$(this).hide(),$("#menuBar").show()})}),$("body").on("click",".close-responsiveTab",function(){$(".slide-bar-wrapper").removeClass("current3")}),$(".responsive-slide-link").click(function(){$(".slide-bar-wrapper").removeAttr("style"),$(".slide-bar-wrapper").removeClass("current3");var t=$(this).attr("data-tab");$("#"+t).addClass("current3")}),$(".slide-link").click(function(){$(".close-slideBar").removeClass("current2"),$(this).prev().addClass("current2"),$(".slide-link").css("display","block")}),$(".slide-link").click(function(){var t=$(this).attr("data-tab");$(".slide-link").removeClass("current"),$(".slide-bar-wrapper").removeClass("current"),$(this).hide(),$(this).prev().addClass("current2"),$("#"+t).addClass("current"),$(this).prev().click(function(){$(this).removeClass("current2"),$(this).next().show();$(this).next().attr("data-tab");$("#"+t).removeClass("current")})}),$("body").on("click",".sidebar-head-link",function(){var t=$(this).attr("data-id");$(window).width()>=800&&($("#"+t).removeClass("current"),$(".close-slideBar").removeClass("current2"),$(".slide-link").show()),$(window).width()<=800&&($("#"+t).removeClass("current3"),$(".sidebar-container").hide(),$("#menuBarClose").hide(),$("#menuBar").show())}),$("body").on("click",".view-all a",function(){var t=$(this).attr("data-id");$(window).width()>=800&&($("#"+t).removeClass("current"),$(".close-slideBar").removeClass("current2"),$(".slide-link").show()),$(window).width()<=800&&($("#"+t).removeClass("current3"),$(".sidebar-container").hide(),$("#menuBarClose").hide(),$("#menuBar").show())}),$("body").on("click",".sidebar-links a",function(){var t=$(this).attr("data-id");$(window).width()>=800&&($("#"+t).removeClass("current"),$(".close-slideBar").removeClass("current2"),$(".slide-link").show()),$(window).width()<=800&&($("#"+t).removeClass("current3"),$(".sidebar-container").hide(),$("#menuBarClose").hide(),$("#menuBar").show())})},templateUrl:"directiveTemplates/sidebar.html"}}).directive("homeParalax",["$interval",function(t){return{restrict:"A",link:function(e,r,n){function o(){var t=$(".currentTraining"),e=t.next();0===e.length&&(e=$(".trainingCapt").first()),t.removeClass("currentTraining"),e.addClass("currentTraining")}var a;e.start=function(){e.stop(),a=t(o,3e3)},e.stop=function(){t.cancel(a)},e.start(),e.$on("$destroy",function(){e.stop()})},templateUrl:"directiveTemplates/homeParalax.html"}}]).directive("topAdds",function(){return{restrict:"E",link:function(t,e,r){e.find(".carousel").flickity({cellAlign:"left",contain:!0,autoPlay:!0,draggable:!1})},templateUrl:"directiveTemplates/topAdds.html"}}).directive("homeCarousel",function(){return{restrict:"A",link:function(t,e,r){e.find(".carousel").flickity({cellAlign:"left",contain:!0,autoPlay:!0,draggable:!0})},templateUrl:"directiveTemplates/horizontalHomeSlider.html"}});