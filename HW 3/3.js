"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userFirstNum = Number.parseFloat(prompt("Введите первое число"));
const userSecondNum = Number.parseFloat(prompt("Введите второе число"));
const userThirdNum = Number.parseFloat(prompt("Введите третье число"));

const maxNumber = (firstNum, secondNum, thirdNum) =>
  Math.max(firstNum, secondNum, thirdNum);
console.log(maxNumber(userFirstNum, userSecondNum, userThirdNum));
