function printObj(obj) {
    for (var key in obj) {
        console.log(key, "=", obj[key]);
        return;
    }
}

module.exports = printObj
