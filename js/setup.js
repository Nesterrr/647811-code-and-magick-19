'use strict';
(function () {

  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var inputElement = setup.querySelector('.setup-user-name');

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

    setupClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEY) {
        closePopup();
      }
    });
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.top = null;
    setup.style.left = null;
    window.similarwizards.setupPlayer.removeEventListener('click', window.similarwizards.setColor);
  };

  setupOpen.addEventListener('click', openPopup);
  setupClose.addEventListener('click', closePopup);

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEY && !inputElement.matches(':focus')) {
      closePopup();
    }
  };

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      openPopup();
    }
  });

  window.setup = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    setup: setup
  };
})();
