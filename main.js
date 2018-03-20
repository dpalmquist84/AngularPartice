var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){
    
    var onUserComplete = function(response) {
        $scope.user = response.data;
        console.log($scope.user);
    };

   $http.get('https://api.github.com/users/odeToCode')
    .then(onUserComplete)
});