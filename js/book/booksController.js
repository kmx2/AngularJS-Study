(function(){
    var booksController = function( $scope ) {
        $scope.message = "Hello from booksController";
        this.greeting = "This is a greeting message using controller as syntax";
        //greeting是控制器的属性，不是$scope的属性，greeting可以通过"controller as" 语法来引用

        $scope.books = [];
        $scope.count = 0;
        $scope.fetchBooks = function() {
            count = $scope.count++;
            $scope.books.unshift( {ID:count , BookName:"Test Book "+count, AuthorName:"Test Author "+count, ISBN:"TEST ISBN "+count})
        }
    }

    angular.module('myAngularApplication').controller('booksController',[ "$scope", booksController]);

 }());
