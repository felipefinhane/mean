angular.module('alurapic')
	.factory('tokenInterceptor', function($window, $q, $location) {
        var interteceptor = {};
        interteceptor.response = function(response){
            var token = response.headers('x-access-token');
            if (token) {
                //$window.sessionStorage.token = token;
                $window.localStorage.token = token;
            }
            return response;
        }
        interteceptor.request = function(request){
            request.headers = request.headers || {};
            if ($window.localStorage.token) {
                request.headers['x-access-token'] = $window.localStorage.token;
            }
            return request;
        }
        interteceptor.responseError = function(rejection) {
            if (rejection != null && rejection.status == 401) {
                //REDIRECIONAR PARA LOGIN
                delete $window.localStorage.token;
                $location.path('/#/login');
            }
            return $q.reject(rejection);
        }
		return interteceptor;
	});