/**
 * Currying
 * Function workflow:
 * check if function got all required params
 * if true just return the result of this function
 * else get new function through .bind and recursively return new function
 * @param {Function} func
 */

const curry = (func) => (...params) => {
  if (func.length > params.length) {
    const f = func.bind(null, ...params);
    return curry(f);
  }
  return func(...params);
};

module.exports = curry;
