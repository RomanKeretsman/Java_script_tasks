// Задание
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// Тесты
// Объявлена функция getNameLength(name).
// Вызов функции getNameLength('Poly') возвращает 'Длина вашего имени 4 символа(ов)'.
// Вызов функции getNameLength('Harambe') возвращает 'Длина вашего имени 6 символа(ов)'.
// Вызов функции getNameLength('Billy') возвращает 'Длина вашего имени 5 символа(ов)'.
// Вызов функции getNameLength('Joe') возвращает 'Длина вашего имени 3 символа(ов)'.

function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
}
console.log((getNameLength('Poly'))); //возвращает 'Длина вашего имени 4 символа(ов)'.
console.log((getNameLength('Harambe'))); //возвращает 'Длина вашего имени 6 символа(ов)'.
console.log((getNameLength('Billy'))); //возвращает 'Длина вашего имени 5 символа(ов)'.
console.log((getNameLength('Joe'))); //возвращает 'Длина вашего имени 3 символа(ов)'.
