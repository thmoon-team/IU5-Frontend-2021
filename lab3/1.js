/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let i = 0;
    let newstr = '';
    newstr = str.charAt(0).toLocaleUpperCase();
    while (i < str.length) {
        i++;
        if (str.charAt(i) == ' ') {
            newstr = newstr + ' ' + str.charAt(i + 1).toLocaleUpperCase();
            i++;
        } else {
            newstr = newstr + str.charAt(i);
        }


    };
    return newstr;
}

module.exports = capitalize;