"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const addition = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtraction = (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) return 0;
  return firstNumber > secondNumber
    ? firstNumber - secondNumber
    : secondNumber - firstNumber;
};
const multiplication = (firstNumber, secondNumber) =>
  firstNumber * secondNumber;
const division = (firstNumber, secondNumber) => firstNumber / secondNumber;

console.log(addition(5, 8));
console.log(subtraction(5, 8));
console.log(multiplication(5, 8));
console.log(division(5, 8));
