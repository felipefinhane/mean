angular.module('alurapic').controller('LoginController', function($scope, $http, $location) {
    $scope.user = {};
    $scope.menssage = '';
   
    $scope.auth = function() {
        var user = $scope.user;
        $http.post('/app/auth', {login: user.login, password: user.password})
            .then(function() {
                $location.path('/');
            }, function(error) {
                $scope.menssage = 'Login ou senha inválidos!';
                $scope.user = {};
                console.log(error);
            });
    }
});