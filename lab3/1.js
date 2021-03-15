/**
 * @param {string} str
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
const capitalize = (str) => str.split(' ').map((subStr) => subStr.charAt(0).toUpperCase() + subStr.slice(1).toLowerCase()).join(' ');

module.exports = capitalize;
