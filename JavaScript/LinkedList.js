export class LinkedNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`
    }
};

export class LinkedList extends LinkedNode {

};