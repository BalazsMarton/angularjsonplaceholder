// Code goes here
angular.module('myapp',['myapp.controller']);

angular.module('myapp.controller',['myapp.service'])
  .controller('testController',function($scope,testService){

    $scope.posts={};
    function GetAllPosts() {
      var getPostsData = testService.getPosts();

      getPostsData.then(function (post) {
         $scope.posts = post.data;

      }, function () {
         alert('Error in getting post records');
      });
    }
          
    GetAllPosts();
});

angular.module('myapp.service',[])
  .service('testService', function ($http) {

    //get All NewsLetter
    this.getPosts = function () {
       return $http.get('https://jsonplaceholder.typicode.com/posts');
    };
 });

