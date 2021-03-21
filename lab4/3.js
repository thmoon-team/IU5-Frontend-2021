/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let cnt = 0;
    let chr;
    let i = 0;
    let newstr = "";
    chr = str[0];
    if (str != "") {
        while (i < str.length) {
            if (chr == str[i]) {
                cnt++;
                i++;
            } else {
                chr = str[i];
                if (cnt == 1) {
                    newstr = newstr + str[i - 1];
                } else {
                    newstr = newstr + str[i - 1] + cnt;
                }
                cnt = 0;
            }
        }
        if (cnt != 1) {
            newstr = newstr + chr + cnt;
        } else {
            newstr = newstr + chr;
        }
    }
    return newstr;
}

module.exports = rle;