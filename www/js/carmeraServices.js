/**
 * Created by Borak Chen on 2015/10/7.
 */

angular.module('camera.services', [])

  .factory('Camera', ['$q', function ($q) {
    return {
      getPicture: function (options) {
        var q = $q.defer();
        navigator.camera.getPicture(function (result) {
          // Do any magic you need
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }, options);
        return q.promise;
      }
    }
  }]);
