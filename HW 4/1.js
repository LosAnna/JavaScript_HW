"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const numbersEvenOdd = (number) => {
  if (number === 0) {
    return `${number} - это ноль`;
  } else if (number % 2 === 0) {
    return `${number} - четное число`;
  } else {
    return `${number} - нечетное число`;
  }
};
for (let i = 0; i <= 10; i++) {
  console.log(numbersEvenOdd(i));
}