const C = document.querySelector('canvas'),
  $ = C.getContext('2d'),
  W = (C.width = innerWidth),
  H = (C.height = innerHeight);

const str =
    'А+Б0В-Г1Д=Е2Ё Ж3Зaasdasdasdasdasdas И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я',
  matrix = str.split('');

let font = 11,
  // количество колонок = ширина холста / размер шрифта
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  // определяем цвет фона
  // такой цвет позволяет добиться эффекта постепенного затухания символов
  $.fillStyle = 'rgba(0, 0, 0, .05)';

  // заливаем холст выбранный цветом
  $.fillRect(0, 0, W, H);

  // меняем цвет для шрифта
  $.fillStyle = '#0f0';

  // устанавливаем параметры шрифта
  $.font = font + 'px system-ui';

  // рисуем символы
  for (let i = 0; i < arr.length; i++) {
    // выбираем случайный набор символов
    let txt = matrix[Math.floor(Math.random() * matrix.length)];

    // рисуем символы
    // двигаемся вправо и вниз
    // fillText(набор символов, координата x = значение i, умноженное на размер шрифта, координата y = значение arr, умноженное на размер шрифта)
    $.fillText(txt, i * font, arr[i] * font);

    // если "y" больше высоты холста или Math.random() выдает больше 0.975 (чем это значение меньше, тем больше будет пустот на экране), то поднимаемся наверх (обнуляем "y")
    // это позволяет обеспечить разницу отрисовки отдельных колонок
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;

    // увеличиваем значение y
    arr[i]++;
  }
}
setInterval(draw, 80);
