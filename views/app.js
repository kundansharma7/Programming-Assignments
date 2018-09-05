var routerApp = angular.module('routerApp', ['ui.router', 'lr.upload', 'feedbackApp', 'httpApp']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'modules/feedback/feedback.html',
            controller: 'feedbackCtrl'
        });

});