function hasProperty(key, obj) {
  let newobj = obj;
  if (newobj.hasOwnProperty(key)) { return true }
  newobj[key] = "new";
  return newobj
}

module.exports = hasProperty
