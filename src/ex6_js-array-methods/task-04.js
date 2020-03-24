function newFilter(arr, callback) {
  let new_arr=[], j=0
  for (let i = 0; i < arr.length; i++) {
	if (callback(arr[i], i, arr) === true) {
	  new_arr[j]=arr[i]
      j++
	}
  }
  return new_arr;
}

module.exports=newFilter
