angular.module('todoApp').config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: '/components/home/home.html'
        })
        .when('/todo',{
            templateUrl: '/components/todo/todo.html',
        })
        .when('/contact',{
            templateUrl: '/components/contact/contact.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);