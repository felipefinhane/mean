angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {
        var ddo = {
            restrict : "AE", //Attribut Element
            scope : {
                titulo : '@titulo'
            },
            transclude : true,
            templateUrl : '/js/directives/meu-painel.html',
        };
        return ddo;
    })
    .directive('minhaFoto', function() {
        var ddo = {
            restrict : "AE",
            scope : {
                titulo : '@titulo',
                url : '@url'
            },
            transclude : true,
            templateUrl : '/js/directives/minha-foto.html'
        };
        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    });