function newMap(arr, callback) {
  let new_arr=[]
  for (let i = 0; i < arr.length; i++) {
	new_arr[i] = callback(arr[i], i, arr)
  }
  return new_arr;
};

module.exports=newMap
 