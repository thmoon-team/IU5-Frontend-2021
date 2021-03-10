/**
 * @param {number} x
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 */

function sum(x) {
  if (!x) {
    return 0;
  }
  let count = x;
  function f(y) {
    if (!y) {
      return count;
    }
    count += y;
    return f;
  }
  f.valueOf = () => count;
  return f;
}

module.exports = sum;
