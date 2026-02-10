/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая возвращает новый массив только положительных чисел, умноженный вдвое

const array: number[] = [1, -5, 7, 8, -9, 0, -4];

const positiveArray = (arr: number[]) => {
  return arr.filter((value) => value >= 0).map((value) => value * 2);
};

console.log(positiveArray(array));
