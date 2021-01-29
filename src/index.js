
exports.min = function min(array) {
  return array === undefined || array.length === 0 ? 0 : array.reduce((minNum, currentNum) => minNum > currentNum ? currentNum : minNum);
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
