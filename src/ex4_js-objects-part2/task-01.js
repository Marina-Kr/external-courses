function ShowKey(key, obj) {
	let objPrototype = Object.getPrototypeOf(obj)
    if (key in objPrototype) { 
        return objPrototype[key]
     }
}

module.exports = ShowKey