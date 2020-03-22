function containsIdentNumb(arr) {
  const first = arr[0], arrLength = arr.length;
  let res = false;
  for (let i = 1; i <= arrLength-1; i++) {
    if (first === arr[i]) {}
    else {
      return false;
    }
  }
  res = true
  return res
}

module.exports = containsIdentNumb
