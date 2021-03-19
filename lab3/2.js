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
  let nums = str.match(/[-]?[0-9]*\.?,?[0-9]+/g)

  let min = Number(nums[0])
  let max = Number(nums[0])

  for (let num of nums) {
    let int = Number(num)
    if (int < min) {
      min = int
    } else if (int > max) {
      max = int
    }
  }

  return {min, max}
}

module.exports = getMinMax;