/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
  const matchingBracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of s) {
    if (char in matchingBracket) {
      const topElement = stack.length ? stack.pop() : "#";

      if (topElement !== matchingBracket[char]) {
        return false;
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  }
};

module.exports = { isValid };
