var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http, $interval, $log, $anchorScroll, $location){
    
    var onUserComplete = function(response) {
        $scope.user = response.data;
        console.log($scope.user);
        $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    };

    var onRepos =function(response) {
        $scope.repos = response.data;
    }

    var onError = function(reason){
        $scope.error = "Couldn't fetch data";
    }
    
    $scope.search = function(username) {
        $log.info("searching for " + username);
   $http.get('https://api.github.com/users/' + username)
    .then(onUserComplete)
        if(countdownInterval) {
            $interval.cancel(countdownInterval)
             $scope.countdown = null;
        }
    }

    var decrementCountdown =function(){
        $scope.countdown -= 1;
        if($scope.countdown < 1) {
            $scope.search($scope.username);
           
        }
    }
    var countdownInterval = null;
    const startCountdown = () => {
       countdownInterval =  $interval(decrementCountdown, 1000, $scope.countdown)
    }



$scope.username;
$scope.message;
$scope.repoSortOrder;
$scope.countdown = 5;
startCountdown();
});