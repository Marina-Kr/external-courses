const UNDERSOCRESSYMBOL = '_';
const ATTEPTSNUMBER = 6;

class Hangman {
    constructor(word) {
        this.word = word;
        this.wrongSymbols = [];
        this.guessedString = Array(word.length).fill(UNDERSOCRESSYMBOL);
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
        return ATTEPTSNUMBER - this.wrongSymbols.length;
    }

    getStatus() {
        let isWin = !this.guessedString.includes(UNDERSOCRESSYMBOL);
        let status = isWin ? 'You won!' : `errors left ${this.getErrorsLeft()}`;
        return `${this.getGuessedString()} | ${status}`;
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

module.exports = new Hangman