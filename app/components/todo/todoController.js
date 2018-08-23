angular.module('todoApp')
    .controller('todoController', ['$scope', '$http', function($scope,$http){
        $http.get('/todostuff').then(function(res){
            $scope.users = res.data;
            
        });
    }]);