const btn = document.querySelector('.button');
const btnMore = document.getElementById('more');
const result = document.getElementById('result');
const info = document.querySelector('.info');

function calculateBMI () {
const weight = document.getElementById('weight').value; //извлекаем значение введенное в инпут
const height = document.getElementById('height').value; //извлекаем значение введенное в инпут
let w = +weight; //преобразовываем строку в число
let h = +height; //преобразовываем строку в число
let hMetr = h /100; //приводим рост к метрам
let bmi = w / Math.pow(hMetr, 2) ;  //находим коэффициент ИМТ
result.textContent = bmi.toFixed(1);
more.style.visibility = 'visible';
}
btn.addEventListener('click', calculateBMI);

more.onclick = function (event) {
    info.style.visibility = 'visible';
    };