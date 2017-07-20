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
}]).directive('topAdds', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attr) {
            var carou = elem.find('.carousel');
            carou.flickity({
              cellAlign: 'left',
              contain: true,
              autoPlay: true,
               draggable: false   
            });
        },
        templateUrl: 'templates/topAdds.html'
    }
}).directive('homeCarousel', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            var carou = elem.find('.carousel');
            carou.flickity({
              cellAlign: 'left',
              contain: true,
              autoPlay: true,
              draggable: true   
            });
        },
        templateUrl: 'templates/horizontalHomeSlider.html'
    }
});























