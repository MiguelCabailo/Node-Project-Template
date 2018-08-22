var randomData = [{ name: 'miguel', age: 20},{name: 'lovie', age: 29}];

angular.module('todoApp')
    .controller('todoController', ['$scope', function($scope){
        
        $scope.randomData = randomData;
    }]);


