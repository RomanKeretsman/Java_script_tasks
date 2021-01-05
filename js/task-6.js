// Задание
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800;
// orderedQuantity - количество дроидов в заказе, значение 6;
// deliveryFee - стоимость доставки, значение 50;
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
// message - сообщение о состоянии заказа в формате; Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.
// Тесты
// Объявлена переменная orderedQuantity.
// Значение переменной orderedQuantity это число 6.
// Объявлена переменная pricePerDroid.
// Значение переменной pricePerDroid это число 800.
// Объявлена переменная deliveryFee.
// Значение переменной deliveryFee это число 50.
// Объявлена переменная totalPrice.
// Значение переменной totalPrice это число 4850.
// Объявлена переменная message.
// Значение переменной message это строка 'Вы заказали дроидов на сумму 4850 кредитов. Доставка (50 кредитов) включена в сумму заказа.'
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(totalPrice);
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
console.log(message); //'Вы заказали дроидов на сумму 4850 кредитов. Доставка (50 кредитов) включена в сумму заказа.';