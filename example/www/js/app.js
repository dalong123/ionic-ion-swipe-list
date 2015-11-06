// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.contrib.ui.swipe.list'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.controller('MyListCtrl', function($scope) {
    $scope.candidates = [{
        name: 'Donald Trump'
    }, {
        name: 'Ben Carson'
    }, {
        name: 'Jeb Bush'
    }, {
        name: 'Chris Christie'
    }, {
        name: 'Ted Cruz'
    }, {
        name: 'Carly Fiorina'
    }, {
        name: 'Jim Gilmore'
    }, {
        name: 'Lindsey Graham'
    }, {
        name: 'Mike Huckabee'
    }, {
        name: 'Bobby Jindal'
    }, {
        name: 'John Kasich'
    }, {
        name: 'George Pataki'
    }, {
        name: 'Rand Paul'
    }, {
        name: 'Marco Rubio'
    }, {
        name: 'Rick Santorum'
    }];
});
