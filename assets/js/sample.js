var app = angular.module('TodoApp', []);

app.controller('TodoCtrl', ['$scope', function ($scope) {
    $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = "";
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo) {
          return !todo.done;
        })
    };
}]);

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have " + sessionStorage.clickcount + " cookies!";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}