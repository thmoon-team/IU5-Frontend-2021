/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */
if (!Array.prototype.map) {

    Array.prototype.myMap = function(callback) {
        return this.reduce((a) => { return a.concat(callback()); });
    }

    Object.defineProperty(Array.prototype, 'myMap', {
        value: f => Array.prototype.myMap(),
        configurable: true
    });
}