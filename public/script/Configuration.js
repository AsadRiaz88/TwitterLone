var app = angular.module('asad');
app.config(function($routeProvider) {
$routeProvider
.when("/", {
templateUrl : "home.html",
controller : 'HomeController'
})
.when("/signup", {
templateUrl : "signup.html",
controller : 'SignupController'
})
.when("/updateprofile", {
templateUrl : "updateprofile.html",
controller : 'UpdateProfileController'
});
});
app.run(function($rootScope,$cookies){
if($cookies.get('token') && $cookies.get('currentUser'))
{
$rootScope.token=$cookies.get('token');
$rootScope.currentUser=$cookies.get('currentUser');
}
});
