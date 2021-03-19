/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
  let res = ""
  res += str[0].toLocaleUpperCase()
  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      res += str[i].toLocaleUpperCase()
    } else {
      res += str[i]
    }
  }

  return res
}

module.exports = capitalize;