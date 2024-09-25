/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const matchingBracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = []
  for (let char of s){
    if(char in matchingBracket)
  }
};

module.exports = { isValid };
