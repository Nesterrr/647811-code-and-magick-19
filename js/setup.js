'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var familyNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var arrayRandElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var wizards = [
  {
    name: arrayRandElement(names) + ' ' + arrayRandElement(familyNames),
    coats: arrayRandElement(coatColors),
    eyes: arrayRandElement(eyesColors),
  },
  {
    name: arrayRandElement(names) + ' ' + arrayRandElement(familyNames),
    coats: arrayRandElement(coatColors),
    eyes: arrayRandElement(eyesColors),
  },
  {
    name: arrayRandElement(names) + ' ' + arrayRandElement(familyNames),
    coats: arrayRandElement(coatColors),
    eyes: arrayRandElement(eyesColors),
  },
  {
    name: arrayRandElement(names) + ' ' + arrayRandElement(familyNames),
    coats: arrayRandElement(coatColors),
    eyes: arrayRandElement(eyesColors),
  }
];

var renderWizard = function (wiz) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wiz.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wiz.coats;
  wizardElement.querySelector('.wizard-eyes').style.fill = wiz.eyes;

  return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
  similarListElement.appendChild(fragment);
}

document.querySelector('.setup-similar').classList.remove('hidden');
