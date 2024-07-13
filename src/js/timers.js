import { convertMilliseconds, time2Str } from './convert';

const clockFace = document.querySelector('.js-clockface');
const initTime = new Date('2024 / 5 / 14');

setInterval(() => {
  const currentTime = new Date();
  const ms = currentTime - initTime;
  tick(ms);
}, 1000);

const tick = ms => {
  renderTime(ms);
};

function renderTime(ms) {
  const parsedTime = convertMilliseconds(ms);
  const timeStr = time2Str(parsedTime);
  clockFace.textContent = timeStr;
}
