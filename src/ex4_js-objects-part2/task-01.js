function ShowKey(key, obj) {
    if (key in Object.getPrototypeOf(obj)) { 
        return Object.getPrototypeOf(obj)[key]
     }
}

module.exports = ShowKey