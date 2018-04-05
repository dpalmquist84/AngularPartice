(function() {
  var app = angular.module("githubViewer", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "mainController"
      })
      .otherwise({ redirectTo: "/main" });
  });
})();
