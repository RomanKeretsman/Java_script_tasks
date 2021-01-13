// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice([]) возвращает 0.
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму.

function calculateTotalPrice(orders) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const order of orders) {
    total += order;
  }

  // Пиши код выше этой строки
  return total;
}

console.log((calculateTotalPrice([12, 85, 37, 4]))); //возвращает 138.
console.log((calculateTotalPrice([164, 48, 291]))); //возвращает 503.
console.log((calculateTotalPrice([412, 371, 94, 63, 176]))); //возвращает 1116.
console.log((calculateTotalPrice([]))); //возвращает 0.
console.log((calculateTotalPrice())); //со случайным массивом чисел возвращает правильную сумму.