angular.module('starter.controllers', ['starter.services','model.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup, ngFB) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
       title: "提示",
       template: "登入成功"
     });
     alertPopup.then(function(res) {
        $scope.modal.hide();
     });
     $timeout(function() {
        alertPopup.close(); //close the popup after 3 seconds for some reason
      }, 3000);
  }
  $scope.doFBLogin = function(){
    //檢查是否有FB授權,若有則將相同訊息儲存，否則要求授權
    if (isOnLine()) {
      ngFB.getLoginStatus().then(
        function (response) {
            console.debug(angular.toJson(response, true));
              if (response.status === "connected") {
                localStorage.setItem("FBToken", angular.toJson(response,true));
                $scope.showAlert();
              } else {
                ngFB.login({scope: "email"}).then(
                    function(response) {
                      if (response.status === "connected") {
                        localStorage.setItem("FBToken", angular.toJson(response,true));
                        $scope.showAlert();
                      }
                    },
                    function(error) {
                      console.error("ngFB.login:"+ error);
                });
              }
          }
      )
    } else {
      $ionicPopup.alert({
         title: "警告",
         template: "請連線至網際網路，再試一次"
       });
    }
  };
})

.controller('WelcomeCtrl', function($scope) {
})



.controller('HomeCtrl', function($scope) {
    $scope.banners = [ {img: 'img/banner1.jpg'},
                    {img: 'img/banner2.jpg'},
                    {img: 'img/banner3.jpg'}
                  ];
    console.log('in homeCtrl');
})

.controller('BrowseCtrl', function($scope, ServerModel) {
  console.log('in BrowseCtrl');
  var greatHelpers = ServerModel.getGreatHelpers();
  $scope.helpers = greatHelpers;
})

.controller('PlaylistsCtrl', function($scope, $ionicModal, $timeout, $window, $location, $q) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
