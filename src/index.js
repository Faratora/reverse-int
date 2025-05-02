module.exports = function reverse(num) {
  let result = 0;
  let innerNum = num;
  while (innerNum) {
    innerNum = Math.abs(innerNum);
    result = result * 10 + (innerNum % 10);
    innerNum = Math.floor(innerNum / 10);
  }
  return result;
};
