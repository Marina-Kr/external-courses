class Sweets {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
}

class Candy extends Sweets {
    constructor(name, weight, price, type) {
        super(name, weight, price);
        this.type = type;
    }
}

class Chocolate extends Sweets {
    constructor(name, weight, price, flavor) {
        super(name, weight, price);
        this.flavor = flavor;
    }
}

class Marmelad extends Sweets {
    constructor(name, weight, price, shape) {
        super(name, weight, price);
        this.shape = shape;
    }
}

class Gift {
    constructor(content) {
        this.content = content;
    }
    calculateWeight() {
        let result = 0;
        for (let i = 0; i < this.content.length; i++) {
            result += this.content[i].weight;
        }
        return Number(result.toFixed(2));
    }

    sortContent() {
        return this.content.slice().sort((a, b) => a.price > b.price ? 1 : -1);
    }

    searchGift(giftName) {
        for (let i = 0; i < this.content.length; i++) {
            if (this.content[i].name === giftName) {
                return this.content[i];
			}
        }
        return "Не найдено"
    }
}

let barbaris = new Candy("Барбарис", 0.3, 10, "Карамель");
let korovka = new Candy("Коровка", 0.4, 15, "Карамель");
let toffee = new Candy("Toffee", 0.5, 15); 
let milka = new Chocolate("Милка", 3, 90, "С фундуком");
let ritterSport = new Chocolate("Ritter Sport", 2.5, 120, "С мятой");
let sharliz = new Marmelad("Шарлиз", 5, 50, "Квадрат");
let gift = new Gift([barbaris, toffee, ritterSport, milka, sharliz, korovka])
console.log(gift)
console.log(gift.calculateWeight())
console.log(gift.sortContent())
console.log(gift.searchGift("Шарлиз"))