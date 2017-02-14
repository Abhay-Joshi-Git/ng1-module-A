(function() {
  'use strict';

  angular.module('moduleA', ['shared']);
})();;(function() {
  'use strict';

  var module = angular.module('moduleA');

  module.directive('analytics', [
    function() {
      return {
        restrict: 'E',
        replace: false,
        scope: {
          data: '='
        },
        //template: '<div>Congrats</div>',
        templateUrl: 'dataAnalytics/analytics.html',
        link: function(scope) {
          //var charLen = scope.data ? scope.data.length : 0;
          scope.analytics = " data :  " + scope.data +
           '  has ' + (scope.data ? scope.data.length : 0)  +  ' characters';
        }
      };
    }]);
})();
;angular.module('moduleA').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dataAnalytics/analytics.html',
    "<div>\n" +
    "    {{analytics}}\n" +
    "\n" +
    "    <br />\n" +
    "\n" +
    "    <img src=\"images/analytics.png\"\n" +
    "</div>"
  );

}]);
