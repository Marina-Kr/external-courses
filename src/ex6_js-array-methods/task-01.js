function newSlice(arr, n, m) {
  let new_arr=[]
  if (n > 0 && m > 0) {
	for(let i=0; i<m-n; i++) {
		new_arr[0+i]=arr[n+i]
	}
  }
  else if (n < 0 && m < 0) {
	let n1 = arr.length - Math.abs(n)
	let m1 = arr.length - Math.abs(m)
	for(let i=0; i<m1-n1; i++) {
       new_arr[0+i]=arr[n1+i]
	}
  }
  else if (n > 0 && m === undefined) {
	let m1 = arr.length;
	for(let i=0; i<m1-n; i++) {
	  new_arr[0+i]=arr[n+i]
	}
  } 
  else if (n < 0 && m === undefined) {
	let m1 = arr.length;
	let n1 = arr.length - Math.abs(n)
	for(let i=0; i<m1-n1; i++) {
	  new_arr[0+i]=arr[n1+i]
	}
  }   
  else if (n === undefined && m === undefined) {
	new_arr=arr
   }
   return new_arr
} 

module.exports=newSlice
