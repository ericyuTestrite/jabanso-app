/* global angular, console*/
'use strict';

angular.module('join.controllers', ['starter.services', 'camera.services'])

  .controller('JoinCtrl', function ($scope, Camera) {
    console.log('in JoinCtrl');
    var nowDate = new Date();
    var monthStr = parseInt(nowDate.getMonth()) + 1;
    var nowDateStr = nowDate.getFullYear() + '/' + monthStr + '/' + nowDate.getDate();
    var uploadedCount = 0;
    $scope.files = [];

    //取回localStorage資料
    var profileStr = localStorage.getItem("profile");
    if (profileStr !== null) {
      var profile = JSON.parse(profileStr);
      $scope.joinform = profile;
    } else {
      //表單初始值
      $scope.joinform = {};
      //加入日期為系統日
      $scope.joinform.joinDate = nowDateStr;
      //年資預設1年
      $scope.joinform.seniority = '1';
    }

    //送出表單處理
    $scope.submit = function () {
      var profileStr = JSON.stringify($scope.joinform);
      console.log(JSON.stringify($scope.joinform));
      //call webservice 寫入DB ...
      localStorage.setItem("profile", profileStr);
    };

    $scope.capturePhoto = function () {
      console.log('Getting camera');
      Camera.getPicture({
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: false
      }).then(function (imageURI) {
        console.log(imageURI);
        $scope.lastPhoto = imageURI;
      }, function (err) {
        console.err(err);
      });
    };

    $scope.getPhoto = function () {
      console.log('Getting photo');
      var pictureSource=navigator.camera.PictureSourceType;
      var destinationType=navigator.camera.DestinationType;
      Camera.getPicture({
        quality: 50,
        destinationType: destinationType.DATA_URL,
        sourceType: pictureSource.PHOTOLIBRARY
      }).then(function (imageURI) {
        $scope.galleryPhoto = imageURI;
      }, function (err) {
        console.err(err);
      });
    };

  });
