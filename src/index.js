
exports.min = function min (array) {
  if(!Array.isArray(array) || array.length === 0) return 0;
  return array.reduce( (acc, elem) => Math.min(acc, elem), 0);
}

exports.max = function max (array) {
  if(!Array.isArray(array) || array.length === 0) return 0;
  return array.reduce( (acc, elem) => Math.max(acc, elem), 0);
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || array.length === 0) return 0;
  return array.reduce( (acc, elem) => acc +elem, 0) / array.length;
}
