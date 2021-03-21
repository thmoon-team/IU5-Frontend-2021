/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/


let newarr = new Array();
let i = 0;

function get1DArray(arr) {
    newarr = [];
    newarr = rec(arr);
    return newarr;
}

function rec(arr) {
    arr.forEach(el => {
        if (Array.isArray(el)) {
            rec(el);
        } else newarr.push(el);
    });
    return newarr;
}



module.exports = get1DArray;