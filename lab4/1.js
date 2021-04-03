/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let newarr = new Map();
    let tmp = new Array();
    let key;
    arr.forEach(el => {
        key = el.toLowerCase().split("").sort().join("");
        tmp = arr.filter(elmt => {
            return key == elmt.toLowerCase().split("").sort().join("");
        });
        newarr.set(key, tmp)

    });
    return Array.from(newarr.values());
}

module.exports = getAnagramms;