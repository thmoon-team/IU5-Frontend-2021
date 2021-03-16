/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let i = 0;
    let obj = {
        max: 0,
        min: 0
    }
    obj.min = 9999999;
    obj.max = -9999999;
    let sep = /\s*[А-Яа-я,( )]+\s*/;
    let newstr = str.split(sep);
    while (i < newstr.length) {
        if (newstr[i] !== null) {
            if (obj.min > Number.parseFloat(newstr[i])) obj.min = Number.parseFloat(newstr[i]);
            if (obj.max < Number.parseFloat(newstr[i])) obj.max = Number.parseFloat(newstr[i]);
        }
        i++;
    }
    return obj;
}

module.exports = getMinMax;