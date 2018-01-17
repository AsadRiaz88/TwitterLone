var app = angular.module('asad');
app.directive("fileinput", [function() {
        return {
            scope: {
                fileinput: "=",
                filepreview: "="
            },
            link: function(scope, element, attributes) {
                element.bind("change", function(changeEvent) {
                scope.fileinput = changeEvent.target.files[0];
                var reader = new FileReader();
                reader.onload = function(loadEvent) {
                  scope.$apply(function() {
                    scope.filepreview = loadEvent.target.result;
                    base64result=reader.result.substr(reader.result.indexOf(',') + 1);
                  });
                }
                reader.readAsDataURL(scope.fileinput);
            });
            }
          }
}]);
app.directive('loadMore', function() {
        return {
            template: "<div class='col-md-6 col-md-offset-3'><br><button class='btn btn-lg btn-primary btn-block' ng-click='loadMore()' id='loadButton'>LOAD MORE</button></div>",
            link: function(scope) {
                  // scope defining the numbers of results to show
                      scope.listLimit = 2;
                      // scope receving the load more click and calling the function to show more results
                      scope.loadMore = function() {
                      // adds 3 more to listLimit
                      scope.listLimit += 2;
                  // check to see if the list array is bigger then listLimit, and if so hide the load more button
                  if (scope.myVar.length < scope.listLimit) {
                      angular.element(loadButton).fadeOut();
                  }
              }
        }
        }
});
