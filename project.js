angular.module('directiveEx')
  .directive('project', function(){
    return {
      restrict: "E",
      templateUrl: 'partials/project.html',
      scope: true
    };
  });