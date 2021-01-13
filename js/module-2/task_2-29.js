// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// Тесты
// Объявлена функция getEvenNumbers(start, end).
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
// Вызов функции getEvenNumbers(8, 8) возвращает [8].
// Вызов функции getEvenNumbers(7, 7) возвращает [].
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив.

function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let evenArrayNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenArrayNumbers.push(i);
        }
    }
    return evenArrayNumbers;
  // Пиши код выше этой строки
}

console.log(getEvenNumbers(2, 5)); //возвращает [2, 4].
console.log(getEvenNumbers(3, 11)); //возвращает [4, 6, 8, 10].
console.log(getEvenNumbers(6, 12)); //возвращает [6, 8, 10, 12].
console.log(getEvenNumbers(8, 8)); //возвращает [8].
console.log(getEvenNumbers(7, 7)); //возвращает [].
console.log(getEvenNumbers()); //со случайными start и end возвращает правильный массив.
