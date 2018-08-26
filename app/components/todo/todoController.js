angular.module('todoApp')
    .controller('todoController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {

        // GET data from mongoDB
        $http.get('/todoData').then(function (res) {
            $scope.users = res.data;
        });

        // POST data to mongoDB
        // must use explicitly declare the data by using the serializer and change the content type
        // default content type in angularjs = {'Content-type': 'application/json'}
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
                        $http.get('/todoData').then(function (res) {
                            $scope.users = res.data;
                        });
                    });
        }
        
        // DELETE user by the user id provided by mongoDB(_id)
        $scope.deleteUser = function(user){
          console.log(user._id);
            $http.delete('/todoData/' + user._id, user._id).then(function(res){
                console.log(res.data);
                $http.get('/todoData').then(function (res) {
                    $scope.users = res.data;
                });
            });
        }
    }]);