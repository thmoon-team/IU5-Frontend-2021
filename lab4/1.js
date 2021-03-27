/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let obj = {};
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");

        if (typeof obj[sorted] === "undefined") {
            obj[sorted] = [];
        }
        obj[sorted].push(word);
    }
    return Object.values(obj);
}

module.exports = getAnagramms;
