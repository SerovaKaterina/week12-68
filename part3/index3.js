const btn = document.querySelector('.button');
const more = document.getElementById('more');
const result = document.getElementById('result');
const info = document.querySelector('.info');
let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');

//Добавляем функцию проверки, что поля заполнены и если нет, отключаем кнопку
function updateButtonState() {
	btn.disabled = !weightInput.value || !heightInput.value;
}
updateButtonState();
//Добавляем обработчики событий для апдейта состояния кнопки при изменении полей
weightInput.addEventListener('input', updateButtonState);
heightInput.addEventListener('input', updateButtonState);

//Вычисляем ИМТ
function calculateBMI () {
    let w = +weightInput.value; //преобразовываем строку в число
    let h = +heightInput.value; //преобразовываем строку в число
    let hMetr = h /100; //приводим рост к метрам
    let bmi = w / Math.pow(hMetr, 2) ;  //находим коэффициент ИМТ
    result.textContent = bmi.toFixed(1);
    more.style.visibility = 'visible';
}
btn.addEventListener('click', calculateBMI);

more.onclick = function (event) {
    info.style.visibility = 'visible';
    };