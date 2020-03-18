function new_every(arr, callback) {
for (let i = 0; i < arr.length; i++) {
if (callback(arr[i], i, arr) === false) {
return false}
}
return true;
};

module.exports=new_every 