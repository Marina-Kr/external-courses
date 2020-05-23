const UNDERSOCRES_SYMBOL = '_';
const ATTEMPTS_NUMBER = 6;

class Hangman {
    constructor(word) {
        this.word = word;
        this.wrongSymbols = [];
        this.guessedString = Array(word.length).fill(UNDERSOCRES_SYMBOL);
    }

    guess(symbol) {
        const isSymbolExists = this.word.includes(symbol);

        if (isSymbolExists) {
            this.openSymbol(symbol);
        } else {
            this.addWrongSymbol(symbol);
        }

        return this; 
    }

    getGuessedString() {
        return this.guessedString.join('');
    }

    getWrongSymbols() {
        return this.wrongSymbols.slice();
    }

    getErrorsLeft() {
        return ATTEMPTS_NUMBER - this.wrongSymbols.length;
    }

    getStatus() {
        let isWin = !this.guessedString.includes(UNDERSOCRES_SYMBOL);
        let status = isWin ? 'You won!' : `errors left ${this.getErrorsLeft()}`;
        return `${this.getGuessedString()} | ${status}`;
    }
  
    startAgain(word) {
        this.word = word;
        this.wrongSymbols = [];
        this.guessedString = Array(word.length).fill(UNDERSOCRES_SYMBOL);
		return this; 
    }

    openSymbol(symbol) {
        let regExp = new RegExp(symbol, 'g');
        let matches = this.word.matchAll(regExp);

        for (let match of matches) {
            this.guessedString[match.index] = symbol;
        }
    }

    addWrongSymbol(symbol) {
        this.wrongSymbols.push(symbol);
    }
}

module.exports = new Hangman("webpurple")