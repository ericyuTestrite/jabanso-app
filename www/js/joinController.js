/* global angular, console*/
'use strict';

angular.module('join.controllers', ['starter.services'])

  .controller('JoinCtrl', function ($scope) {
    console.log('in JoinCtrl');
    var nowDate = new Date();
    var monthStr = parseInt(nowDate.getMonth()) + 1;
    var nowDateStr = nowDate.getFullYear() + '/' + monthStr + '/' + nowDate.getDate();

    //表單初始值
    $scope.joinform = {};
    //加入日期為系統日
    $scope.joinform.joinDate = nowDateStr;
    //年資預設1年
    $scope.joinform.seniority = '1';

    //送出表單處理
    $scope.submit = function () {
      console.log(JSON.stringify($scope.joinform));
      //call webservice 寫入DB ...
    };

  });
