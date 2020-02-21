'use strict';
(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var LOAD_URL = URL + '/data';
  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      // console.log(xhr.response);
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        default: onError('Произошла ошибка: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения с сервером. Попробуйте заново чуть позже.');
    });

    xhr.addEventListener('timeout', function () {
      onError('Истек таймаут ожидания ответа!');
    });

    xhr.timeout = 10000;
    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        default: onError('Произошла ошибка: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Ошибка соединения с сервером. Попробуйте заново чуть позже.');
    });

    xhr.addEventListener('timeout', function () {
      onError('Истек таймаут соединения с сервером');
    });

    xhr.timeout = 10000;
    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
