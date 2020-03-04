'use strict';
(function () {

  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setupDialogElement = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDialogElement.querySelector('.setup-close');
  var inputElement = setupDialogElement.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = document.querySelector('input[name="fireball-color"]');
  // var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];\
  var fireball = document.querySelector('.setup-fireball');
  var setupPlayer = document.querySelector('.setup-player');
  var form = setupDialogElement.querySelector('.setup-wizard-form');

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
      wizardCoat.style.fill = window.helpers.generateRandomArrayElement(COAT_COLORS);
      wizardCoatInput.value = wizardCoat.style.fill;
    } if (evt.target === wizardEyes) {
      wizardEyes.style.fill = window.helpers.generateRandomArrayElement(EYES_COLORS);
      wizardEyesInput.value = wizardEyes.style.fill;
    } if (evt.target === fireball) {
      var color = window.helpers.generateRandomArrayElement(FIREBALL_COLORS);
      wizardFireballInput.value = color;
      fireball.style.backgroundColor = color;
    }
  };

  var successHandler = function () {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: green;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = 'Форма успешно отправлена';
    document.body.insertAdjacentElement('afterbegin', node);
    setupDialogElement.classList.add('hidden');
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), successHandler, errorHandler);
  });

})();
