function new_some(arr, callback) {
for (let i = 0; i < arr.length; i++) {
if (callback(arr[i], i, arr) === true) {
return true}
}
return false;
};

module.exports=new_some 