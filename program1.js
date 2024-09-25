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
  const stack = [];
  for (let char of s) {
    if (char in matchingBracket) {
      const topElement = stack.length ? stack.pop() : "#";

      if (topElement !== matchingBracket) {
        return false;
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  }
};

module.exports = { isValid };
