
(function () {
    'use strict';

   
    angular.module('app')

        .config(function ($routeProvider, $locationProvider) {

            
           
            $routeProvider
            // Home
            .when("/", { templateUrl: "/app/main.html" })
            
            // else 404`
            .otherwise("/", { templateUrl: "/app/main.html" });

            $locationProvider.html5Mode(true);
        });


}());



