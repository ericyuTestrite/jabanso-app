/* global angular, console*/
'use strict';

angular.module('join.controllers', ['starter.services'])

  .controller('JoinCtrl', function ($scope) {
    console.log('in JoinCtrl');
    var nowDate = new Date();
    var monthStr = parseInt(nowDate.getMonth()) + 1;
    var nowDateStr = nowDate.getFullYear() + '/' + monthStr + '/' + nowDate.getDate();

    var profileStr = localStorage.getItem("profile");
    if(profileStr !== null){
        var profile = JSON.parse(profileStr);
        $scope.joinform = profile;
    }else{
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

  });
