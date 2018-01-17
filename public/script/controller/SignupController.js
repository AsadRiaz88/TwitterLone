var app = angular.module('asad');
app.controller('SignupController' , function($scope,$http,$timeout)
{
      var readd;
      $scope.$watch('file', function(newfile, oldfile) {
      if(angular.equals(newfile, oldfile) ){
      return;
      }
      });
      $scope.submitSignup =function(){
      var newUSer ={
      username:$scope.username,
      password: $scope.password,
      profileimg:base64result
      };
      console.log(newUSer);
      $http.post('/users',newUSer).success(function(){
            alert('success');
      window.location.href = '/#'      

      });
      }
      console.log('you are on signup page');

});
