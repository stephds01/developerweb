/**
 * Created by Utilisateur on 19/07/2016.
 */
app.controller('HeaderCtrl', function($scope, MenuFactory, $location) {

    // $scope.menu = MenuFactory;
    // console.log($scope.menu);



    $scope.open = false;
    $scope.menuOn = function() {
        $scope.opens = true;
    };

    $scope.menuOff = function() {
        $scope.opens = false;
    };

    // $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    //     //Change page title, based on Route information
    //     $rootScope.title = $route.current.title;
    //
    //     console.log($rootScope.title);
    // });

    // (function($){
    //
    //     /* Quand je clique sur l'icône hamburger je rajoute une classe au body */
    //     $('#header__icon').click(function(e){
    //         e.preventDefault();
    //         $('body').toggleClass('with--sidebar');
    //     });
    //
    //     /* Je veux pouvoir masquer le menu si on clique sur le cache */
    //     $('#site-cache').click(function(e){
    //         $('body').removeClass('with--sidebar');
    //     })
    //
    // })(jQuery);


});