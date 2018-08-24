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
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then(function(res){
                        console.log(res);
                        location.reload();
                    });
        }
        
        $scope.deleteUser = function(user){
          console.log(user._id);
            $http.delete('/todoData/' + user._id, user._id).then(function(res){
                console.log("/deleted");
                console.log(res);
                location.reload();

            });
        }
    }]);