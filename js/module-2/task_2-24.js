// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// Тесты
// Объявлена функция checkFruit(fruit).
// Вызов checkFruit('слива') возвращает true.
// Вызов checkFruit('мандарин') возвращает false.
// Вызов checkFruit('груша') возвращает true.
// Вызов checkFruit('Груша') возвращает false.
// Вызов checkFruit('яблоко') возвращает true.
// Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean.
// В функции использовался метод includes.

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  
  return fruits.includes(fruit); // Дополни эту строку
}

console.log(checkFruit('слива')); //возвращает true.
console.log(checkFruit('мандарин')); //возвращает false.
console.log(checkFruit('груша')); //возвращает true.
console.log(checkFruit('Груша')); //возвращает false.
console.log(checkFruit('яблоко')); //возвращает true.
console.log(checkFruit()); //со случайным словом возвращает правильное значение boolean.
