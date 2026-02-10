// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв

const str1 = "Android";
const str2 = "Iphone";

const checkDuplicatedLetters = (str: string) => {
  return new Set(str.toLowerCase()).size === str.length;
};

console.log(checkDuplicatedLetters(str1));
console.log(checkDuplicatedLetters(str2));
