angular.module('starter.controllers', ['starter.services','model.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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

.controller('PlaylistsCtrl', function($scope, $ionicModal, $timeout, ezfb, $window, $location, $q) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  updateMe();
  updateLoginStatus()
  .then(updateApiCall);

  ezfb.Event.subscribe('auth.statusChange', function (statusRes) {
    $scope.loginStatus = statusRes;

    updateMe();
    updateApiCall();
  });

  $scope.login = function () {
    /**
     * Calling FB.login with required permissions specified
     * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
     */
    ezfb.login(null, {scope: 'email,user_likes'})
      .then(function (res) {
        console.debug("login:"+angular.toJson(res,true));
      });

    /**
     * In the case you need to use the callback
     *
     * ezfb.login(function (res) {
     *   // Executes 1
     * }, {scope: 'email,user_likes'})
     * .then(function (res) {
     *   // Executes 2
     * })
     *
     * Note that the `res` result is shared.
     * Changing the `res` in 1 will also change the one in 2
     */
  };

  $scope.logout = function () {
    /**
     * Calling FB.logout
     * https://developers.facebook.com/docs/reference/javascript/FB.logout
     */
    ezfb.logout().then(function (res) {
        console.debug("logout:"+angular.toJson(res,true));
      });

    /**
     * In the case you need to use the callback
     *
     * ezfb.logout(function (res) {
     *   // Executes 1
     * })
     * .then(function (res) {
     *   // Executes 2
     * })
     */
  };

  function updateMe () {
    ezfb.getLoginStatus()
    .then(function (res) {
      // res: FB.getLoginStatus response
      // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
      console.debug("getLoginStatus:"+angular.toJson(res,true));
      return ezfb.api('/me');
    })
    .then(function (me) {
      // me: FB.api('/me') response
      // https://developers.facebook.com/docs/javascript/reference/FB.api
      console.debug("me:"+angular.toJson(me,true));
      $scope.me = me;
    });
  }

  function updateLoginStatus () {
    return ezfb.getLoginStatus()
      .then(function (res) {
        // res: FB.getLoginStatus response
        // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
        console.debug("updateLoginStatus:"+angular.toJson(res,true));
        $scope.loginStatus = res;
      });
  }

  function updateApiCall () {
    return $q.all([
        ezfb.api('/me'),
        ezfb.api('/me/picture?type=square&height=300&width=300&redirect=false')
      ])
      .then(function (resList) {
        // Runs after both api calls are done
        // resList[0]: FB.api('/me') response
        // resList[1]: FB.api('/me/likes') response
        console.debug("resList:"+angular.toJson(resList,true));
        if (resList[1].data) {
          $scope.myPicture = resList[1].data.url;
          $scope.userName = resList[0].name;
        } else{
          $scope.myPicture = "http://portal.testritegroup.com/zh_TW/images/login_1_01_.jpg";
          $scope.userName = "";
        };
        
        $scope.apiRes = resList;
      });

  }

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
