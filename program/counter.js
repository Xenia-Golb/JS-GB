class Counter {
    #count = 0;
    constructor() {
        this.#count = 0;
    }
    add() {
        this.#count += 1;
        console.log(`В нашем питомнике: ${this.#count} животных`);
    }
}

const counter = new Counter();
