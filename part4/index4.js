const fullName = document.querySelector(".form1");
const yourFoto = document.querySelector(".form2");
const yourComment = document.querySelector(".form3");
const btn = document.querySelector(".form__btn");

const resultName = document.querySelector(".fullname");
const resultComment = document.querySelector(".yourcomment");

function changeName() {
  let capital = fullName.value.charAt(0).toUpperCase(); // преобразовываем имя с заглавной буквы
  let rest = fullName.value.slice(1).toLowerCase(); // преобразовываем имя
  resultName.innerHTML = capital + rest;
}
function changeComment() {
  resultComment.innerHTML = yourComment.value.replace(/(xxx|viagra)/gi, "***"); // заменяем недопустимые слова
}
function changeImage() {
  document.querySelector(".yourfoto").src = yourFoto.value; 
}

function seeResult() {
  changeName();
  changeImage();
  changeComment();
}