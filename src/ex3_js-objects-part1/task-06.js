function deepCopy(obj) {
  if (obj === null) return null;
  let copy = Object.assign({}, obj);
  for (let prop in obj) {
    if (obj[prop] instanceof Object) {
      copy[prop] = deepCopy(obj[prop]);
    }
    else copy[prop] = obj[prop];
  }
  if (Array.isArray(obj) && obj.length) { return (copy.length = obj.length) && Array.from(copy) }
  else if (Array.isArray(obj)) { return Array.from(obj) }
  return copy;
}

module.exports = deepCopy
