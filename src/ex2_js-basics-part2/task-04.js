function containsIdentNumb(arr){
  let x = 0
for (let i=0; i <arr.length; i++) {
          if (arr[i]===arr[i+1]) 
		  {x++}
    }
     if (x===arr.length-1) {return true} 
 return false
}

module.exports = containsIdentNumb



