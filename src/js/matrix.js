/*
<canvas id="q" width="1370" height="400">
      Sorry Browser Won't Support
</canvas>
*/

let s = window.screen;
let width = 1370;
let height = 400;
let yPositions = Array(300).join(0).split('');
let ctx = q.getContext('2d');
let draw = function () {
  ctx.fillStyle = 'rgba(0,0,0,.1)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#0F0';
  ctx.font = '10pt Georgia';
  yPositions.map(function (y, index) {
    text = String.fromCharCode(1e2 + Math.random() * 33);
    x = index * 10 + 10;
    q.getContext('2d').fillText(text, x, y);
    if (y > 100 + Math.random() * 1e4) {
      yPositions[index] = 0;
    } else {
      yPositions[index] = y + 10;
    }
  });
};
RunMatrix();

function RunMatrix() {
  if (typeof Game_Interval != 'undefined') clearInterval(Game_Interval);
  Game_Interval = setInterval(draw, 70);
}

function StopMatrix() {
  clearInterval(Game_Interval);
}
setInterval(draw, 200);
