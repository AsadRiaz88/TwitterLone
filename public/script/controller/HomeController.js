var app = angular.module('asad');
app.controller('HomeController' , function($rootScope,$scope,$http,$timeout,$cookies)
{

      $scope.submitnewVar =function(){
        $http.post('/meows',{newVar:$scope.newVar},{headers:{'authorization':$rootScope.token}})
        .then(function(){
              getdata();
              $scope.newVar='';
              });
        }
        $scope.submitcomment =function(comment,id){
          var data = {
                      postID :id,
                      commentText:comment
                      };

                      $http.post('/meows/addcomment',{comment:data},{headers:{'authorization':$rootScope.token}})
                      .then(function(){

                        getdata();

                      });
          }
          $scope.removecomment =function(comment,id){
           var data = {
                        postID :id,
                        commentTime:comment.timeIS,
                        commentby:comment.commentby,
                        commentText:comment.comment
                        };

                    $http.post('/meows/removecomment',{comment:data},{headers:{'authorization':$rootScope.token}})
                        .then(function(){

                          getdata();

                    });
          }
      $scope.signin =function(){
            $http.put('/users/login',{username:$scope.username,password:$scope.password})
            .then(function(res){
                $cookies.put('token',res.data.token);
                $cookies.put('currentUser',$scope.username);
                $rootScope.token = res.data.token;
                $rootScope.currentUser=$scope.username;
                $rootScope.profileIMG=res.data.profileimg;

                  getAllUsers();
                                       getdata();


                  console.log($scope.UsersArray);
            },function(err)
                {
                alert('bad baat');
                window.location = '/';
                });
      }
      $scope.logout =function(){
          $cookies.remove('token');
          $cookies.remove('currentUser');
          $rootScope.token = null;
          $rootScope.currentUser=null;
      };
      $scope.removeVar=function(removevar)
      {
      $http.put('meows/remove',{varTOremove:removevar},{headers:{'authorization':$rootScope.token}}).then(function()
      {
      getdata();
      });
      };
      function getAllUsers()
          {
            $http.get('/usersCollection').then(function(response)
              {
                $scope.UsersArray=response.data;
              console.log($scope.UsersArray);
              });
          }

      function getdata()
          {
            $http.get('/meows').then(function(response)
              {
              $scope.myVar=response.data;
              });
          }


});
