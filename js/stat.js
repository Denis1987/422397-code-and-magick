'use strict';

window.renderStatistics = function (ctx, names, times) {
  roundedRect(ctx, 100, 10, 420, 270, 10);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var getMaxElement = function (arr) {

    var max = -1;

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (item > max) {
        max = item;
      }
    }
    return max;
  };

  var histogramWidth = 150;
  var step = histogramWidth / (getMaxElement(times) - 0);


  var barWidth = 60;
  var indent = 80;
  var initialX = 100;
  var initialY = 80;

  for (var j = 0; j < times.length; j++) {
    ctx.fillText(Math.round(times[j] / 1000), initialX + barWidth + indent * j, initialY - 10);
    ctx.fillText(names[j], initialX + (barWidth + 10) + indent * j, initialY - 10);
  }
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.globalAlpha = 1;
    } else {
      ctx.fillStyle = 'blue';
      ctx.globalAlpha = Math.random();

    }
    ctx.fillRect(initialX + barWidth + indent * i, initialY, barWidth, times[i] * step, names);
  }

};

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.globalAlpha = 1;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;


  ctx.closePath();
  ctx.fill();
  ctx.shadowColor = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}
