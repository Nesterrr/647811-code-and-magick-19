'use strict';
(function () {

  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  var setupDialogElement = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDialogElement.querySelector('.setup-close');
  var inputElement = setupDialogElement.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = document.querySelector('input[name="fireball-color"]');
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupPlayer = document.querySelector('.setup-player');

  var openPopup = function () {
    setupDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupPlayer.addEventListener('click', setColor);

    setupClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEY) {
        closePopup();
      }
    });
  };

  var closePopup = function () {
    setupDialogElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupDialogElement.style.top = null;
    setupDialogElement.style.left = null;
    setupPlayer.removeEventListener('click', setColor);
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


  var setColor = function (evt) {
    if (evt.target === wizardCoat) {
      wizardCoat.style.fill = window.helpers.generateRandomArrayElement(coatColor);
      wizardCoatInput.value = wizardCoat.style.fill;
    } if (evt.target === wizardEyes) {
      wizardEyes.style.fill = window.helpers.generateRandomArrayElement(eyesColor);
      wizardEyesInput.value = wizardEyes.style.fill;
    } if (evt.target === fireball) {
      var color = window.helpers.generateRandomArrayElement(fireballColor);
      wizardFireballInput.value = color;
      fireball.style.backgroundColor = color;
    }
  };

})();
