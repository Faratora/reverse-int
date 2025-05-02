module.exports = function reverse(num) {
  throw new Error('Not implemented');
  let result = 0;
  while (num) {
    result = result + (num % 10);
    num = Math.floor(num);
  }
  return result;
};
reverse()
