// Поиск самого длинного слова
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

function findLongestWord(string) {
  // Пиши код ниже этой строки
  let arr = string.split(' ');
  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //возвращает jumped.
console.log(findLongestWord('Google do a roll')); //возвращает Google.
console.log(findLongestWord('May the force be with you')); //возвращает force.
console.log(findLongestWord()); //со случайной строкой возвращает правильное значение.
