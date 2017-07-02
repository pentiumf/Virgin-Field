angular.module("appDirectives", []).directive("navBar", function () {
    return {
        link: function (scope, elem, attr) {
            var navLinks = elem.find('.nav-links');
            var settings = elem.find('#settingsMenu');
            var settingsClose = elem.find("#settingsMenuClose");
            
            settings.click(function() {
                navLinks.show();
                $(this).hide();
                settingsClose.show();
                settingsClose.click(function() {
                    navLinks.hide();
                    $(this).hide();
                    settings.show();
                });
            });
            
            $(document).click(function(e) {
                
                var targetId = $(e.target).parent().attr('id');
                
                if ($(window).width() > 850) {
                    if (targetId != "searchEnginePul") {
                        $("#searchEngineClose").hide();
                        $("#searchEnginePul").show();
                        $("#searchEngine").hide();
                    }
                    $("#searchEngine").click(function(e) {
                        e.stopPropagation();
                    });   
                }
                
                
                if ($(window).width() < 850) {              
                    
                    if (targetId != "settingsMenu") {
                        settingsClose.hide();
                        settings.show();
                        $(".nav-links").hide();

                    }
                    
                    if (targetId != "searchEnginePul") {
                        $("#searchEngineClose").hide();
                        $("#searchEnginePul").show();
                        $("#searchEngine").hide();
                    }
                    
                    $("#searchEngine").click(function(e) {
                        e.stopPropagation();
                    });   
                    
                }
                
                
            });
            
        },
        templateUrl: 'templates/navbar.html'
    }
}).directive("sideBar", function () {
    return {
        link: function (scope, elem, attr) { 
            
            $(window).resize(function() {
                if ($(window).width() < 850) {
                    $(".slide-link").removeAttr("style");
                    $(".slide-bar-wrapper").removeClass("current");
                    $(".close-slideBar").removeClass("current2");
                    $(".nav-settings-menu").removeAttr("style");
                }
                if ($(window).width() > 850) {
                    $(".slide-bar-wrapper").removeAttr("style");
                    $(".slide-bar-wrapper").removeClass("current3");
                    $(".sidebar-container").removeAttr("style");
                    $("#menuBar").removeAttr("style");
                    $("#menuBarClose").removeAttr("style");
                    $(".nav-search").removeAttr("style");
                    $("#settingsMenu").removeAttr("style");
                    $("#settingsMenuClose").removeAttr("style");
                    $(".nav-links").removeAttr("style");
                }
                
            });
            
            $("#menuBar").click(function() {
                $(".nav-search").fadeOut();
                $(".nav-settings-menu").fadeOut();
                $(".sidebar-container").show();
                $(this).hide();
                $("#menuBarClose").show();
                //callback
                $("#menuBarClose").click(function() {
                    $(".nav-search").fadeIn();
                    $(".nav-settings-menu").fadeIn();
                    $(".sidebar-container").hide();
                    $(this).hide();
                    $("#menuBar").show();
                });
            });
            
            
            $('body').on("click", ".close-responsiveTab", function() {
                $('.slide-bar-wrapper').removeClass('current3');
                //$(".slide-bar-wrapper").removeAttr("style");
            });
            
            $(".responsive-slide-link").click(function() {
                $(".slide-bar-wrapper").removeAttr("style");
                $('.slide-bar-wrapper').removeClass('current3');
               var tab_id = $(this).attr('data-tab');
                $("#" + tab_id).addClass('current3');
            });
            
            $(".slide-link").click(function () {
                $(".close-slideBar").removeClass("current2");
                $(this).prev().addClass("current2");
                $(".slide-link").css("display", "block");
            });
            
            $('.slide-link').click(function () {
                var tab_id = $(this).attr('data-tab');
                $('.slide-link').removeClass('current');
                $('.slide-bar-wrapper').removeClass('current');
                $(this).hide();
                $(this).prev().addClass("current2");
                $("#" + tab_id).addClass('current');
                //callback
                $(this).prev().click(function () {
                    $(this).removeClass("current2");
                    $(this).next().show();
                    var attribute = $(this).next().attr("data-tab");
                    $("#" + tab_id).removeClass('current');
                });
            });
            
        }
        , templateUrl: 'templates/sidebar.html'
    }
}).directive('homeSlide', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            $(document).ready(function() {
				var slideshow = new Slideshow({
					id : 'homeSlide',
					loop: true,
                    autoplay: true,
                    autoplay_start_delay : 4000,
                    displayTime: 5000
				});
			});
        },
        templateUrl: 'templates/homeSlider.html'
    }
}).directive('homeParalax', ['$interval', function($interval) {
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            var promise;
            
            function moveRight() {
                var current = $('.currentTraining');
                var next = current.next();

                if (next.length === 0) {
                    next = $(".trainingCapt").first();
                }

                current.removeClass('currentTraining');
                next.addClass('currentTraining');
            }
            
            scope.start = function() {
                scope.stop();
                promise = $interval(moveRight, 3000);
            }
            
            scope.stop = function() {
                $interval.cancel(promise);
            }
            
            scope.start();
            scope.$on('$destroy', function() {
              scope.stop();
            });
        },
        templateUrl: 'templates/homeParalax.html'
    }
}]).directive('trainingCarousel', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attr) {
            var carou = elem.find('.carousel');
            carou.flickity({
              cellAlign: 'left',
              contain: true,
              autoPlay: true    
            });
        },
        templateUrl: 'templates/trainingCarousel.html'
    }
}).directive('searchEngine', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attr) {
            
            $('#searchEnginePul').click(function() {
                var search = elem.find('#searchEngine');
                var close = $("#searchEngineClose");
                var open = $('#searchEnginePul');
                $(this).hide();
                search.slideDown(100);
                close.show();
                close.click(function() {
                    $(this).hide();
                    search.slideUp(100);
                    open.show();
                });
            });
        },
        templateUrl: 'templates/searchTemp.html'
    }
});























