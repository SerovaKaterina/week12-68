const text = document.getElementById('text');
const trueText = text.textContent;

//1.Количество символов в тескте
//2.Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.

const result = trueText.replace(/;/g, '\n');

//3.Удалите все пробелы в переменной result и сохраните результат в переменную substring.

const substring = result.replace(/\s/g, '');

/* 4.Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText. */

const newText = result.slice(28, 50);

/* 5. Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText. */

const replacedText = newText.replace('клён', 'дубе');

// 6.Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.

const replacedText2 = result.toUpperCase();

// 7. Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.

const replacedText3 = result.replace(/клён/g, 'дуб');

// 8. Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.

const index = trueText.indexOf('моря');

/* 9. Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText. */

const modifiedText = replacedText.charAt([0]).toUpperCase() + replacedText.slice(1);

console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
