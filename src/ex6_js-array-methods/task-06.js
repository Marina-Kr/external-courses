function newReduce(array, callback, initialValue) {
  let previousValue, currentItem, initialValue1 = initialValue
	for (let i = 0; i < array.length; i++) {
	  if (initialValue1 === undefined) {
	    previousValue = array[0];
	    currentItem = array[1];
	    i=1
	  }
	  else {
	previousValue = initialValue1;
	currentItem = array[i];
	  }      
	initialValue1 = callback(previousValue, currentItem, i, array)
	}
  return initialValue1;
}

module.exports=newReduce 