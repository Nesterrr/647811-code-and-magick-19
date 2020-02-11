'use strict';
(function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var familyNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = document.querySelector('input[name="fireball-color"]');
  var setupPlayer = document.querySelector('.setup-player');

  var generateWizards = function (length) {
    var wizards = [];
    for (var i = 0; i < length; i++) {
      wizards.push({
        name: window.helpers.generateRandomArrayElement(names) + ' ' + window.helpers.generateRandomArrayElement(familyNames),
        coats: window.helpers.generateRandomArrayElement(coatColors),
        eyes: window.helpers.generateRandomArrayElement(eyesColors),
      });
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coats;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;

    return wizardElement;
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


  var getWizards = function (array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
    similarListElement.appendChild(fragment);
  };

  getWizards(generateWizards(4));

  document.querySelector('.setup-similar').classList.remove('hidden');

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

  setupPlayer.addEventListener('click', setColor);

})();
