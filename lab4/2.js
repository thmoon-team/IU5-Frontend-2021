/**
 * @param {string} str
 * @returns {boolean}
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
  return str.slice(Math.ceil(str.length / 2)) === str.slice(0, Math.floor(str.length / 2)).split('').reverse().join('');
}

module.exports = isPalindrome;
