angular.module('todoApp')
    .controller('todoController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {

        $http.get('/todoData').then(function (res) {
            $scope.users = res.data;

        });

        $scope.addUser = function () {
            $http({
                method: 'POST',
                url: '/todoData',
                data: $httpParamSerializerJQLike({
                    name: $scope.newUser.name, 
                    task: $scope.newUser.task 
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        }
        /*
        $http.post('/todoData').then(function(res){
            console.log(res);
        })
        */

        /*
        $http.post('/todoData'
            ,{name : $scope.newUser.name, task : $scope.newUser.task})
            .sucess(function(data){
                console.log(data);
        })
        */
    }]);