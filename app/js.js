var app=angular.module("app",[])
app.control("myCtrl",function ($scope,$http){
	$scope.searchName="";
	$scope.getActors=function(){
		var promise=$http.get("http://api.themoviedb.org/3/search/person?api_key=f24727bdb915ca05f7718876104b211d&query="+$scope.searchName);
		promise.then(sucessCallback)
		function sucessCallback(response){
			$scope.results=response.data.results;
		}




	}
		
	
	
	
	
}
);
