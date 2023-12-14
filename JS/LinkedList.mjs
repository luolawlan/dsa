class linkednode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    // what is callback in fact?
    toString(callback) {
        return callback ? callback(this.value) : `$(this.value)`;
    }
}

class linkedlist extends linkednode {
    
}