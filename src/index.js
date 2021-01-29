
exports.min = function min(array) {
  return array === undefined || array.length === 0 ? 0 : array.reduce((minNum, currentNum) => minNum > currentNum ? currentNum : minNum);
}

exports.max = function max(array) {
  return array === undefined || array.length === 0 ? 0 : array.reduce((maxNum, currentNum) => maxNum > currentNum ? maxNum : currentNum);
}

exports.avg = function avg (array) {
  return 0;
}
