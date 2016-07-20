/**
 * Created by Utilisateur on 16/07/2016.
 */
var app = angular.module('app', ['ngRoute']);

app.run(function($rootScope, $route){
    $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
        //Change page title, based on Route information
        $rootScope.title = $route.current.title;
        console.log($rootScope.title);
    });
});

app.config(function($routeProvider) {


    // Routes configurations
    $routeProvider
        .when('/home', {
            title: 'home',
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/about', {
            title: 'about',
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('/team', {
            title: 'team',
            templateUrl: 'partials/team.html',
            controller: 'TeamCtrl'
        })
        .when('/portfolio', {
            title: 'portfolio',
            templateUrl: 'partials/portfolio.html',
            controller: 'PortfolioCtrl'
        })
        .when('/footer', {
            templateUrl: 'partials/footer.html',
            controller: 'FooterCtrl'
        })
        .when('/menu', {
            templateUrl: 'partials/menu.html',
            controller: 'MenuCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });




});

