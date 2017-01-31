(function(window, angular) {

  angular.module('redditApp')
    .controller('myController', [
      '$scope',
      'SubReddits',
      function($scope, SubReddits){
        $scope.myFirstName = 'Estefania';
        $scope.subreddits = [];
        $scope.logSubs = function(url) {
          console.log(url);
          SubReddits.setEndpoint(url)
          SubReddits.getSubReddits()
            .then( res => {
              console.log(res);
              let posts = res.data.data.children.map( post => {
                if(/gifv/i.test(post.data.url)) {
                  post.data.url = post.data.url.replace(/gifv/i, 'gif')
                  return post;
                } else {
                  return post;
                }
              }).map( post => {
                console.log(post);
                if(post.data.title.length > 43) {
                  post.data.title = post.data.title.substring(0, 43) + ' ...';
                }
                return post;
              })
              .filter( post => {
                if(post.data.url.includes('.jpg') || post.data.url.includes('.gif')) {
                  console.log(post);
                  return post;
                }
              })
               $scope.subreddits = posts;
            });
          }
      }]);

}(window, angular));