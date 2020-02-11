'use strict';
(function () {
  var generateRandomArrayElement = function (array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
  };

  window.helpers = {
    generateRandomArrayElement: generateRandomArrayElement
  };

})();
