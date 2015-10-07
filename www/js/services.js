angular.module('starter.services', [])

  .factory('myServices', function () {
    console.log('in starter.services services');
    return {
      getData: function () {
        return 'Hello World!';
      }
    }
  });
