"use strict";

window.renderStatistics = function (ctx, names, times) {
  roundedRect(ctx, 100, 10, 420, 270, 10);


  console.log(names);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  //    не понятно что за цифры выше после текста

  var max = -1;
  var maxIndex = -1;
  //    не понятно почему переменная max именно -1 а не 0 и почему они равны


  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  console.log(times);
  //    что такое for? потом объявляется переменна i а вот потом после точки с запятой что это?
  //        переменная time равна одному из значений массива times а потом если это значение больше мексимального которое равно -1 то максимальное и будет равно time которое равно одному из значений times?


  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);
  //    почему именно ширина? как задать высоту и сделать так чтобы они расли в высотуц?


  ctx.fillText('Худшее время: ' + max, 120, 60);

  //и эти цифры тоже

  ctx.fillRect(120, 100 + max * step - times[0] * step, 20, times[0] * step);
  ctx.fillRect(160, 100 + max * step - times[1] * step, 20, times[1] * step);
  ctx.fillRect(200, 100 + max * step - times[2] * step, 20, times[2] * step);
  //    ctx.fillRect(x, y, width, height);
  ctx.fillRect(240, 100 + max * step - times[3] * step, 20, times[3] * step);


  //
  var barWidth = 20;
  //
  var indent = 40;
  var initialX = 80;
  var initialY = 120;
  //        //    почему 80? ведь они на разном расстоянии друг от друга
  var lineHeight = 15;
  //
  for (var i = 0; i < times.length; i++) {
    //        ctx.fillRect(initialY);
    ctx.fillText(names[i], initialY + initialY, initialX + lineHeight + indent * i);
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
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  //    ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;

  ctx.closePath();
  ctx.fill();
  ctx.shadowColor = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}
