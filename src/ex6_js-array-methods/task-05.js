function new_map(arr, callback) {
let new_arr=[]
for (let i = 0; i < arr.length; i++) {
new_arr[i] = callback(arr[i], i, arr)
}
return new_arr;
};

module.exports=new_map 