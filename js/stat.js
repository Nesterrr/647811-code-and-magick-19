'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var HORIZONTAL_GAP = 40;
var VERTICAL_GAP = 65;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_SPACE = 50;
var FONT_GAP = 15;
var RECT_Y = 230;
var BLACK_COLOR = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.font = '16px PT mono';
  ctx.textBaseline = 'hanging';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColor = function (arr, i) {
  if (arr[i] === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'hsla(240, 100%, 50%, ' + Math.random() + ')';
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP,
      'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(ctx,
      CLOUD_X,
      CLOUD_Y,
      '#ffffff'
  );

  ctx.fillStyle = BLACK_COLOR;
  ctx.fillText(
      'Ура вы победили!',
      CLOUD_X + HORIZONTAL_GAP,
      CLOUD_Y + FONT_GAP
  );
  ctx.fillText(
      'Список результатов:',
      CLOUD_X + HORIZONTAL_GAP,
      CLOUD_Y + FONT_GAP * 2
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(
        names[i],
        CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i,
        VERTICAL_GAP + FONT_GAP * 2 + BAR_HEIGHT
    );
    ctx.fillStyle = getColor(names, i);
    ctx.fillRect(
        CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i,
        RECT_Y,
        BAR_WIDTH,
        -BAR_HEIGHT * times[i] / maxTime
    );
    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i,
        -BAR_HEIGHT * times[i] / maxTime + RECT_Y - FONT_GAP
    );
  }
};
