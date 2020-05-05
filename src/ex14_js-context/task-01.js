function checkType(number) {
	if (typeof (number) === "number") {
		return true
	}
	return false
}

class Calculator {
	constructor() {
		this.result = 0;
	}

	add(number = 0) {
		if (checkType(number)) {
			this.result += number
		}
		return this;
	}

	subtract(number = 0) {
		if (checkType(number)) {
			this.result -= number
		}
		return this;
	}

	divide(number = 1) {
		if (checkType(number)) {
			this.result /= number
		}
		return this;
	}

	multiply(number = 1) {
		if (checkType(number)) {
			this.result *= number
		}
		return this;
	}
	getResult() {
		return this.result;

	}
	reset() {
		this.result = 0;
		return this;
	}

	setState(number) {
		if (number) {
			this.result = number;
		}
			return this;
	}

	fetchData(callback) {
		setTimeout(callback, 1000, this.result = 500);
		return this;

	}

}

module.exports = new Calculator