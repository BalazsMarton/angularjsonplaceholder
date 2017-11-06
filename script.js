// Code goes here
angular.module('myapp',['myapp.controller']);

angular.module('myapp.controller',['myapp.service'])
  .controller('testController', function($scope, httpService) {
    $scope.page = 1;
    $scope.posts = {};
    function getComments(page) {
		httpService.getComments(page).then(function(post) {
			$scope.posts = post.data;
		}, function () {
			alert('Error in getting comments records');
		});
    }
          
    getComments($scope.page);
    
    $scope.loadNextPage = function() {
        $scope.page++;
        getComments($scope.page);
    };
	
	$scope.loadPrevPage = function() {
		if($scope.page > 1) {
			$scope.page--;
			getComments($scope.page);
		}
    };
});

angular.module('myapp.service',[])
  .service('httpService', function ($http) {

    //get All Comments
    this.getComments = function (page) {
       return $http.get('https://jsonplaceholder.typicode.com/posts/'+page+'/comments');
    };
 });
