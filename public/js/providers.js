
(function(window, angular) {

  function SubReddits(){

    this.endpoint = '';
    // this.setEndpoint = (endpoint) => {
    //   this.endpoint = endpoint;
    // };

    this.$get = ['$http', function($http){
      // const configuredEndpoint = this.endpoint;
      // console.log('hello', configuredEndpoint);

      return {
        getSubReddits : () => {
          return $http.get(this.endpoint);
        },
        setEndpoint : (endpoint) => {
          this.endpoint = endpoint;
        },

      };
    }];
  }

  angular.module('redditApp')
    .provider('SubReddits', SubReddits);

}(window, angular));