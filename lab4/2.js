/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    //code here
    let resault = true;
    let i = 0;
    let n = str.length;
    while (i < n / 2) {
        if (str[i] != str[n - i - 1]) resault = false;
        i++;
    }
    return resault;
}

module.exports = isPalindrome;