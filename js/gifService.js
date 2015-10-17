// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

angular.module('Gif')

.service('gifService', function ($http) {
  this.searchGif = function (query) {
    var uri = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC';
    return $http.get(uri);
  };
});
