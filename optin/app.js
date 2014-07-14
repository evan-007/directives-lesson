angular.module('myApp', [])
.directive('optIn', function(){
  return {
    restrict: "E",
    templateUrl: "./optin.html",
    transclude: true
  }
})