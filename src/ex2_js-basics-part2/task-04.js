 function containsIdentNumb(array) {
  for (let i = 1; i <= array.length-1; i++) {
    if (array[0]!== array[i]) {
	return false;
	}
  }
  return true
}

module.exports = containsIdentNumb
