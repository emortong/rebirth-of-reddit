(function(window, angular) {

  angular.module('redditApp', []);

  let redditApp = angular.module('redditApp');

  redditApp
      .config(['SubRedditsProvider', function(SubRedditsProvider){
        // SubRedditsProvider.setEndpoint('https://www.reddit.com/r/pug.json')
      }])
      .run(['$rootScope',function($rootScope){
      }]);

})(window, angular);