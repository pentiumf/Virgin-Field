<!DOCTYPE html>
<html lang="en" ng-app="virginField">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000">
    <meta name="apple-mobile-web-app-status-bar-style" content="#000">
    <meta name="msapplication-navbutton-color" content="#000">
    <meta name="description" content="Number one solution to Big data analytics, Internet of thongs, Artificial Interligence">
    <meta name="keywords" content="IoT, internet of things, Machine Learning, M2M, Big Data Analytics, Artificial Interligence, AI, Training"/>
    <meta name="author" content="Virgin Field">
    <title>Virgin Fields</title>
<!--    <base href="/">-->
    <link rel="stylesheet" href="public/css/libs.css">
    <link rel="stylesheet" href="public/css/style.css">
    
</head>
<body ng-controller="mainController">
   <div class="overlay"></div>

   <nav-bar></nav-bar>
   
   <search-engine></search-engine>
   
   <side-bar></side-bar>
   
    
   <div id="View" class="clearfix" ui-view></div>
   
   
   <footer id="footer" class="clearfix" ng-include src="'templates/footer.html'">
   </footer>
    
    
    
    <script src="public/js/libs.js"></script>
    <script src="public/js/main.js"></script>
</body>
</html>