// Задание
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// Тесты
// Объявлена переменная start со значением 6.
// Объявлена переменная end со значением 27.
// Объявлена переменная number без инициализации.
// Итоговое значение переменной number равно 10.
// В цикле for используется break для выхода до завершения всех итераций цикла.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
      number = i;
      console.log(number);
      break;
  }
}
